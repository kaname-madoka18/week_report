# FetchBench：仿真抓取与取出物体基准

核验日期：2026-09-22。论文 arXiv:2406.11793v2 / CoRL 2024。FetchBench 面向“接近 → 抓取 → 将物体从杂乱区域取出”的完整流程；发布核心为 Isaac-Gym 环境、程序生成场景与轨迹生成/评测代码。它不是一套固定时长的长视频库。[论文](https://arxiv.org/html/2406.11793v2)、[官方代码](https://github.com/princeton-vl/FetchBench-CORL2024)、[项目页](https://sites.google.com/view/fetchbench/home)

| 数据层 | 论文规模 | 数据单位 / 是否是视频 |
|---|---|---|
| 物体库 | 5,544 物体，约 7:1 训练/测试划分 | 3D 模型与抓取姿态；不是视频 |
| 评测场景 | 13 种程序场景模板、100 个测试场景 | 桌面、搁架、抽屉、篮筐等 |
| 评测任务 | 6,000 个 fetching 实例 | 场景初态、目标物体与成功约束 |
| 论文模仿学习数据 | 约 27,500 条成功轨迹、超过 360 万帧、约 5,700 个训练任务实例 | 点云、本体状态、动作等训练记录；不能假定全部发布为 MP4 |

四种支撑面是主要场景类别。论文正文 §4.1 写 on-table 1,526、on-shelf 2,724、in-basket 891、in-drawer 859；附录 Table 4 的总计却是 in-drawer 891、in-basket 859，二者对调；该表 Drawer 行的总任务数也与分类列不一致。本报告保留这处原文差异，未将未下载资产中的实际实例数当作已核验数字。

视频长度：**没有核验到完整轨迹库的逐条视频时长或统一平均 episode 秒数**。约 360 万帧 / 27,500 条轨迹只能给出粗略记录数均值，不能直接当作按固定 fps 编码的视频。论文 Table 2 的 16.1–139 秒是成功案例的平均**算法计算时间**，不是视频播放长度。

公开 `FetchPtdImitE2E.yaml` 中 `max_num_steps: 250` 是该模仿策略配置的控制步上限，另外还有初始化、夹爪、稳定等待等阶段。`FetchBase.yaml` 的仿真步长约 1/60 秒，也不能单独把整个 benchmark 换算成统一 episode 时长。[策略配置](https://github.com/princeton-vl/FetchBench-CORL2024/blob/main/InfiniGym/isaacgymenvs/config/task/FetchPtdImitE2E.yaml)

论文 Table 2 在 6,000 测试实例上的最高基线为 CGN-CuRobo-Imit-Transformer，成功率 **20.3%**；CGN-CuRobo 为 9.4%，端到端 Transformer 模仿为 9.9%。输入使用分割点云和机器人关节状态。取出目标后，还要求其他物体未明显被扰动；附录规定等待 10 秒稳定后检查，目标在机器人后侧且足够高，其他物体质心移动小于 0.1 米。提供真值抓取及几何的诊断实验可达到 67.1%，其信息条件不同，不应与普通输入的 20.3% 横向比较。[评测表和诊断实验](https://arxiv.org/html/2406.11793v2#S5)

当前官方 README 给出资产 ZIP、第三方依赖 ZIP 和模型 checkpoint 链接，并提供轨迹生成代码；其中仍写 baseline dataset 将在后续发布。本次未找到已明确发布、可以逐视频访问的 27,500 条轨迹数据下载清单。没有下载大型资产包，也没有安装完整模拟器。项目 Google Sites 在工作区网络中不可直连；网页检索可读内容主要为静态研究图，本次未找到可安全取帧的官方 MP4 地址。

因此预览提供论文公开的**静态场景、任务流程与程序资产示例图**，不将这些图计作视频帧，不复制成 100 帧。详细数量与图片 URL 见 [project.json](project.json)。所有预览是原论文图，不是本次模拟器生成或完整数据集抽样。

本地证据：[论文 HTML](sources/paper.html)、[结果表](sources/tables.txt)、[仓库 README](sources/README.md)、[仓库目录快照](sources/repo_tree.json)、[控制策略配置](sources/FetchPtdImitE2E.yaml)。
