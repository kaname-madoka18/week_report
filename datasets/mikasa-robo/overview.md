# MIKASA / MIKASA-Robo

论文版 MIKASA-Robo 含 32 项桌面操作记忆任务；当前官方 VLA 版扩展到 90 项、10 类记忆及 22,500 条轨迹。

## 与多模态记忆的关系

直接记忆：任务显式制造部分可观测与延迟依赖，评估视觉历史能否用于之后的动作决策。

## 数据规模与任务

论文版 32 项 MIKASA-Robo 任务；另有 MIKASA-Base 统一 RL 记忆评测。当前仓库 VLA 版为 90 项任务、10 类记忆、22,500 条示范轨迹及超过 600 万条 transitions。

论文按物体、空间、序列与容量四类记忆组织任务，例如遮挡后追踪杯下物体、回忆颜色/形状、按顺序操作。VLA 版增加语言指令，覆盖延迟、遮挡及多阶段交互。

## 视频长度 / 上下文长度

可配置的 episode/延迟长度，按控制步数定义；官方分 Short/Medium/Long 三档。页面短演示仅表示播放时长，不能代替轨迹长度。

## 论文结果

论文报告：在线 RL 与 VLA 模型在记忆需求加大时明显退化；真实机器人试验复现了无遮挡条件较好、长遮挡后失效的趋势。本页未复现实验。

## 数据入口

- [官方轨迹数据集合](https://huggingface.co/mikasa-robo)
- [数据与版本说明](https://mikasarobo.github.io/datasets.html)
- [任务目录](https://mikasarobo.github.io/vla_environments/index.html)

## 预览与限制

- 论文版的 32 项任务与当前 VLA 版 90 项任务分别记录，不能混作同一个实验版本。
- 官方短演示由 GIF 转为 MP4 播放；不属于对 22,500 条轨迹的随机抽样。
- 未下载完整 RLDS/LeRobot 轨迹，未用未知控制频率把步数换算成秒。

## 首发与筛选记录

- arXiv v1：2025-02-14；[论文](https://arxiv.org/abs/2502.10550)。
- 检索日期：2026-09-23；Semantic Scholar 引用数 37，满足 >20；[引用来源](https://www.semanticscholar.org/paper/1a9fbae6456b87408d97721e967438ae308b8edd)。
- 状态：ICLR 2026；[状态来源](https://proceedings.iclr.cc/paper_files/paper/2026/hash/1088fffae5f2aa8c8324e4f45f62248d-Abstract-Conference.html)。
- [官方GitHub](https://github.com/CognitiveAISystems/MIKASA-Robo)：139 stars（2026-09-23）。

## 来源

- [论文与首次提交记录](https://arxiv.org/abs/2502.10550)
- [官方项目/数据说明](https://mikasarobo.github.io/)
- [官方代码与版本说明](https://github.com/CognitiveAISystems/MIKASA-Robo)

## 本地可播放案例

下表为官网演示的实测播放长度，全部文件小于100MB，并通过完整解码检查。

|案例|播放秒数|本地大小（MB）|来源|
|---|---:|---:|---|
|遮挡物体记忆：Shell Game Touch|0.83|0.14|[官方原文件](https://mikasarobo.github.io/_images/shell_game_touch.gif)|
|视觉颜色记忆：Remember Color|0.50|0.11|[官方原文件](https://mikasarobo.github.io/_images/remember_color.gif)|
