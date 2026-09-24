# RoboMemArena

RoboMemArena 是面向机器人长程操作记忆的 benchmark，覆盖空间、时间、实体和情景记忆需求，包含 26 个任务、示范轨迹和 BDDL 评测定义。

## 与多模态记忆的关系

直接记忆：任务把物体位置、历史操作、时间顺序和跨阶段经验放入机器人视觉与动作闭环，要求策略从过去观测中检索与当前动作有关的信息。

## 数据规模与任务

官方摘要报告平均超过 1,000 步的轨迹，68.9% 的子任务依赖记忆，并提供关键帧标注；项目页列出 26 个操作任务和配对的真实世界记忆任务。

## 视频长度

本地保存项目页 task1–task12 的完整小视频，实测长度范围见下方案例卡片；这些秒数是演示视频播放时长，不是轨迹步数换算。

## 数据入口

- [论文](https://arxiv.org/abs/2605.10921)
- [官方项目页](https://robomemarena.github.io/)
- [GitHub](https://github.com/OpenHelix-Team/RoboMemArena)
- [Hugging Face 数据集](https://huggingface.co/datasets/RoboMemArenaBenchmark/RoboMemArena)

## 预览限制

- 12 个案例来自官网展示任务，不能代替 26 个任务的全量抽样。
- 仅下载小于 100MB 的官方任务视频；完整示范数据和 95MB 标题演示未纳入本地目录。

## 首发与状态

- arXiv：2605.10921，首次提交日期、引用和 GitHub stars 显示在本页动态元数据区域。
- 状态按公开材料记录为 arXiv preprint；数据与代码已公开。

## 本地可播放案例

视频来自 [官方项目页](https://robomemarena.github.io/)，播放时长和文件大小在图册中逐条显示。
