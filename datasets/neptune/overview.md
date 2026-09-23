# Neptune

2,405段视频、3,268个问题、约100小时；最长15分钟，强调时间顺序、计数、状态变化和跨模态推理。

## 与多模态记忆的关系

长上下文近邻：要求跨时间和模态整合视觉/音频证据，减少凭单帧或语言常识作答的偏差。

## 数据规模与任务

论文 Neptune-Full 为2,405段视频、3,268个问题、约100小时；同时提供专门筛出的多模态推理子集及GEM开放问答指标。

时间排序、总结、状态变化、视觉叙事、意图、计数、预测、目标推理、比较和识别；提供多选及开放回答两种评价。

## 视频长度 / 上下文长度

单视频16秒–15分钟，平均2.5分钟；约100小时总量。超过12%视频长于5分钟、超过25%长于3分钟（论文统计）。

来源：[官方时长依据](https://arxiv.org/html/2412.09582)。

## 论文结果

论文报告多数当时的开源长视频模型在时间顺序、计数与状态变化问题上表现不佳；增加视频帧数对 Neptune 的收益比对 EgoSchema 更明显。本页未复现实验。

## 数据入口

- [原始Neptune问答与下载说明](https://github.com/google-deepmind/neptune#neptune)

## 预览与限制

- 当前GitHub首页还包含后续MINERVA/Minerva-Ego/Minerva-cultural，本条仅按2412.09582整理原始Neptune。
- 未下载或缓存YouTube完整视频；预览为官方真实视频问答样例图。
- 平均2.5分钟不意味着全部视频都适合按短视频处理，最长仍达15分钟。

## 首发与筛选记录

- arXiv v1：2024-12-12；[论文](https://arxiv.org/abs/2412.09582)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 27，满足 >20；[引用来源](https://www.semanticscholar.org/paper/f8a55ad541291aef76f709d2ad8ce2f82db842c9)。
- 状态：arXiv 预印本；[状态来源](https://arxiv.org/abs/2412.09582)。
- [官方GitHub](https://github.com/google-deepmind/neptune)：99 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2412.09582)
- [官方项目/数据说明](https://github.com/google-deepmind/neptune)
- [官方代码与版本说明](https://github.com/google-deepmind/neptune)
