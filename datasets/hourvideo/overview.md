# HourVideo

500 段 Ego4D 长视频与 12,976 个问题，涵盖事实回忆、追踪、跨事件推理与物体找回；直接播放官网短案例。

## 与多模态记忆的关系

直接记忆：事实回忆、物体检索、目标追踪及跨事件推理都要求保持小时级视觉经历。

## 数据规模与任务

500 段第一人称视频、12,976 个五选一问题；官方开发集为50段视频、1,182个问题、39.3小时。

总结、感知（事实回忆和追踪）、视觉推理（空间、时间、预测、因果、反事实）、导航（房间间导航、物体检索）。

## 视频长度 / 上下文长度

原视频 20–120 分钟；开发集 50 段共39.3小时。官网示例是压缩/剪辑后的问答演示，播放秒数单列。

来源：[官方时长依据](https://github.com/keshik6/HourVideo)。

## 论文结果

论文报告人类专家正确率 85.0%，Gemini 1.5 Pro 为37.3%；GPT-4与LLaVA-NeXT等模型相对随机猜测的提升有限。本页仅整理论文数字，未复现实验。

## 数据入口

- [官方数据与标注](https://huggingface.co/datasets/HourVideo/HourVideo)
- [开发集标注](https://huggingface.co/datasets/HourVideo/HourVideo/blob/main/v1.0_release/json/dev_v1.0_annotations.json)

## 预览与限制

- 可播放案例来自 HourVideo 官方项目页，属于经过剪辑的案例展示，不是完整20–120分钟源视频。
- 未使用泛 Ego4D 样本冒充 HourVideo 问答证据；完整底层视频遵循 Ego4D 访问流程。

## 首发与筛选记录

- arXiv v1：2024-11-07；[论文](https://arxiv.org/abs/2411.04998)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 140，满足 >20；[引用来源](https://www.semanticscholar.org/paper/043f80aadcafb06ce393ad7f8621f0b79753f55f)。
- 状态：NeurIPS 2024 · Datasets and Benchmarks；[状态来源](https://arxiv.org/abs/2411.04998)。
- [官方GitHub](https://github.com/keshik6/HourVideo)：145 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2411.04998)
- [官方项目/数据说明](https://hourvideo.stanford.edu/)
- [官方代码与版本说明](https://github.com/keshik6/HourVideo)

## 本地可播放案例

下表为官网演示的实测播放长度，全部文件小于100MB，并通过完整解码检查。

|案例|播放秒数|本地大小（MB）|来源|
|---|---:|---:|---|
|总结案例|26.07|7.82|[官方原文件](https://hourvideo.stanford.edu/static/videos/summarization.m4v)|
|感知与追踪案例|26.07|6.67|[官方原文件](https://hourvideo.stanford.edu/static/videos/perception_tracking_final.m4v)|
|反事实推理案例|26.07|7.51|[官方原文件](https://hourvideo.stanford.edu/static/videos/counterfactual.m4v)|
|房间导航案例|29.07|7.16|[官方原文件](https://hourvideo.stanford.edu/static/videos/navigation.m4v)|
|事实回忆案例|26.07|5.57|[官方原文件](https://hourvideo.stanford.edu/static/videos/factual_recall.m4v)|
|因果推理案例|26.07|6.21|[官方原文件](https://hourvideo.stanford.edu/static/videos/causal.m4v)|
