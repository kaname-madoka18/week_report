# MMLongBench：数据集与评测概览

13,331 个长上下文图文样本，统一控制 8K–128K token；覆盖视觉RAG、needle检索、many-shot学习、摘要与文档问答。

**相关性：长上下文近邻。** 长上下文近邻：评估长图文输入中的检索、整合与调用能力；不是跨天持续更新的智能体记忆数据集。

## 论文与筛选依据

- 标题：MMLongBench: Benchmarking Long-Context Vision-Language Models Effectively and Thoroughly
- arXiv首次提交：2025-05-15；[arXiv](https://arxiv.org/abs/2505.10610)
- 引用：28，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/ce2d9e6895db0a3154a530cbc3351b8b637e19b6)
- GitHub：182 stars（2026-09-23）；[官方仓库](https://github.com/EdinburghNLP/MMLongBench)
- 状态：NeurIPS 2025 · Spotlight；[核验来源](https://arxiv.org/abs/2505.10610)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 13,331 个样本；5 类任务；5 档长度；论文评估 46 个开放/闭源模型。

**视频长度/上下文跨度：** 非视频数据：输入按 8K、16K、32K、64K、128K token 五档组织，图像与文本交错。视频秒数不适用。

Visual RAG、Needle-in-a-Haystack、Many-Shot ICL、文档摘要和长文档 VQA；既包含自然图像，也包含文档页、图表等合成图像。

## 主要结果（论文报告，未本地复现）

论文发现单一任务成绩难以代表整体长上下文能力；开放与闭源模型都仍面临明显挑战，较强推理能力与较好的长上下文成绩相关。应同时比较多类任务与长度曲线，不能仅用单个needle题代表记忆。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/ZhaoweiWang/MMLongBench)
- [官方项目](https://zhaowei-wang-nlp.github.io/MMLongBench-page/)

另有 3 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 本数据集以图文文档和图像序列为主，展示官方任务样例图，不生成不存在的视频帧。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2505.10610)
- [官方仓库](https://github.com/EdinburghNLP/MMLongBench)
- [官方项目](https://zhaowei-wang-nlp.github.io/MMLongBench-page/)

[← 返回主目录](../../catalog.html)
