const DATA=JSON.parse(document.getElementById('dataset-data').textContent);
const select=document.getElementById('group-select'),grid=document.getElementById('gallery-grid'),dialog=document.getElementById('frame-dialog');
let active=[],current=0;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const secs=v=>v===null||v===undefined||!Number.isFinite(Number(v))?'未核验':Number(v).toFixed(2)+' 秒';
const label=r=>r.source_label||r.video_id||r.image?.split('/').at(-1)||r.title||'视频 case';
const durationLabel=(g,r)=>r.duration_label||g.duration_label||'视频时长';
const fmtBytes=v=>Number.isFinite(Number(v))?((Number(v)/1000000).toFixed(1)+' MB'):'大小未核验';
const framesOf=g=>g.frames||[];
const casesOf=g=>g.video_cases||[];
for(const g of DATA.groups){
  const o=document.createElement('option');o.value=g.id;
  const parts=[g.title];
  if(casesOf(g).length) parts.push(casesOf(g).length+' 个视频 case');
  if(framesOf(g).length) parts.push(framesOf(g).length+' 张');
  o.textContent=parts.join(' · ');select.append(o);
}
function renderVideoCase(c){
  const card=document.createElement('article');card.className='video-case';
  const title=c.title||c.source_label||c.video_id||'视频 case';
  const source=c.source_url?'<a href="'+esc(c.source_url)+'" target="_blank" rel="noopener">官方来源</a>':'';
  const local='<a href="'+esc(c.local_video)+'" target="_blank" rel="noopener">打开本地文件</a>';
  card.innerHTML='<video controls preload="metadata" playsinline src="'+esc(c.local_video)+'"></video><div class="video-case-content"><strong>'+esc(title)+'</strong><span class="muted">'+esc(c.category||'短视频 case')+' · '+secs(c.duration_seconds)+' · '+fmtBytes(c.size_bytes)+'</span><span>'+local+(source?' · '+source:'')+'</span></div>';
  return card;
}
function renderGroup(){
  const group=DATA.groups.find(g=>g.id===select.value);if(!group)return;
  active=framesOf(group);
  const cases=casesOf(group);
  document.getElementById('group-title').textContent=group.title;
  document.getElementById('group-description').textContent=group.description||'';
  const count=[];if(cases.length)count.push(cases.length+' 个视频 case');if(active.length)count.push(active.length+' 张');
  document.getElementById('group-count').textContent=count.join(' · ');
  const sheet=document.getElementById('contact-sheet');sheet.hidden=!group.contact_sheet;if(group.contact_sheet)sheet.href=group.contact_sheet;
  grid.replaceChildren();cases.forEach(c=>grid.append(renderVideoCase(c)));
  active.forEach((r,i)=>{const card=document.createElement('button');card.className='frame-card';card.innerHTML='<img loading="lazy" src="'+esc(r.image)+'" alt="'+esc(label(r))+'"><div class="frame-caption">'+String(i+1).padStart(3,'0')+' · '+esc(label(r))+'<span class="muted">'+(group.media_kind==='image'?'静态图像 · 非视频帧':esc(durationLabel(group,r))+' '+secs(r.duration_seconds)+' · 取帧 '+secs(r.timestamp_seconds))+'</span></div>';card.onclick=()=>openFrame(i);grid.append(card)});
  history.replaceState(null,'','#'+group.id);
}
function openFrame(index){
  if(!active.length)return;current=(index+active.length)%active.length;const r=active[current],group=DATA.groups.find(g=>g.id===select.value);
  document.getElementById('large-frame').src=r.image;
  document.getElementById('frame-detail').innerHTML='<strong>'+esc(label(r))+'</strong><br>第 '+(current+1)+' / '+active.length+' 张'+(group.media_kind==='image'?' · 静态图像':' · '+esc(durationLabel(group,r))+' '+secs(r.duration_seconds)+' · 取帧位置 '+secs(r.timestamp_seconds))+'<br><a href="'+esc(r.image)+'" target="_blank">打开图片</a>'+(r.source_url?' · <a href="'+esc(r.source_url)+'" target="_blank" rel="noopener">原始来源</a>':'')+(r.local_video?' · <a href="'+esc(r.local_video)+'" target="_blank" rel="noopener">本地小视频</a>':'');
  if(!dialog.open)dialog.showModal();
}
select.onchange=renderGroup;document.getElementById('frame-prev').onclick=()=>openFrame(current-1);document.getElementById('frame-next').onclick=()=>openFrame(current+1);document.getElementById('frame-close').onclick=()=>dialog.close();document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowLeft')openFrame(current-1);if(e.key==='ArrowRight')openFrame(current+1)});
if(DATA.groups.length){const initial=location.hash.slice(1);if(DATA.groups.some(g=>g.id===initial))select.value=initial;renderGroup()}else{document.getElementById('gallery-controls').hidden=true;grid.innerHTML='<div class="empty">'+esc(DATA.no_preview_reason||'目前未取得符合下载限制的公开视频。请查看 overview 中的数据发布状态和访问方式。')+'</div>'}
