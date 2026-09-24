# Video-MMMU：数据集与评测概览

300 个大学/专业教学视频、900 道题，测试感知、理解与知识迁移，并衡量看视频前后的知识增益。

**相关性：长上下文近邻。** 长上下文近邻：关注视频中知识的获取与后续使用，接近语义记忆形成；不直接评估跨会话记忆保持。

## 论文与筛选依据

- 标题：Video-MMMU: Evaluating Knowledge Acquisition from Multi-Discipline Professional Videos
- arXiv首次提交：2025-01-23；[arXiv](https://arxiv.org/abs/2501.13826)
- 引用：233，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/4e3d888abc01555feb92a60935c8e537abc4648a)
- GitHub：73 stars（2026-09-23）；[官方仓库](https://github.com/EvolvingLMMs-Lab/VideoMMMU)
- 状态：ACL 2026 · Main；[核验来源](https://videommmu.github.io/)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 300 个视频；900 道人工问题；6 学科、30 专业主题；每视频3阶段问题。

**视频长度/上下文跨度：** 数据集视频平均 506.2 秒（约8分26秒）；本页短case为官网剪辑，其实测时长单独标注。

Perception定位知识相关信息；Comprehension理解概念；Adaptation将新知识应用到新情景；Δknowledge量化观看视频后的相对知识增益。

## 主要结果（论文报告，未本地复现）

论文报告人类知识增益 Δknowledge 为33.1%，GPT-4o为15.6%、Claude-3.5-Sonnet为11.4%；感知→理解→迁移的难度提升使模型成绩显著下降。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/lmms-lab/VideoMMMU)
- [官方项目](https://videommmu.github.io/)

已取得 6 个官方视频文件：6 个直接播放 case、0 组100帧预览。每个完整视频文件均小于100MB；时长由PyAV读取，来源与SHA256记录在project.json。

| 本地文件 | 播放长度 | 文件大小 | 呈现 |
|---|---:|---:|---|
| [Art_Arttheory_14.mp4](samples/Art_Arttheory_14.mp4) | 3.60秒 | 0.45MB | 直接播放 |
| [Humanities_psychology_15.mp4](samples/Humanities_psychology_15.mp4) | 16.25秒 | 3.32MB | 直接播放 |
| [Engineering_Computer_Science_1.mp4](samples/Engineering_Computer_Science_1.mp4) | 12.65秒 | 1.34MB | 直接播放 |
| [Science_physics_11.mp4](samples/Science_physics_11.mp4) | 13.11秒 | 3.60MB | 直接播放 |
| [Business_Economics_1.mp4](samples/Business_Economics_1.mp4) | 16.64秒 | 4.29MB | 直接播放 |
| [Medicine_public_health_12.mp4](samples/Medicine_public_health_12.mp4) | 35.52秒 | 6.04MB | 直接播放 |

以上是官网为展示问题截取的短case；完整数据视频平均506.2秒，不能用case播放长度代替源视频长度。

## 边界与限制

- 官网短case是教学片段，不能把其时长当作完整数据视频长度。
- 本页结果来自论文/官方项目页，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2501.13826)
- [官方仓库](https://github.com/EvolvingLMMs-Lab/VideoMMMU)
- [官方项目](https://videommmu.github.io/)

[← 返回主目录](../../catalog.html)
