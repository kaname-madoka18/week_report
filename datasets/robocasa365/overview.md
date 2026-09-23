# RoboCasa365：仿真任务、示范轨迹与视频预览

核验日期：2026-09-22。RoboCasa365（ICLR 2026，arXiv:2603.04356）在 MuJoCo / RoboSuite 中定义 **365 项厨房任务：65 原子任务、300 复合任务**，覆盖约 2,500 个厨房环境。训练数据包含 RGB 相机、动作、本体状态、任务语言，以及可回放的仿真状态；它不是持续一天的真实人类视频库。[论文](https://arxiv.org/html/2603.04356v1)、[项目](https://robocasa.ai/)、[官方仓库](https://github.com/robocasa/robocasa)

| 当前官方数据说明 | 任务 / 场景 | 每任务示范 | 官方时长 |
|---|---|---:|---:|
| 人工预训练数据 | 300 任务 / 2,500 场景 | 100 | 482 小时 |
| MimicGen 合成预训练数据 | 60 原子任务 / 2,500 场景 | 约 10,000 | 1,615 小时 |
| 人工目标任务数据 | 50 任务 / 10 个独立目标厨房 | 500 | 193 小时 |
| 合计 | 不将任务数当作互不重叠类别相加 | — | **约 2,290 小时** |

以上为[当前官方文档](https://robocasa.ai/docs/datasets/datasets_overview.html)的发布规模，未下载全部轨迹逐一计数。论文 v1 Table 7 对应为 404 / 1,615 / 208 小时，当前文档有更新，故没有把这两种口径拼成一个数字。目标任务划分为 18 atomic-seen、16 composite-seen、16 composite-unseen。

**视频与 episode 的长度**：论文 Figure 4 讨论 55,000 条人工示范，称大多数在 **10–60 秒**，存在超过 **3 分钟**的长尾。当前数据采用 LeRobot 格式，一条 episode 有多个相机 MP4，以及逐步动作/状态记录；环境与控制器为 **20 Hz**。相机并行观察不能乘到独立任务执行时长中。

本次还取得官方网页用于显示的 **365 项任务的 episode 时长中位数**，整理为 [task_episode_medians.csv](metadata/task_episode_medians.csv)。这些数已取整：65 原子任务的中位数分布在 **5–46 秒**，300 复合任务在 **10–166 秒**。例如 OpenCabinet 为 35 秒，ArrangeBreadBasket 83 秒，PrepareCoffee 39 秒，DivideBuffetTrays 166 秒。这是**各任务的中位数范围**，不是全体 episode 的最短/最长范围，也不是本次完整下载后重新统计的结果。[官方原子统计脚本](https://github.com/robocasa/robocasa-web/blob/main/docs/atomic_tasks/atomic_episode_lengths.js)、[复合统计脚本](https://github.com/robocasa/robocasa-web/blob/main/docs/composite_tasks/composite_episode_lengths.js)

上述脚本的 `mean_seconds` 字段与 `median_seconds` 相同，文件注释说明其来自取整后的 median 数据；因此这里按中位数记录。脚本分成 61 个基本原子项和 304 个其余项，其中含 4 个多步骤原子项；CSV 按正式 65 / 300 任务分类另列 `benchmark_class`，同时保留原始来源类别。

另一个容易混淆的量是 **evaluation horizon**。当前 `dataset_registry.py` 注册 317 个带数据路径的任务（65 原子、252 复合），控制上限为 **300–7,200 步**，按 20 Hz 相当于 **15–360 秒的标称执行预算**，并非真实示范时长。官网在 v1.0.1 将 horizon 统一增加为原来的 1.5 倍；运行评测应记录版本。[每个已注册任务的 horizon](metadata/task_horizons.csv)、[官方 registry](https://github.com/robocasa/robocasa/blob/main/robocasa/utils/dataset_registry.py)

本地预览共展示 **4 组 × 100 = 400 帧**，均解码自官方公开视频：

| 预览组 | 来源 | 实测 MP4 播放长度 |
|---|---|---|
| RoboCasa365 原子任务 | 当前任务文档：OpenCabinet | 21.9 秒 |
| RoboCasa365 复合任务 | 当前任务文档：ArrangeBreadBasket | 59.900 秒（不是统计中位数 83 秒） |
| 平台基础技能合辑 | 平台早期官网演示：抓放、门、拨杆、旋钮、按钮，各 20 帧 | 6.033、3.8、2.75、7.333、1.867 秒 |
| 平台复合任务合辑 | 平台早期官网演示：蒸蔬菜 34 帧、补货 33 帧、煮咖啡 33 帧 | 12.875、6.25、13.042 秒 |

当前两个任务视频来自任务文档脚本引用的官方 R2 地址，是三个相机视角的并排演示。后两组明确标为平台旧演示；它们能展示动作类型，但不代表 365 任务最新数据的随机样本。按钮和拨杆原片不足 100 个真实帧，因此按合辑均匀取样，没有复制单帧补数。

所有 10 个保存的视频在下载前均确认单文件严格小于 **100,000,000 bytes**；最大为 20.40 MB，总计约 **30.31 MB**。8 个静态站点媒体还与官方网站 Git 仓库 blob SHA 逐个核对一致。本次没有下载完整训练数据或安装模拟器。[全部演示实测长度 CSV](metadata/demo_durations.csv)、[逐帧来源](project.json)、[媒体一致性核验](metadata/demo_integrity.json)

论文模型结果按 arXiv v1 的评测条件记录，本次未运行模型。Table 1 用 300 任务的人工预训练数据进行多任务训练，GR00T N1.5 平均成功率 **20.0%**，Diffusion Policy 为 **6.1%**；GR00T 在 atomic、composite-seen、composite-unseen 上分别为 43.0%、9.6%、4.4%。Table 2 的基础模型训练实验中，完整目标数据下“预训练 + 目标后训练”为 **51.1%**，只训练目标数据为 **43.7%**。这两个表的训练数据设置不同，51.1% 不能直接当作对 Table 1 中 20.0% 的同条件模型提升。[原始结果表](https://arxiv.org/html/2603.04356v1#S4)

文件清单：[overview](overview.md)、[project.json](project.json)、[官方源码/文档快照](sources/README.md)。下载与使用说明见 [官方数据文档](https://robocasa.ai/docs/datasets/using_datasets.html)。

## 第二版短视频展示

本次第二版预览把本地完整副本不超过 **180 秒** 的视频改为直接播放的 video case 卡片，不再为这些短视频重复生成 100 帧图片；较长视频、没有安全本地副本的视频仍保留抽帧预览。当前项目检测到 **10 个**短视频 case，播放文件均小于 100 MB；页面中的时长、大小与 SHA-256 来自本地文件核验。
