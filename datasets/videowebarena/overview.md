# VideoWebArena：数据集与评测概览

74 个视频教程、2,021 个网页任务，分别测试技能保持与事实保持；把看过的视频转化为后续网页操作。

**相关性：直接记忆。** 直接测试视频信息在后续智能体行动中的事实/技能保持；属于本轮较直接的多模态记忆基准。

## 论文与筛选依据

- 标题：VideoWebArena: Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks
- arXiv首次提交：2024-10-24；[arXiv](https://arxiv.org/abs/2410.19100)
- 引用：42，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/90462ced637ddc6c9e3b6033a447c287efe2928d)
- GitHub：14 stars（2026-09-23）；[官方仓库](https://github.com/ljang0/videowebarena)
- 状态：ICLR 2025；[核验来源](https://proceedings.iclr.cc/paper_files/paper/2025/hash/5b555804d495321df2e3208cc27f4fbc-Abstract-Conference.html)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 74 个教程；2,021 个任务 = 400 个事实保持任务 + 1,621 个技能保持任务；6 类网页域。

**视频长度/上下文跨度：** 74 个教程总长 3:48:19；单视频最短 1:16、最长 10:41、平均 3:05（论文表2）。

技能保持：看教程后执行同类网页任务；事实保持：从视频中找出操作需要的事实，再在网页中完成任务。覆盖购物、后台管理、Reddit、分类广告、GitLab、地图。

## 主要结果（论文报告，未本地复现）

论文报告最优模型在事实保持任务上的成功率为 13.3%，人类为 73.9%；事实保持 QA 为 45.8% 对 79.3%。给定教程后，长上下文模型的技能任务表现反而下降，说明看到信息并不等同于可靠保持和调用。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方任务配置与评测代码](https://github.com/ljang0/videowebarena)
- [官方视频打包入口](https://drive.google.com/file/d/17DwmsM7KzBWyz1BN1aq7NHDvgcTIrCgx/view)
- [官方项目](https://videowebarena.github.io/)

另有 1 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 原始视频以官方 Google Drive 打包发布；为避免下载超过 100MB 的整包，本页先提供官方概览图与入口。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2410.19100)
- [官方仓库](https://github.com/ljang0/videowebarena)
- [官方项目](https://videowebarena.github.io/)

[← 返回主目录](../../index.html)
