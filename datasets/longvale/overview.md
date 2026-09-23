# LongVALE：数据集与评测概览

8,411 个视频、105,730 个视觉/声音/语音联合事件；测试带时间边界的全模态事件理解。

**相关性：长上下文近邻。** 长上下文近邻：可用于测试记忆如何融合视觉、声音、语音并保留时间关系；不是专门的持续记忆 benchmark。

## 论文与筛选依据

- 标题：LongVALE: Vision-Audio-Language-Event Benchmark Towards Time-Aware Omni-Modal Perception of Long Videos
- arXiv首次提交：2024-11-29；[arXiv](https://arxiv.org/abs/2411.19772)
- 引用：60，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/f5cd5eb5ae03cd59e58b6c009afc77b90dee5b53)
- GitHub：62 stars（2026-09-23）；[官方仓库](https://github.com/ttgeng233/LongVALE)
- 状态：CVPR 2025；[核验来源](https://github.com/ttgeng233/LongVALE)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 8,411 个视频；105,730 个全模态事件（训练91,863，评测13,867）。

**视频长度/上下文跨度：** 训练集 473.8 小时、7,240 视频；评测集 75.6 小时、1,171 视频。总549.4小时，按官方总量计算平均约235.2秒/视频。

将视觉、非语音声音和语音共同划分为语义连贯事件，标注精确时间边界及跨模态关联描述；支持事件定位、描述和问答。

## 主要结果（论文报告，未本地复现）

论文提出 LongVALE-LLM 并在全模态细粒度时间理解上建立基线；它强调仅看视觉帧会遗漏声音/语音引发的事件边界和关系。页面保留官方数据规模与任务定义，不把模型基线当成跨天记忆系统。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/ttgeng233/LongVALE)
- [官方项目](https://ttgeng233.github.io/LongVALE/)

已取得 2 个官方视频文件：1 个直接播放 case、1 组100帧预览。每个完整视频文件均小于100MB；时长由PyAV读取，来源与SHA256记录在project.json。

| 本地文件 | 播放长度 | 文件大小 | 呈现 |
|---|---:|---:|---|
| [_6D4W48qMQo.mp4](samples/_6D4W48qMQo.mp4) | 59.40秒 | 5.19MB | 直接播放 |
| [_JtjTlJ_H8g.mp4](samples/_JtjTlJ_H8g.mp4) | 205.92秒 | 5.91MB | 均匀100帧 |

另有 2 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

两个样例来自官方测试ZIP的单独成员，只传输了必要Range字节；整包未保存。通过较小文件筛选取得的样例不代表全库时长分布。

## 边界与限制

- 官方HF现提供原始测试/训练ZIP。已通过有界HTTP Range从1.06GB测试ZIP中仅读取两个5.19/5.91MB MP4成员；整包未下载。两个样例不代表全库时长分布。
- 平均视频长度为官方小时数除以视频数的计算值，原始长度分布不是固定235秒。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2411.19772)
- [官方仓库](https://github.com/ttgeng233/LongVALE)
- [官方项目](https://ttgeng233.github.io/LongVALE/)

[← 返回主目录](../../index.html)
