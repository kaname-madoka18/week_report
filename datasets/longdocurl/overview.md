# LongDocURL

396份PDF、33,000余页与2,325个QA；覆盖长文档理解、数值推理和跨元素定位，展示官方文档案例图。

## 与多模态记忆的关系

长上下文近邻：是多模态证据检索、跨页信息保持与整合的诊断数据；并非跨天智能体记忆基准。

## 数据规模与任务

396 份 PDF、33,000 余页、2,325 个高质量问答，3 个主任务和20个子任务。

长文档理解、数值推理、跨元素定位。答案证据可分布在多页的文本、图表和布局元素中。

## 视频长度 / 上下文长度

不适用视频时长：输入是多页PDF与图表/文本/布局元素；规模以页数及上下文长度计。

## 论文结果

论文在26种开源/闭源模型配置上评估，显示理解、推理和定位能力存在明显差距；较长文档和细粒度定位仍具挑战。本页未复现实验。

## 数据入口

- [官方PDF与QA](https://huggingface.co/datasets/dengchao/LongDocURL/)

## 预览与限制

- 没有视频；预览是官方提供的真实文档与QA示例静态图。
- 未下载完整PDF库，示例图不代表全数据随机样本。

## 首发与筛选记录

- arXiv v1：2024-12-24；[论文](https://arxiv.org/abs/2412.18424)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 87，满足 >20；[引用来源](https://www.semanticscholar.org/paper/aa90e099fd96d2cf47146d76bdf78de7f8bd966b)。
- 状态：ACL 2025 · Main；[状态来源](https://aclanthology.org/2025.acl-long.57/)。
- [官方GitHub](https://github.com/dengc2023/LongDocURL)：44 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2412.18424)
- [官方项目/数据说明](https://longdocurl.github.io/)
- [官方代码与版本说明](https://github.com/dengc2023/LongDocURL)
