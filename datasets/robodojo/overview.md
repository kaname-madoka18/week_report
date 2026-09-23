# RoboDojo：同时评估仿真与真实机器人的记忆和长程操控

RoboDojo（*A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of Generalist Robot Manipulation Policies*）包含 **42 个仿真任务和 18 个真实机器人任务**。它在统一评测框架内同时衡量场景泛化、记忆、精细操控、长程执行和开放语言指令，Memory 维度直接要求利用过去的视觉观察，Long-Horizon 维度考察多步进度维护。arXiv 首次提交于 **2026-07-05**；2026-09-23 核对时官方材料未列明会议接收等级。[论文](https://arxiv.org/abs/2607.04434) · [官网](https://robodojo-benchmark.com/) · [代码](https://github.com/RoboDojo-Benchmark/RoboDojo)

本项目是本次明确指定加入的 benchmark；同日 Semantic Scholar 引用快照为 **19**，不计入额外 20 篇的“引用数大于 20”筛选名额。

## 任务、模态与数据规模

| 仿真类别 | 任务数 | 要测的能力 |
|---|---:|---|
| Generalization | 12 | 面对新背景、光照、杂物和物体时保持任务表现 |
| Memory | 6 | 关键帧记忆、长观察历史、非马尔可夫决策 |
| Precision | 8 | 细粒度定位、轨迹和接触控制 |
| Long-Horizon | 8 | 多步依赖、任务进度与完整执行 |
| Open | 8 | 开放语言目标和已有技能重组；没有该类别的专用训练示范 |

Memory 任务包括 Cover Blocks、Match and Pick from Conveyor、Swap Blocks、Swap T、Press by Number 和 Imitate Sorting Sequence。它们分别涉及遮挡后的物体信息、消失目标的再识别、原始摆放/朝向、计数和观察后复现顺序。长程任务中的物体分类、整理桌面和下井字棋则测试跨步骤协调。[官方仿真任务说明](https://robodojo-benchmark.com/doc/sim-tasks/)

仿真基于 Isaac Sim / Isaac Lab，轨迹提供头部和双腕相机的 RGB-D、机器人状态/动作及语言信息，还提供第三视角视频。真实数据来自 ARX X5、Piper 和 Piper X 三种双臂形态，包含头部和双腕同步 RGB、关节/末端状态及语言标注。真实端的 RoboDojo-RealEval 固定硬件、灯光、初始场景复现和评分流程，支持远程评测。[论文 Sections 3–4](https://arxiv.org/html/2607.04434v3)

## 长度口径

论文 Appendix Tables 10–11 给出了**训练示范的原始控制序列**统计，采样频率为 25 Hz。下面的平均时长为论文统计，不是官网 MP4 播放时间。

| 仿真训练类别 | 轨迹数 | 帧数 | 总时长 | 平均每条 |
|---|---:|---:|---:|---:|
| Generalization | 1,200 | 592,432 | 6.58 小时 | 19.75 秒 |
| Memory | 600 | 328,975 | 3.66 小时 | 21.93 秒 |
| Precision | 800 | 368,459 | 4.09 小时 | 18.42 秒 |
| Long-Horizon | 800 | 504,133 | 5.60 小时 | 25.21 秒 |
| Open | 0 | 0 | — | — |
| 辅助 DLC 数据 | 100 | 65,603 | 0.73 小时 | 26.24 秒 |
| 合计 | **3,500** | **1,859,602** | **20.66 小时** | **21.25 秒** |

| 真实机器人训练形态 | 轨迹数 | 帧数 | 总时长 | 平均每条 |
|---|---:|---:|---:|---:|
| ARX X5 | 600 | 665,071 | 7.39 小时 | 44.34 秒 |
| Piper | 600 | 539,737 | 6.00 小时 | 35.98 秒 |
| Piper X | 600 | 407,033 | 4.52 小时 | 27.14 秒 |
| 合计 | **1,800** | **1,611,841** | **17.91 小时** | **35.82 秒** |

仿真评测为每任务 50 episodes，共 2,100 episodes；真实评测为每任务每策略 10 trials。论文里的 GPU 墙钟运行时间、一次完整评测耗时和训练录像总时长具有不同分母，不应混作单视频长度。

## 本地短视频 case

从官方网页实际使用的 `home/sim-v2/` 和 `home/real-v2/` 视频中保存 **18 个精选任务演示**，总大小约 **5.56 MB**，全部在下载前由 HTTP Content-Length 确认单文件小于 100 MB。所有视频均不超过 180 秒，直接播放，不额外抽 100 帧。

| 分组 | 本地案例 | 实测播放时长（秒） |
|---|---|---|
| Memory（6 个） | Cover Blocks；Match and Pick from Conveyor；Swap Blocks；Swap T；Press by Number；Imitate Sorting Sequence | 22.24；19.00；17.80；10.92；15.12；47.52 |
| Long-Horizon（3 个） | Classify Objects；Organize Table；Play Tic-Tac-Toe | 29.92；33.56；35.36 |
| Generalization（2 个） | Stack Bowls；Fold Clothes | 16.56；12.04 |
| Precision（2 个） | Insert Tubes；Fasten Screws | 12.80；60.44 |
| Open（2 个） | Classify Objects by Language；Pour by Language | 65.72；6.72 |
| 真实机器人（3 个） | ARX X5 / Cover Blocks；Piper X / Classify Objects；Piper / Stack Bowls | 32.87；42.84；22.07 |

这些是官网展示视频，不是随机抽取的完整训练集，也不据此推断各任务成功率。视频可能经过官网裁剪或加速，播放时间与控制轨迹时间分别保留。另保存 1 张官方整体任务图，标注为静态图像。媒体元数据由 PyAV / FFmpeg libavformat 读取本地容器核验；当前环境没有独立 ffprobe 程序。[打开预览](preview_gallery.html) · [逐视频 CSV](metadata/video_cases.csv) · [大小、哈希和源 URL](metadata/video_cases.json)

## 论文主要结果

以下为 **arXiv v3 的论文表格快照**；后续官网 leaderboard 可能更新。表格中的分数衡量部分任务进度，成功率衡量完整完成，二者不可互换。

| 策略 / 参照 | 仿真平均分数 | 仿真平均成功率 | Memory 成功率 | Long-Horizon 成功率 |
|---|---:|---:|---:|---:|
| Hy-Embodied-0.5-VLA | 13.07 | 8.80% | 12.11% | 14.92% |
| Spatial Forcing | 12.38 | 8.04% | 4.11% | 14.58% |
| π0.5 | 11.41 | 6.91% | 4.56% | 14.67% |
| X-VLA | 10.13 | 6.52% | 3.56% | 9.75% |
| 人类遥操作参照 | 80.42 | 76.03% | 74.33% | 74.25% |

仿真总体结果按五个能力维度等权平均；不能按任务数自行混合。论文真实评测表中 π0.5 的总体平均分数为 22.9，成功率为 12.8%。这些差距表明当前通用策略仍难以完成包含遮挡记忆、跨步骤组织和细接触要求的任务；它们也说明仿真排名不能代替真实端验证。[论文 Tables 1–2](https://arxiv.org/html/2607.04434v3) · [持续更新的官方排行榜](https://robodojo-benchmark.com/leaderboard)

## 公开入口与版本

- [官方数据仓库](https://huggingface.co/datasets/RoboDojo-Benchmark/RoboDojo)、[安装及数据说明](https://robodojo-benchmark.com/doc/usage/install-and-download/)：保留入口，未下载全量训练数据、仿真资产或模型权重。
- [仿真任务定义](https://robodojo-benchmark.com/doc/sim-tasks/)、[真实机器人任务定义](https://robodojo-benchmark.com/doc/real-tasks/)、[XPolicyLab](https://github.com/XPolicyLab/XPolicyLab)：任务说明与策略接入框架。
- 2026-09-16/17 官方 README 记录了 `get_obs` 单帧偏差及 RGB 数据字节序更新，复现实验需采用兼容的新数据和代码。代码 README 当前说明采用非商业研究许可；以[仓库 LICENSE](https://github.com/RoboDojo-Benchmark/RoboDojo/blob/main/LICENSE)及各数据发布条款为准。
- 本地追溯：[论文 HTML 快照](sources/paper.html)、[官方 README 快照](sources/README.upstream.md)、[视频下载与探测记录](metadata/video_cases.json)。

核验日期：2026-09-23。
