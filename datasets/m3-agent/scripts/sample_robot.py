"""Probe M3-Bench videos and draw previews using bounded HTTP Range reads only."""
import concurrent.futures
import csv
import json
import sys
from pathlib import Path

import av

BASE = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BASE.parents[1] / 'scripts'))
from range_video import RangeVideo

info = json.loads((BASE / 'sources/hf_info.json').read_text())
videos = [v for v in info['siblings'] if v['rfilename'].endswith('.mp4')]
REV = info['sha']

def extract(v, preview=False):
    name = Path(v['rfilename']).stem
    scene = name.rsplit('_', 1)[0]
    source = f"https://huggingface.co/datasets/ByteDance-Seed/M3-Bench/resolve/{REV}/{v['rfilename']}"
    url = source.replace('huggingface.co', 'hf-mirror.com')
    out = {'video_id':name, 'scene':scene, 'path':v['rfilename'], 'size_bytes':v['size'], 'source_url':source, 'method':'HTTP Range; full video never saved', 'frames':[]}
    reader = None
    try:
        reader = RangeVideo(url, size=v['size'], budget=48_000_000 if preview else 4_000_000, block=262144)
        with av.open(reader) as container:
            stream = container.streams.video[0]
            stream.thread_type = 'AUTO'
            duration = float(stream.duration * stream.time_base) if stream.duration else container.duration / 1e6
            out.update(duration_seconds=duration, width=stream.width, height=stream.height, fps=float(stream.average_rate))
            if preview:
                dest = BASE / 'previews' / scene
                dest.mkdir(parents=True, exist_ok=True)
                for portion in [.1, .35, .6, .85]:
                    start = duration * portion
                    container.seek(int(start / stream.time_base), stream=stream, backward=True)
                    targets = [start + j * .1 for j in range(25)]
                    index = 0
                    for frame in container.decode(stream):
                        ts = float(frame.pts * stream.time_base)
                        if ts + 1e-6 < targets[index]:
                            continue
                        image = frame.to_image()
                        image.thumbnail((640,640))
                        rel = f'previews/{scene}/{len(out["frames"])+1:03}.jpg'
                        image.save(BASE / rel, quality=85)
                        out['frames'].append({'image':rel,'source_url':source,'source_label':f'M3-Bench-robot / {scene}（一个代表视频）','video_id':name,'timestamp_seconds':ts,'duration_seconds':duration})
                        index += 1
                        if index == 25:
                            break
                    if index != 25:
                        raise RuntimeError(f'Only {index} frames in window')
        out['ok'] = True
    except Exception as e:
        out.update(ok=False, error=f'{type(e).__name__}: {e}')
    finally:
        if reader is not None:
            out.update(range_bytes=reader.downloaded, range_requests=reader.requests)
            reader.close()
    return out

if __name__ == '__main__':
    scenes = sorted({Path(v['rfilename']).stem.rsplit('_',1)[0] for v in videos})
    selected = [min((v for v in videos if Path(v['rfilename']).stem.rsplit('_',1)[0] == scene), key=lambda v:v['size']) for scene in scenes]
    results = []
    checkpoint = BASE / 'metadata/robot_preview_results.jsonl'
    done = {}
    if checkpoint.exists():
        for line in checkpoint.read_text().splitlines():
            x = json.loads(line)
            if x.get('ok') and len(x['frames']) == 100:
                done[x['video_id']] = x
    pending = [v for v in selected if Path(v['rfilename']).stem not in done]
    results.extend(done.values())
    with concurrent.futures.ThreadPoolExecutor(max_workers=7) as pool:
        for out in pool.map(lambda v:extract(v, True), pending):
            results.append(out)
            with checkpoint.open('a') as f:
                f.write(json.dumps(out, ensure_ascii=False) + '\n')
            print(out['video_id'], out['ok'], len(out['frames']), out.get('duration_seconds'), out.get('range_bytes'), out.get('error',''), flush=True)
    (BASE / 'metadata/robot_preview_manifest.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
    # Cache container duration probes, independently of preview sampling.
    durations = {x['video_id']: {k:v for k,v in x.items() if k != 'frames'} for x in results if x.get('duration_seconds')}
    duration_checkpoint = BASE / 'metadata/duration_probes.jsonl'
    if duration_checkpoint.exists():
        for line in duration_checkpoint.read_text().splitlines():
            x = json.loads(line)
            if x.get('duration_seconds'):
                durations[x['video_id']] = x
    pending = [v for v in videos if Path(v['rfilename']).stem not in durations]
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
        for out in pool.map(extract, pending):
            out.pop('frames', None)
            durations[out['video_id']] = out
            with duration_checkpoint.open('a') as f:
                f.write(json.dumps(out, ensure_ascii=False) + '\n')
            print('duration', out['video_id'], out['ok'], out.get('duration_seconds'), out.get('range_bytes'), out.get('error',''), flush=True)
    (BASE / 'metadata/video_durations.json').write_text(json.dumps(list(durations.values()), ensure_ascii=False, indent=2))
