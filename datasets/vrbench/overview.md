# VRBench：数据集与评测概览

当前公开版960个长叙事视频、8,243道多步题，平均1.6小时，并给每步推理标记时间证据。

**相关性：长上下文近邻。** 长上下文近邻：长达小时的情节和分散线索需要检索与整合，可检验叙事记忆；不要求模型在不可回看的在线流中保持状态。

## 论文与筛选依据

- 标题：VRBench: A Benchmark for Multi-Step Reasoning in Long Narrative Videos
- arXiv首次提交：2025-06-12；[arXiv](https://arxiv.org/abs/2506.10857)
- 引用：28，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/b65d6bc8c7184db100d7a881f4d6c2bebfdea9dc)
- GitHub：28 stars（2026-09-23）；[官方仓库](https://github.com/OpenGVLab/VRBench)
- 状态：ICCV 2025；[核验来源](https://github.com/OpenGVLab/VRBench)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 当前官方README：960个视频、8,243 QA、25,106带时间戳推理步骤；arXiv早期摘要为1,010视频/9,468 QA，采用当前公开版口径。

**视频长度/上下文跨度：** 平均约1.6小时/视频；视频筛选设最短20分钟；题目依赖分散在时间线上的多段证据。

七类多步推理：事件归因、计数、假设推理、隐含推断、信息概括、事件预测、逻辑关联；同时评最终答案和过程证据。

## 主要结果（论文报告，未本地复现）

论文通过12个LLM和多个VLM基线揭示长叙事多步推理的困难；评测把最终多选正确率与过程级推理质量分开，避免只看答案掩盖中间证据/推理错误。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/OpenGVLab/VRBench)
- [官方项目](https://vrbench.github.io/)

另有 1 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 使用当前公开仓库960视频版本，并明确区分早期预印本统计。
- 原视频在官方HF以分卷ZIP发布（v001_360p.z01等，每卷约10.7GB），未整段下载；本页保留官方标注样例图及数据入口。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2506.10857)
- [官方仓库](https://github.com/OpenGVLab/VRBench)
- [官方项目](https://vrbench.github.io/)

[← 返回主目录](../../catalog.html)
