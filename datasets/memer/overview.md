# MemER：通过经验检索扩展机器人控制记忆

核验日期：2026-09-23。**MemER: Scaling Up Memory for Robot Control via Experience Retrieval**（arXiv:2510.20328，ICLR 2026）提出了面向真实机器人长时操作的分层记忆策略：高层视觉语言模型检索历史中的关键帧 experience，低层策略根据检索到的边界和当前观测执行动作。作者为 Ajay Sridhar、Jennifer Pan、Satvik Sharma、Chelsea Finn。[论文](https://arxiv.org/abs/2510.20328) · [GitHub](https://github.com/memer-policy/memer) · [项目官网](https://jen-pan.github.io/memer/)

## 这页整理了什么

这页是论文与官网演示的可追溯预览，不是把完整训练集复制到本地。官网公开的 6 个 MP4 都小于 100 MB，因此保存了完整副本；第二版页面把它们直接放成可播放的 video case，没有再为短视频生成 100 帧图片。文件的播放时长、帧数、尺寸、字节数和 SHA-256 见 [video_cases.csv](metadata/video_cases.csv) 与 [project.json](project.json)。

| 展示分组 | 视频 case | 实测播放时长 |
|---|---:|---:|
| Task Visualizations：Object Search / Counting / Dust & Replace | 3 | 36.333–62.667 秒 |
| Results：Object Search 三种物体组合 | 3 | 17.233–28.367 秒 |
| **合计** | **6** | **17.233–62.667 秒** |

这些 MP4 是官网压缩后的精选演示，不能把它们的秒数当作训练集 episode 时长。论文中的任务需要持续数分钟的操作；本页用“官网视频实测时长”和“论文任务跨度”分开表述。

## 任务与记忆需求

论文在真实机器人上研究三个需要检索经验的长时任务，每个任务有 50 个 demonstrations，并为每个任务加入约 10–15 个 intervention demonstrations：

| 任务 | 记忆问题 | 任务概念 |
|---|---|---|
| Object Search | 找回目标物体及其历史位置 | 在 3 个不透明箱子中搜索 3–5 个物体并依次取回 |
| Counting Scoops | 还需要舀几勺 | 对花生或 jelly beans 执行精确数量的舀取 |
| Dust & Replace | 清扫前物体放在哪里、清扫状态如何 | 移出物体、清洁两层架子，再放回原处 |

实现上，高层使用 Qwen2.5-VL-7B-Instruct，低层使用 `pi_0.5`；检索按层次组织 keyframe，并在任务边界处选择可供当前决策使用的历史片段。实验平台是 Franka 机械臂，使用第三人称 ZED 和腕部 miniZED；原始图像为 320×180、15 Hz，输入下采样到 2 Hz，高层约 1 Hz、低层约 2 Hz。

## 论文结果

Table 1 的每项机器人任务评测 20 次。下表保留论文的原始计数，便于区分“物体找对”“路径最优”“数错”以及 Dust & Replace 的各个子目标：

| 方法 | Object retrieved /20 | Optimal path /20 | Wrong scoops /20 | Dust bottom /20 | Dust top /20 | Replace bottom /20 | Replace top /20 |
|---|---:|---:|---:|---:|---:|---:|---:|
| MemER | 59 | 57 | 1 | 20 | 19 | 18 | 20 |
| No history | 32 | 25 | 61 | 5 | 4 | 5 | 7 |
| Short history | 38 | 31 | 26 | 14 | 14 | 11 | 12 |
| Long history | 47 | 41 | 12 | 11 | 11 | 12 | 12 |
| Human high-level | 58 | 58 | 0 | 19 | 19 | 18 | 17 |

论文按任务汇总时报告 MemER 在三个任务上均超过 90% 的任务完成率；长历史基线约比 MemER 低 34%。离线 API 模型的 trajectory / boundary accuracy（Table 2）为：MemER 在 Object Search 为 0.80 / 0.76、Counting 为 0.67 / 0.65、Dust & Replace 为 0.87 / 0.86。这里的数字都是论文报告，本次没有重新运行机器人或复现实验。

## 数据与代码入口

GitHub 仓库提供高层训练数据准备和评估代码，公开 README 还列出了 LeRobot 格式的数据入口，例如 `ajaysri/dusting_train_50_v3_subtasks_rgb` 与 `ajaysri/dusting_test_10_v3_subtasks_rgb`，以及公开 checkpoint `ajaysri/memer-dusting-qwen3vl-4b-step-1500`。完整训练/评估数据没有在本页批量下载；本地保留了 [README 快照](sources/README.md)、[GitHub tree 快照](sources/github_tree.json)、[论文 HTML 快照](sources/paper.html) 和 [官网 HTML 快照](sources/project.html)，以便核对版本与来源。

## 第二版短视频展示规则

本目录统一把“本地完整副本不超过 180 秒且小于 100 MB”的视频直接显示为 video case；因此本页每个分组都显示 `<video controls>` 播放器，只有本地元数据表记录，不生成重复帧卡片。更长或没有安全本地副本的项目仍使用 100 帧均匀抽样；这条规则与本页的 6 个官网短视频都已通过文件校验。
