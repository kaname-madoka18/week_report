# RMBench：记忆依赖的双臂操控

RMBench（*Memory-Dependent Robotic Manipulation Benchmark with Insights into Policy Design*）专门测试当前图像不足以决定下一步动作的操控任务。它将 RGB 观察、语言指令与动作历史结合，使用 **Task Memory Complexity（TMC）**区分需要保留一个关键历史观察的 `M(1)` 任务和需要积累多次交互信息的 `M(n)` 任务。arXiv 首次提交于 **2026-03-01**；2026-09-23 核对时官方页面仍标注 **Under Review**。[论文](https://arxiv.org/abs/2603.01229) · [官网](https://rmbench.github.io/) · [代码](https://github.com/RoboTwin-Platform/RMBench)

这是本次明确指定加入的 benchmark；同日 Semantic Scholar 引用快照为 **40**。引用和 GitHub stars 的更新日期及原始链接见本页论文元数据区。

## 数据与任务

| 项目 | 核验结果 |
|---|---|
| 环境 | RoboTwin 2.0 / SAPIEN，双臂操控 |
| 任务 | 9 个记忆依赖任务：5 个 `M(1)`，4 个 `M(n)` |
| 论文训练与评测设置 | 每任务 50 条合成示范、100 次 rollout；这是论文比较设置，不能当作所有公开版本的独立轨迹总数 |
| 模态 | RGB 观察、机器人状态/动作、语言任务及细粒度 action–observation 对齐描述 |
| 配套策略 | Mem-0：高层 planning、低层 execution、子任务结束分类器，以及 key / anchor / sliding memory |
| 公开数据 | [TianxingChen/RMBench](https://huggingface.co/datasets/TianxingChen/RMBench)；官方 README 另链接 [M(1) 发布包](https://huggingface.co/qiuly/Mem-0-m1mix-RMBench)、[M(n) 发布包](https://huggingface.co/qiuly/Mem-0-mn-RMBench)和[处理后的 M(1) 数据](https://huggingface.co/datasets/qiuly/Mem-0-m1mix-dataset-RMBench) |

| 类别 | 任务 | 记忆要求 |
|---|---|---|
| `M(1)` | Observe and Pick Up | 参考物消失后记住其身份，再拾取匹配物 |
| `M(1)` | Rearrange Blocks | 在移动和按按钮的过程中保持初始摆放信息 |
| `M(1)` | Put Back Block | 将物体返回原来的托盘 |
| `M(1)` | Swap Blocks / Swap T | 记住原始位置，并交换积木的位置或朝向 |
| `M(n)` | Battery Try / Blocks Ranking Try | 从尝试结果中累积经验，继续试插电池或试积木顺序 |
| `M(n)` | Cover Blocks | 遮挡后保持颜色—位置关系，按指定次序揭开 |
| `M(n)` | Press Button | 根据数字要求执行多次按压，并保持计数 |

任务说明来自[论文 Table 4](https://arxiv.org/html/2603.01229v3#A1)，记忆需求由任务本身定义；执行步骤多并不自动意味着需要长程记忆。

## 长度与本地预览

论文没有给出可直接核验的全量训练 episode 秒数分布。本页测量的是**官方 README 所链接的 Mem-0 发布包评测录像**，其中可能包含失败与耗尽时间上限的 rollout；不能把录像时长当作成功任务的最短执行时间。

从 9 类任务各确定性选取 `episode0` 和 `episode1`，共 **18 个 MP4、15.79 MB**。所有文件均先从公开文件清单核对大小，小于 100 MB；Hugging Face 直连在此环境超时后通过公开镜像下载，并逐个与发布清单的 LFS SHA-256 核对一致。没有下载模型权重、训练轨迹库或全部评测视频。

| 任务 | episode0 / episode1 播放时长（秒） | 预览方式 |
|---|---:|---|
| Observe and Pick Up | 25.0 / 25.0 | 2 个直接播放 case |
| Put Back Block | 35.4 / 35.6 | 2 个直接播放 case |
| Rearrange Blocks | 38.6 / 39.8 | 2 个直接播放 case |
| Swap T | 60.0 / 60.0 | 2 个直接播放 case |
| Swap Blocks | 58.5 / 58.8 | 2 个直接播放 case |
| Battery Try | 100.0 / 100.0 | 2 个直接播放 case |
| Blocks Ranking Try | 350.0 / 350.0 | 每段 50 个均匀时刻，共 100 帧 |
| Cover Blocks | 99.6 / 101.3 | 2 个直接播放 case |
| Press Button | 150.0 / 150.0 | 2 个直接播放 case |

因此本页有 **16 个短视频 case + 100 张长录像预览帧 + 3 张官方静态图**。短视频阈值为 180 秒；静态任务图、结果图和错误分析图没有计入视频帧数。时长、帧数和分辨率由 PyAV / FFmpeg libavformat 读取本地容器核验，当前环境未提供独立 ffprobe 程序。[视频 CSV](metadata/video_cases.csv) · [视频及哈希记录](metadata/video_cases.json) · [抽帧时间记录](metadata/long_video_frames.json) · [打开预览](preview_gallery.html)

## 论文主要结果

以下为 **arXiv v3 的论文设置**，成功率为百分比。

| 设置 | Mem-0 | π0.5 | X-VLA | ACT | Diffusion Policy |
|---|---:|---:|---:|---:|---:|
| `M(1)` 平均 | 52.8 | 14.4 | 11.8 | 6.8 | 6.4 |
| `M(n)` 平均 | 28.5 | 5.5 | 7.3 | 4.8 | 5.0 |
| 9 任务总体平均 | 42.0 | 10.4 | 9.8 | 5.9 | 5.8 |

Mem-0 的总体平均比该表最强基线高 **31.6 个百分点**，但 Press Button 仍为 0%，显示计数和多阶段控制尚未解决。真实机器人 3 个任务的平均成功率为 Mem-0 22.50%、π0.5 5.83%、ACT 0%。移除 key memory 后，`M(n)` 平均从 28.5% 降至 4.8%；移除 anchor memory 后，`M(1)` 从 52.8% 降至 26.8%。[论文 Tables 1–3](https://arxiv.org/html/2603.01229v3)

本页视频来自**后续公开的执行模块发布包**：其 M(1) 使用同一个 `m1_mix` 多任务 checkpoint，模型卡平均为 56.6%；M(n) 为每任务独立 checkpoint，模型卡平均为 28.5%。这与论文单任务训练和完整 Mem-0 消融设置不同，不能用本页前两条视频推导或替代论文成功率。[M(1) 模型卡](https://huggingface.co/qiuly/Mem-0-m1mix-RMBench) · [M(n) 模型卡](https://huggingface.co/qiuly/Mem-0-mn-RMBench)

## 公开入口与复核

- [论文与提交历史](https://arxiv.org/abs/2603.01229)、[官方项目页](https://rmbench.github.io/)、[GitHub README](https://github.com/RoboTwin-Platform/RMBench)：任务定位、当前状态和发布入口。
- [原始数据入口](https://huggingface.co/datasets/TianxingChen/RMBench)：网页显示约 115 GB，未下载；实际文件格式和版本以仓库为准。
- [保存的官方 README](sources/README.upstream.md)、[论文 HTML 快照](sources/paper.html)、[M(1) 文件元数据清单](sources/Mem-0-m1mix-RMBench-eval-tree.json)、[M(n) 文件元数据清单](sources/Mem-0-mn-RMBench-eval-tree.json)：本地追溯资料。

核验日期：2026-09-23。官网仓库有一个未被页面引用、无法对应 9 个任务的通用测试片段，本页没有把它冒充为 benchmark 案例；决定记录在 [excluded_media.json](metadata/excluded_media.json)。
