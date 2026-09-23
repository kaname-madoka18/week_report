# EmbodiedEval

328 项交互式任务、125 个 3D 场景，覆盖导航、物体/社交交互及属性/空间问答；展示官方短视频案例。

## 与多模态记忆的关系

评测近邻：需要结合历史观察完成交互与空间任务，但论文并未将长期记忆作为唯一被隔离的评测变量。

## 数据规模与任务

328 项任务、125 个 3D 场景、5 个任务类别。

导航、物体交互、社交交互、属性问答、空间问答。在统一模拟器中反复观察、行动、收集信息并完成目标。

## 视频长度 / 上下文长度

交互式仿真任务，无统一原视频时长；轨迹随智能体行为变化。论文专家示范平均10.72步，不能当作10.72秒。子页面记录每段官方演示的实测播放秒数。

## 论文结果

论文报告：所评估的先进 MLLM 在交互任务上与人类水平仍有显著差距，能力短板涉及视觉落地、空间理解和连续交互。本页未复现实验。

## 数据入口

- [官方数据集](https://huggingface.co/datasets/EmbodiedEval/EmbodiedEval)

## 预览与限制

- 官方演示案例展示模拟任务，不等同于覆盖全部 328 项任务的轨迹抽样。
- 论文主题为综合具身评测，不能把整体成绩直接解释为纯记忆能力。

## 首发与筛选记录

- arXiv v1：2025-01-21；[论文](https://arxiv.org/abs/2501.11858)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 55，满足 >20；[引用来源](https://www.semanticscholar.org/paper/fcbd6d1876e417248836b013c8186d454fccff5c)。
- 状态：CVPR 2026 Workshop · VisScale；[状态来源](https://openaccess.thecvf.com/content/CVPR2026W/Viscale/papers/Cheng_EmbodiedEval_Evaluate_Multimodal_LLMs_as_Embodied_Agents_CVPRW_2026_paper.pdf)。
- [官方GitHub](https://github.com/thunlp/EmbodiedEval)：60 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2501.11858)
- [官方项目/数据说明](https://embodiedeval.github.io/)
- [官方代码与版本说明](https://github.com/thunlp/EmbodiedEval)

## 本地可播放案例

下表为官网演示的实测播放长度，全部文件小于100MB，并通过完整解码检查。

|案例|播放秒数|本地大小（MB）|来源|
|---|---:|---:|---|
|官方案例 1|3.00|0.29|[官方原文件](https://embodiedeval.github.io/website/video/case1.mp4)|
|官方案例 2|8.00|0.74|[官方原文件](https://embodiedeval.github.io/website/video/case2.mp4)|
|官方案例 3|15.00|1.89|[官方原文件](https://embodiedeval.github.io/website/video/case3.mp4)|
|官方案例 4|15.00|1.67|[官方原文件](https://embodiedeval.github.io/website/video/case4.mp4)|
|官方案例 5|8.00|0.42|[官方原文件](https://embodiedeval.github.io/website/video/case5.mp4)|
|官方案例 6|8.00|0.56|[官方原文件](https://embodiedeval.github.io/website/video/case6.mp4)|
