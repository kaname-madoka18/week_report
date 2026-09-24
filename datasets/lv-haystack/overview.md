# LV-Haystack / T*：数据集与评测概览

480小时视频、15,092人工实例，标注回答问题所需的少量关键帧，专门评估长视频时间搜索质量与效率。

**相关性：长上下文近邻。** 长上下文近邻：直接检验多模态记忆系统中证据检索与帧选择的质量，但仍是可回看源视频的搜索基准。

## 论文与筛选依据

- 标题：Re-thinking Temporal Search for Long-Form Video Understanding
- arXiv首次提交：2025-04-03；[arXiv](https://arxiv.org/abs/2504.02259)
- 引用：99，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/40a5f4b9865a75c6b8321ce0c7f7154e1a36e0cd)
- GitHub：98 stars（2026-09-23）；[官方仓库](https://github.com/mll-lab-nu/TStar)
- 状态：CVPR 2025；[核验来源](https://arxiv.org/abs/2504.02259)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 15,092人工实例；480小时视频；任务寻找通常1–5个必要关键帧；含训练与评测划分。

**视频长度/上下文跨度：** 数据总长480小时；来自Ego4D与长视频问答源，单视频长度不一。官网演示视频长度另行实测，不能替代数据集原视频长度。

给定问题，在数万帧中检索最少的相关帧；评价时间/视觉precision、recall、F1及计算开销。T*将时间搜索转换为可反复放大的空间搜索。

## 主要结果（论文报告，未本地复现）

论文显示既有搜索方法在一个长视频子集上的时间F1仅2.1%。32帧预算下T*把GPT-4o由50.5%提高到53.1%，LLaVA-OneVision-72B由56.5%提高到62.4%。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/MLL-Lab/LongVideoHaystack)
- [官方项目](https://longvideohaystack.github.io/)

已取得 1 个官方视频文件：1 个直接播放 case、0 组100帧预览。每个完整视频文件均小于100MB；时长由PyAV读取，来源与SHA256记录在project.json。

| 本地文件 | 播放长度 | 文件大小 | 呈现 |
|---|---:|---:|---|
| [Framework_0301_demo.mov](samples/Framework_0301_demo.mov) | 19.27秒 | 9.22MB | 直接播放 |

以上是T*算法演示，不是LV-Haystack原始评测视频。数据规模为480小时，不能据演示片长推断视频分布。

## 边界与限制

- 论文同时贡献方法T*与基准LV-Haystack；本页以数据集与检索评测为主。
- 官网demo显示搜索过程，不是完整数据集原视频。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2504.02259)
- [官方仓库](https://github.com/mll-lab-nu/TStar)
- [官方项目](https://longvideohaystack.github.io/)

[← 返回主目录](../../catalog.html)
