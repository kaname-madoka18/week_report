# Video-MMLU：数据集与评测概览

1,065 个数学/物理/化学课堂视频，评估详细笔记和讲授内容问答；15,746个推理QA。

**相关性：评测近邻。** 评测近邻：衡量短课堂视频中的知识抽取、理解与使用，不是长时记忆或跨会话记忆benchmark。纳入时显式保留此边界。

## 论文与筛选依据

- 标题：Video-MMLU: A Massive Multi-Discipline Lecture Understanding Benchmark
- arXiv首次提交：2025-04-20；[arXiv](https://arxiv.org/abs/2504.14693)
- 引用：43，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/9dd42fbd05b1632fbe8332ac1c02fe17707a32aa)
- GitHub：34 stars（2026-09-23）；[官方仓库](https://github.com/Espere-1119-Song/Video-MMLU)
- 状态：ICCV 2025 Workshop · Findings；[核验来源](https://openaccess.thecvf.com/content/ICCV2025W/Findings/papers/Song_Video-MMLU_A_Massive_Multi-Discipline_Lecture_Understanding_Benchmark_ICCVW_2025_paper.pdf)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 1,065视频；1,065详细描述（平均489词）；15,746推理QA；源自10个教育YouTube频道。

**视频长度/上下文跨度：** 单视频10–240秒；平均109秒；82.2%不超过180秒。因此本页优先直接播放短case。

以“学生看课—记笔记—做测验”组织；动态OCR、公式和动画感知；生成详细描述与根据讲授材料进行开放式推理问答。

## 主要结果（论文报告，未本地复现）

论文评估90余个模型，指出动态符号/公式识别与进一步推理是主要瓶颈，并分析视觉token数量和语言模型骨干对结果的影响。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/Enxin/Video-MMLU)
- [官方项目](https://www.enxinsong.com/Video-MMLU-web/)

已取得 3 个官方视频文件：2 个直接播放 case、1 组100帧预览。每个完整视频文件均小于100MB；时长由PyAV读取，来源与SHA256记录在project.json。

| 本地文件 | 播放长度 | 文件大小 | 呈现 |
|---|---:|---:|---|
| [xgfYivQt-x0.mp4](samples/xgfYivQt-x0.mp4) | 58.23秒 | 1.20MB | 直接播放 |
| [Y_w07A7chnk.mp4](samples/Y_w07A7chnk.mp4) | 144.00秒 | 4.54MB | 直接播放 |
| [6H6nCpGW1nU.mp4](samples/6H6nCpGW1nU.mp4) | 204.14秒 | 4.23MB | 均匀100帧 |

## 边界与限制

- 大多数片段只有数十秒到3分钟；与日/周尺度记忆数据不同。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2504.14693)
- [官方仓库](https://github.com/Espere-1119-Song/Video-MMLU)
- [官方项目](https://www.enxinsong.com/Video-MMLU-web/)

[← 返回主目录](../../index.html)
