# CG-Bench：数据集与评测概览

1,219 个 10–80 分钟长视频、12,129 组问题/答案/时间线索，要求回答与正确视频证据对齐。

**相关性：长上下文近邻。** 长上下文近邻：适合评估记忆系统是否保留和检索支持答案的时间证据；原始任务本身不强制持续在线记忆。

## 论文与筛选依据

- 标题：CG-Bench: Clue-grounded Question Answering Benchmark for Long Video Understanding
- arXiv首次提交：2024-12-16；[arXiv](https://arxiv.org/abs/2412.12075)
- 引用：83，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/b31335e597a9aa07d8f94b5355fb938548aa2b23)
- GitHub：22 stars（2026-09-23）；[官方仓库](https://github.com/CG-Bench/CG-Bench)
- 状态：ICLR 2025；[核验来源](https://openreview.net/forum?id=le4IoZZHy1)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 1,219 个视频；12,129 个QAC三元组；14,362 个线索区间；14主类、171二级类、638三级类。

**视频长度/上下文跨度：** 单视频 10–80 分钟；平均约 1,624.4 秒（27.1 分钟）；20–30 分钟最常见；证据片段平均 19.24 秒。

感知、推理、幻觉三类问答；white-box 要求模型定位证据区间，black-box 利用线索构造长/短视频对照，检验答案是否确实基于正确线索。

## 主要结果（论文报告，未本地复现）

论文报告长视频理解明显弱于短证据片段理解，且开放与商用模型间有较大差距。GPT-4o-0806 在128帧低分辨率均匀采样下 long-acc 为53.9%，50帧设置为46.7%，说明长上下文取样与证据定位影响评测。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方数据入口](https://huggingface.co/datasets/CG-Bench/CG-Bench)
- [官方项目与排行榜](https://cg-bench.github.io/leaderboard/)
- [官方项目](https://cg-bench.github.io/leaderboard/)

另有 3 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 官方 Hugging Face 数据为 gated repository，需登录并同意条件才能读取文件；公开清单中原视频按约4.38–5.32 GB ZIP包发布，线索片段包约2.89–5.35 GB。本次未取得其文件读取权限，无法进行单视频或Range取样；本地提供官方任务与统计示意图。
- 短证据片段的平均长度不等于完整视频长度。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2412.12075)
- [官方仓库](https://github.com/CG-Bench/CG-Bench)
- [官方项目](https://cg-bench.github.io/leaderboard/)

[← 返回主目录](../../index.html)
