# Mem-Gallery：数据集与评测概览

240个多模态会话、3,962轮对话、1,711道带线索的评测题，直接测试长期图文会话记忆。

**相关性：直接记忆。** 直接记忆：专为多模态长期会话记忆构造，信息随会话累积并更新，与用户关注方向高度一致。

## 论文与筛选依据

- 标题：Mem-Gallery: Benchmarking Multimodal Long-Term Conversational Memory for MLLM Agents
- arXiv首次提交：2026-01-07；[arXiv](https://arxiv.org/abs/2601.03515)
- 引用：39，Semantic Scholar Graph API，2026-09-23检索；[记录](https://www.semanticscholar.org/paper/c69c7ab705735b24903511d62fad8110699f708a)
- GitHub：110 stars（2026-09-23）；[官方仓库](https://github.com/YuanchenBei/Mem-Gallery)
- 状态：ACL 2026 · Main；[核验来源](https://aclanthology.org/2026.acl-long.1892/)
- 符合本轮时间范围（2024-09-23之后首次上arXiv）与引用数大于20。

## 数据、任务与时长

**规模：** 会话内1,003张图像；1,711道带线索QA，评测包含487张图像；13种记忆系统统一比较。

**视频长度/上下文跨度：** 非视频数据：以跨会话图文历史衡量记忆跨度，共240会话、3,962轮；视频秒数不适用。

三个维度：记忆抽取与test-time adaptation、记忆推理、知识管理；包含多模态线索跨会话引用、变化与矛盾处理。

## 主要结果（论文报告，未本地复现）

论文对13种记忆系统的评测表明，明确保留视觉信息和组织记忆是必要的；现有系统在推理、知识管理和效率方面仍有明显不足。

## 数据入口与预览

- [本地预览页面](preview_gallery.html)
- [官方 Hugging Face 数据](https://huggingface.co/datasets/Ethan-Bei/Mem-Gallery)
- [官方项目](https://github.com/YuanchenBei/Mem-Gallery)

另有 4 张官方任务/标注/统计示意图，单独标注为静态图，不计入视频抽帧。

## 边界与限制

- 图文会话数据不是视频，不抽取视频帧。
- 数据包含合成和重组会话，并经模型与人工质量检查；不等同于连续真实日常录像。
- 本页结果来自论文，未在本机复现模型。

## 来源

- [论文原文](https://arxiv.org/abs/2601.03515)
- [官方仓库](https://github.com/YuanchenBei/Mem-Gallery)
- [官方项目](https://github.com/YuanchenBei/Mem-Gallery)

[← 返回主目录](../../index.html)
