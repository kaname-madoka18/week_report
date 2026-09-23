# Visual Room Rearrangement / RoomR

核验日期：2026-09-22。CVPR 2021 的 RoomR 数据集定义了交互式房间复原任务：智能体先观察物体初始摆放和开闭状态，环境将其中若干物体打乱，智能体再将其恢复。数据是 **AI2-THOR 里的任务初态/目标态与评测实例**，并非固定视频片段库。[原论文](https://openaccess.thecvf.com/content/CVPR2021/papers/Weihs_Visual_Room_Rearrangement_CVPR_2021_paper.pdf)、[官方项目](https://ai2thor.allenai.org/rearrangement)、[官方仓库](https://github.com/allenai/ai2thor-rearrangement)

| 内容 | 规模 / 行为 |
|---|---|
| 论文 RoomR | **6,000** 个 rearrangement 实例；**120** 个房间；**72** 类物体 |
| 原始划分 | 4,000 训练 / 1,000 验证 / 1,000 测试，房间隔离；每房间 50 实例 |
| 1-Phase | 同时给出当前位置下的目标场景与被打乱场景图像 |
| 2-Phase | 先 walkthrough，再 unshuffle，要求跨阶段记住原来的布局 |
| 当前仓库 | 默认介绍 2023 Challenge；数据和模拟器版本已更新，不能直接当作原论文同版数据 |

**长度用动作步数表达，而不是分钟。** 论文 walkthrough 上限为 **250 次动作**；当前公开 baseline 配置为 walkthrough 250、unshuffle 500 步。动作含导航和对象交互，实际运行速度受模拟器与策略影响；录屏播放速度也可独立设置，因而不存在可由这些步数直接推导的统一视频长度。[当前 `MAX_STEPS` 配置](https://github.com/allenai/ai2thor-rearrangement/blob/main/baseline_configs/rearrange_base.py)

当前 README 的 2023 数据仍列 train 4,000 / val 1,000 / test 1,000；训练集只抽 800 用于 eval，加上验证和测试共 2,800 条组合评测实例。文件是 `data/2023/*.pkl.gz` 的序列化任务规格，不是 MP4。不同年份修改了交互逻辑、实例分布和 AI2-THOR 版本，因此不要把 2023 的评测和 2021 论文得分混用。

原论文 Table 1 的测试集结果：1-Phase RN18+ANM（模仿学习）完全成功率 **3.2%**，严格修复比例 **8.9%**；2-Phase RN18+ANM（PPO+IL）对应 **0.3%** 和 **1.4%**。启发式专家为 83.4% 完全成功，但该专家使用额外任务信息，不是普通视觉 agent。严格修复比例还要求没有弄坏原本正确的物体；它与“整间房完全恢复”的成功率不是同一指标。本次仅整理论文结果，没有训练或评测模型。[论文表 1](https://openaccess.thecvf.com/content/CVPR2021/papers/Weihs_Visual_Room_Rearrangement_CVPR_2021_paper.pdf)

官方 README 给出 [YouTube 补充视频](https://www.youtube.com/watch?v=1APxaOC9U-A)，但该地址在当前工作区返回网络不可达，本次没有拿到可解码媒体或可核验的播放时长。项目页可访问，提供任务图、RGB 和深度示例，因此保留 **4 张官方静态图**；这些不是视频抽帧，不计作 100 帧预览。未安装模拟器生成新的 rollout，也未把静态图重复凑数。

本地资料：[逐图来源索引](project.json)、[论文 PDF](sources/paper.pdf)、[论文提取文字](sources/paper.txt)、[仓库 README](sources/README.md)、[视频访问失败记录](metadata/youtube_access.html.error.json)。
