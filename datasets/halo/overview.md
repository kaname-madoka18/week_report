# HALO / ReMemBench：机器人需要记住什么

核验日期：2026-09-22。HALO（*Memory Retrieval in Visuomotor Policies for Long-Horizon Robot Control*，RSS 2026 / arXiv:2606.25136）是学习从交互历史检索信息的视觉动作策略。论文使用 **ReMemBench 仿真轨迹**与真实机器人实验，不是持续数小时的人类第一视角视频数据集。策略读取图像、本体状态和历史动作，并用视频 QA 监督辅助学习。[论文](https://arxiv.org/html/2606.25136v1)、[项目](https://robin-lab.cs.utexas.edu/HALO/)、[代码](https://github.com/UT-Austin-RobIn/HALO)

| 主要任务类别 | 需要的记忆 | 论文训练示范设置 |
|---|---|---|
| Retrieve Object | 物体之前的位置 | 仿真 50 条；真实 50 条 |
| Return to Same Container | 物体与原容器的关系 | 仿真 50 条；真实 100 条 |
| Store N Objects | 已经放入的物体数量 | 仿真 50 条；真实 100 条 |
| Heat Stove for T Minutes | 开始加热的事件时间 | 仿真 50 条；真实 60 条 |
| Human–Robot Store N Objects | 人与机器人共同完成了多少 | 真实协作实验；Table IV 未独立列出此扩展任务示范数 |

数字来自论文 Table IV，描述论文采用的设置，不是对公开目录所有文件的独立轨迹去重计数。四种仿真任务各 50 条的设置，与当前公开 ReMemBench 数据包含的其他任务/版本不能简单相加。

**长度：最长 8 分钟的记忆和任务执行跨度。** 论文的加热任务会使用 4、6、8 分钟等等待目标，其他任务长度取决于动作与成功/失败过程。这是控制任务时间，不是每个公开 MP4 的固定时长。官网提供加速和整理后的展示；`4x` 文件名表示加速版，本地预览标注的是实测播放时间。例如 8 分钟加热演示的 MP4 为约 123.867 秒，不应据此说该任务只需 2 分钟。

本次读取[官方 ReMemBench 数据 API](https://huggingface.co/datasets/Rutav/ReMemBench-Dataset/tree/main)：63 个文件，50 个为 HDF5，文件总字节约 **12.134 GB**。其中有原始与渲染后的重复表示，包含 `demo.hdf5`、`demo_im128_notp.hdf5` 等，文件数不是视频数或独立 episode 数。另有 [HALO_QAs](https://huggingface.co/datasets/Rutav/HALO_QAs)，提供按任务组织的 task query 与生成 QA JSON。[文件清单](metadata/dataset_files.csv)

还对一个 **1,010,482,274 字节**的 HDF5 文件用 HTTP Range 读取了 **2,326,528 字节**元数据，找到 26 个 trajectory group 和各自 `num_samples`。其 `env_args` 没有明确记录控制频率，所以这些记录数没有被冒充为已核验秒数；本次没有下载完整 HDF5，也没有把这一个早期任务文件当作整个论文训练集。[HDF5 探测记录](metadata/hdf5_probe.json)

预览覆盖**四个仿真展示任务与五个真实展示任务，各 100 帧，共 900 帧**。每段从不同时间点均匀抽取真实图像；没有复制图片凑数。它们来自官网精选演示，不是从完整训练/测试集随机抽样。逐段播放时长如下：

| 视频组 | 实测播放时长（秒） | 大小（MB） |
|---|---:|---:|
| 仿真：空间记忆 / Retrieve Object | 21.267 | 3.567 |
| 仿真：物体关系 / Return to Same Container | 15.133 | 2.415 |
| 仿真：数量记忆 / Store N Objects | 34.867 | 4.228 |
| 仿真：事件时间 / Heat Stove | 37.167 | 2.407 |
| 真实机器人：空间记忆 | 19.500 | 1.629 |
| 真实机器人：物体关系 | 8.033 | 9.991 |
| 真实机器人：数量记忆 | 29.567 | 10.467 |
| 真实机器人：事件时间（8 分钟任务） | 123.867 | 20.763 |
| 真实机器人：人机协作计数 | 12.700 | 9.963 |

九段完整保存的官网视频均在下载前确认严格小于 **100,000,000 bytes**，最大约 20.763 MB；超时的片段通过 HTTP Range 续传。没有完整下载超过此阈值的视频。完整轨迹库的逐条秒数仍未核验。[视频时长 CSV](metadata/demo_durations.csv)、[每帧来源与时间戳](project.json)

论文 Table I 在四项仿真任务上每任务评测 50 次，HALO 平均成功率 **41%**，标准 Transformer **22%**，Scene Memory Transformer **34%**；HALO 四任务依次为 64%、32%、26%、40%。Table II 的五项真实任务每任务 20 次，HALO 平均 **55%**，标准 Transformer **36%**。这些是闭环机器人任务成功率，不是视频问答准确率；VQA 主要用于辅助训练检索。结果摘自论文，本次没有运行模型或模拟器。[原始结果表](https://arxiv.org/html/2606.25136v1#S4)

公开数据修订为 `c73473e0c804a62902cc7e992124bf2459604482`。[数据 API 快照](sources/hf_info.json)、[QA API 快照](sources/hf_QA_info.json)、[论文快照](sources/paper.html)、[README](sources/README.md) 均保留于本地，便于追溯。

## 第二版短视频展示

本次第二版预览把本地完整副本不超过 **180 秒** 的视频改为直接播放的 video case 卡片，不再为这些短视频重复生成 100 帧图片；较长视频、没有安全本地副本的视频仍保留抽帧预览。当前项目检测到 **9 个**短视频 case，播放文件均小于 100 MB；页面中的时长、大小与 SHA-256 来自本地文件核验。
