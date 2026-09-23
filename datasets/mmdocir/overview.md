# MMDocIR

1,685个专家标注评测问题与173,843个训练问题；评估长文档中的页级、段落/图表等布局级检索。

## 与多模态记忆的关系

长上下文近邻：集中评估多模态外部记忆/知识库的检索环节，适合诊断记忆库索引与召回质量。

## 数据规模与任务

1,685 个专家标注问题；173,843 个自动生成/自举训练问题。

Page-level Retrieval 选择相关页面；Layout-level Retrieval 选择更细粒度的文本段、公式、图、表或图表。

## 视频长度 / 上下文长度

不适用视频时长：输入是文档页图像、文本、图表和布局，按页及布局元素检索。

## 论文结果

论文报告视觉检索器明显优于纯文本检索器；使用其训练集能改善检索性能；VLM转写文本优于OCR文本。这里记录论文结论，未复现实验。

## 数据入口

- [官方评测集](https://huggingface.co/datasets/MMDocIR/MMDocIR_Evaluation_Dataset)
- [官方训练集](https://huggingface.co/datasets/MMDocIR/MMDocIR_Train_Dataset)

## 预览与限制

- 没有视频；显示官方文档页面、布局和数据说明图。
- 专家评测问题数与训练自举问题数分别展示，不能相加当成人工标注规模。

## 首发与筛选记录

- arXiv v1：2025-01-15；[论文](https://arxiv.org/abs/2501.08828)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 55，满足 >20；[引用来源](https://www.semanticscholar.org/paper/6009dd2db3c01982da333bba4b400a459c3a7276)。
- 状态：EMNLP 2025 · Main；[状态来源](https://aclanthology.org/2025.emnlp-main.1576/)。
- [官方GitHub](https://github.com/MMDocRAG/MMDocIR)：38 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2501.08828)
- [官方项目/数据说明](https://mmdocrag.github.io/MMDocIR/)
- [官方代码与版本说明](https://github.com/MMDocRAG/MMDocIR)
