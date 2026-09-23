# LSDBench

1,304 个高必要采样密度的长视频问答；原视频平均 45.39 分钟，关键目标片段平均 3 分钟。

## 与多模态记忆的关系

长上下文近邻：考察长期视觉历史中的证据检索与选择性记忆，重点是高密度短事件不能被稀疏均匀抽帧遗漏。

## 数据规模与任务

1,304 个多选 QA；底层视频来自 Ego4D。

在小时级视频里定位短而密集的动作序列，回答物体操作、顺序与细节问题；通过 Necessary Sampling Density 衡量能捕获答案的最低采样密度。

## 视频长度 / 上下文长度

原视频 20.32–115.32 分钟，平均 45.39 分钟；目标片段平均 3 分钟（官方 README）。

来源：[官方时长依据](https://github.com/JIA-Lab-research/LSDBench)。

## 论文结果

论文报告：低密度抽样容易遗漏关键动作，高密度抽样引入冗余；RHS 分层检索与语义帧选择可用更少帧达到相近或更好的问答效果。本页未复现实验。

## 数据入口

- [标注数据](https://huggingface.co/datasets/TainU/LSDBench)
- [Ego4D 原视频访问](https://ego4ddataset.com/ego4d-license/)

## 预览与限制

- 当前只展示官方样例图；未获取许可证保护的 Ego4D 原视频，未声称完成 100 帧抽样。
- 目标片段平均 3 分钟与原视频平均 45.39 分钟是不同口径。

## 首发与筛选记录

- arXiv v1：2025-03-16；[论文](https://arxiv.org/abs/2503.12496)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 21，满足 >20；[引用来源](https://www.semanticscholar.org/paper/965e19e719a3d298179ae5052917aa0ba1711511)。
- 状态：ICCV 2025；[状态来源](https://github.com/JIA-Lab-research/LSDBench)。
- [官方GitHub](https://github.com/JIA-Lab-research/LSDBench)：29 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2503.12496)
- [官方项目/数据说明](https://github.com/JIA-Lab-research/LSDBench)
- [官方代码与版本说明](https://github.com/JIA-Lab-research/LSDBench)
