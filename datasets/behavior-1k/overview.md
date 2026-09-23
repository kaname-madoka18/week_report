# BEHAVIOR-1K：任务库与当前示范数据

核验日期：2026-09-22。原论文 arXiv:2403.09227（2024）提出 **1,000 种家庭活动定义与 OmniGibson 仿真环境**。它不是由 1,000 个成品视频组成的集合。原论文 Table 1 为 50 场景、373 个房间、9,318 个物体模型；目前官网写为 10,000+ 物体，属于后续资产更新，应保留版本差别。[原论文](https://arxiv.org/html/2403.09227v1)、[当前官网](https://behavior.stanford.edu/)

| 版本 / 数据层 | 数据单位与规模 | 长度口径 |
|---|---|---|
| BEHAVIOR-1K 原论文 | 1,000 种 BDDL 活动，初始/目标谓词与仿真资产 | 活动定义没有固定视频长度，取决于执行策略 |
| 2025 Challenge | 50 任务、10,000 条人类遥操作示范 | 后续发布，非原论文所有活动的视频集合 |
| 2026 Challenge LeRobot V3 | **100 任务 × 200 条 = 20,000 条示范**；官方页面标 3.27 TB | 含 RGB、深度、动作、本体状态、相机位姿、语言/子任务标注 |
| 2026 rawdata | 同一批示范的原始 HDF5 回放数据，官方标 1.44 TB | 用于在模拟器内精确回放并重新渲染 |

当前数据规模与格式来自 [2026 官方数据说明](https://behavior.stanford.edu/challenge/dataset.html)。两个版本有重叠任务；在未按原始 episode ID 核验去重前，不应直接累加为 30,000 条独立示范。

本次实际下载 **100 个很小的 episode 元数据 parquet**，读取全部 20,000 条 `length`，用官方 `meta/info.json` 中的 **30 fps** 换算，结果为：

| 全部 episode 时长统计 | 结果 |
|---|---:|
| 总帧数（单时间轴，未乘相机数） | 210,916,774 |
| 总时长 | **1,952.9331 小时** |
| 平均 | **351.528 秒 = 5.859 分钟** |
| 中位数 | **335.033 秒 = 5.584 分钟** |
| 最短 | **4.933 秒** |
| 最长 | **1,525.367 秒 = 25.423 分钟** |

这是完整 episode 元数据统计，不是抽样视频均值。三个 RGB 相机和三个深度相机共享同一时间轴，不能把六路长度相加当作人类行为时长。[全部逐条长度 CSV](metadata/episode_durations.csv)、[统计 JSON](metadata/duration_summary.json)、[官方 info 快照](sources/meta_info.json)

预览为 **3 类视角各 100 帧，共 300 帧**：头部 RGB、左腕 RGB、右腕 RGB，均来自官方 `turning_on_radio` 第 0 条示范。该 episode 长 **65.2 秒**。按 100 个均匀时间点解码真实图像，不复制图片凑数。

LeRobot V3 把多个 episode 串在同一个 MP4 中，三个已探测容器分别长 2,761.5、7,908.1、8,659.9 秒；这些**不是**第 0 条 episode 的长度。对应文件大小约 206.43、208.79、208.76 MB。本次只用 HTTP Range 读取容器索引及首条示范，共 **10,223,616 字节**，未完整下载或保存这些大视频。[三个相机的逐帧来源](project.json)

原论文 Table 2 只评测 **StoreDecoration、CollectTrash、CleanTable 三个活动**。直接视觉动作 RL-VMC 的任务成功率均为 0；使用动作基元且带历史的 RL-Prim.Hist. 分别为 55%±5%、63%±3%、88%±2%。它们使用不同动作抽象，且基元实验涉及简化抓取等设置；在更真实物理抓取下，Table 4 的成功率显著下降。因此这些数字不能视作完整 1,000 活动或当前 2026 100 任务的泛化成绩。本次没有安装模拟器或复现模型。[论文实验](https://arxiv.org/html/2403.09227v1)

代码与示范入口：[官方仓库](https://github.com/StanfordVL/BEHAVIOR-1K)、[2026 LeRobot 数据](https://huggingface.co/datasets/behavior-1k/2026-challenge-demos)、[原始 HDF5](https://huggingface.co/datasets/behavior-1k/2026-challenge-rawdata)。本次数据修订为 `4f50b44796641a4d526a19d9aeadc8aa51e2f2c2`，保存在 [API 快照](sources/hf2026_info.json)。预览只展示一个任务的一个 episode；适合查看真实数据格式、机器人视角和时长，不代表所有活动的视觉多样性。
