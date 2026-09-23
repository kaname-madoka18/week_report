# M3DocVQA / M3DocRAG

M3DocVQA 在3,000余份PDF、40,000余页中执行开放域跨页/跨文档问答；M3DocRAG提供视觉检索基线。

## 与多模态记忆的关系

长上下文近邻：把页面嵌入索引视为外部视觉记忆，检索与推理紧密耦合；不是流式或跨天情节记忆任务。

## 数据规模与任务

3,000 余份 PDF、40,000 余页，支持单跳与多跳的开放域多模态文档问答。

从整个PDF文档集合中检索相关页面，整合文本、图表与图像证据进行单跳或多跳问答；证据可跨不同文档。

## 视频长度 / 上下文长度

不适用视频时长：内容为PDF页面和文档证据，范围以文档数/页数描述。

## 论文结果

论文报告 ColPali+Qwen2-VL 7B 的 M3DocRAG 在 M3DocVQA、MMLongBench-Doc、MP-DocVQA 的比较中表现较强，但开放域跨文档理解仍有很大空间。本页未复现实验。

## 数据入口

- [官方数据准备说明](https://github.com/bloomberg/m3docrag/tree/main/m3docvqa)
- [M3DocVQA正式出版论文](https://openaccess.thecvf.com/content/ICCV2025W/Findings/html/Cho_M3DocVQA_Multi-modal_Multi-page_Multi-document_Understanding_ICCVW_2025_paper.html)

## 预览与限制

- 没有视频；展示官方文档与检索问答样例。
- arXiv首发和引用数对应 M3DocRAG（2411.04952），正式 benchmark 版本以 M3DocVQA 标题发表于 ICCV 2025 Workshop。
- 官方 GitHub 仓库已于2026-07归档为只读；数据准备说明仍公开。

## 首发与筛选记录

- arXiv v1：2024-11-07；[论文](https://arxiv.org/abs/2411.04952)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 128，满足 >20；[引用来源](https://www.semanticscholar.org/paper/226787d438bc47f986f82625d6b74fa6f733ef60)。
- 状态：ICCV 2025 Workshop · Findings（M3DocVQA）；[状态来源](https://openaccess.thecvf.com/content/ICCV2025W/Findings/html/Cho_M3DocVQA_Multi-modal_Multi-page_Multi-document_Understanding_ICCVW_2025_paper.html)。
- [官方GitHub](https://github.com/bloomberg/m3docrag)：70 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2411.04952)
- [官方项目/数据说明](https://m3docrag.github.io/)
- [官方代码与版本说明](https://github.com/bloomberg/m3docrag)
