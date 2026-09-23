# OVO-Bench

644 段视频、2,814 个 QA、12 项任务，包含情节记忆、动作顺序回溯、实时理解和未来主动响应。

## 与多模态记忆的关系

直接记忆：Backward Tracing 显式包含 Episodic Memory，评估检索此前事件与推理其顺序的能力。其余任务也考察流式历史与时间感知。

## 数据规模与任务

644 段独立视频、2,814 个带精确时间戳的 QA、12 项任务、3 类在线思考模式。

Backward Tracing（情节记忆、动作顺序、幻觉检测）、Real-Time Understanding、Forward Active Responding；需根据查询时间点限制可见历史。

## 视频长度 / 上下文长度

正文描述主体视频为数分钟至半小时；平均查询时点 428.89 秒。附录 CRR 子任务平均原视频长度 6,857 秒（约114.3分钟），不能将全库统一写成≤30分钟。

来源：[官方时长依据](https://arxiv.org/html/2501.05510)。

## 论文结果

论文报告：9 个 Video-LLM 在传统离线基准的优势并未转化为在线理解，流式条件下的时间感知、回溯和响应时机仍落后人类。本页未复现实验。

## 数据入口

- [官方视频与标注](https://huggingface.co/datasets/JoeLeelyf/OVO-Bench)

## 预览与限制

- 展示官网真实视频截图与问题图；未解包约44GB source-video或约144GB chunked-video分卷。
- 平均查询时点、原视频长度、给定查询的可见上下文长度是三种不同量。

## 首发与筛选记录

- arXiv v1：2025-01-09；[论文](https://arxiv.org/abs/2501.05510)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 135，满足 >20；[引用来源](https://www.semanticscholar.org/paper/6f00bdbb2082ec80ce0ae701f4c8c4ed52607a41)。
- 状态：CVPR 2025；[状态来源](https://arxiv.org/abs/2501.05510)。
- [官方GitHub](https://github.com/JoeLeelyf/OVO-Bench)：164 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2501.05510)
- [官方项目/数据说明](https://joeleelyf.github.io/OVO-Bench/)
- [官方代码与版本说明](https://github.com/JoeLeelyf/OVO-Bench)
