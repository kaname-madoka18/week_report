# VSI-Bench：数据集与评测概览

288 个第一人称室内扫描视频、5,000+ 问答；要求从连续视角建立、记住并调用空间布局。

**相关性：直接记忆。** 直接记忆：明确要求模型从按时间呈现的局部视角记住空间，再回答不在当前视野中的布局问题；空间记忆比跨天生活记忆短，但能力直接相关。

## 论文与筛选依据

- 标题：Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces
- arXiv首次提交：2024-12-18；[arXiv](https://arxiv.org/abs/2412.14171)
- 引用：756，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/376461a2c049f6fa51a4303853fdc672e4d07a0d)
- GitHub：743 stars（2026-09-23）；[官方仓库](https://github.com/vision-x-nyu/thinking-in-space)
- 状态：CVPR 2025 · Oral；[核验来源](https://github.com/vision-x-nyu/thinking-in-space)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 288 个视频，5,000+ QA；来源为 ScanNet、ScanNet++、ARKitScenes；8 个任务。

**视频长度/上下文跨度：** 288个评测视频；本文本未取得可直接核验的统一平均时长。下方官网case由PyAV实测，官方分布图保留其源集合统计口径，不据图反推288视频的平均长度。

配置类：物体计数、相对距离/方向、路线规划；测量类：物体尺寸、房间大小、绝对距离；时空类：物体出现顺序。

## 主要结果（论文报告，未本地复现）

论文发现模型出现了局部世界模型和空间意识，但仍低于人类；CoT、self-consistency、tree-of-thoughts等语言推理技巧未提高整体表现，而显式生成认知地图改善了距离感知。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/nyu-visionx/VSI-Bench)
- [官方项目](https://vision-x-nyu.github.io/thinking-in-space.github.io/)

已取得 2 个官方视频文件：2 个直接播放 case、0 组100帧预览。每个完整视频文件均小于100MB；时长由PyAV读取，来源与SHA256记录在project.json。

| 本地文件 | 播放长度 | 文件大小 | 呈现 |
|---|---:|---:|---|
| [45662987.mp4](samples/45662987.mp4) | 67.33秒 | 7.83MB | 直接播放 |
| [scene0663_00.mp4](samples/scene0663_00.mp4) | 122.75秒 | 8.93MB | 直接播放 |

另有 1 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 官网case为室内扫描视频；并非跨天生活记录。
- 当前源数据可能有后续修订；官方说明代码结果与论文表格可能因数据精炼略有差异。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2412.14171)
- [官方仓库](https://github.com/vision-x-nyu/thinking-in-space)
- [官方项目](https://vision-x-nyu.github.io/thinking-in-space.github.io/)

[← 返回主目录](../../catalog.html)
