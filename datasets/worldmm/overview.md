# WorldMM：数据集与视频预览

[返回全部论文目录](../../index.html) · [本页预览图册](preview_gallery.html) · [EgoLife 完整 overview](../../overview.html)

WorldMM 是长视频记忆与检索方法，**没有另建名为 WorldMM 的原始视频数据集**。它使用 EgoLifeQA、Ego-R1 Bench、HippoVlog、LVBench 和 Video-MME Long 五个已有基准，另公开 EgoLife 的预构建记忆元数据。以下区分原始视频、问题集合和衍生记忆文件。核对日期：2026-09-22。

| 数据来源 / 使用范围 | 视频与问题数量 | 单段 / 总播放长度 | 本地预览 |
|---|---|---|---|
| EgoLifeQA | Jake 一人的一周记录；500 道四选一题 | 发布片段通常 30 秒；论文将该流写为 44.3 小时，本地 6,266 个 Jake 文件按 30 秒估算为 52.217 小时；实际文件总时长未逐一核验 | 复用已采集的 100 个 Jake 片段，各取一帧 |
| Ego-R1 Bench | 本论文表 3 使用 300 道题；底层复用 EgoLife | 同一批一周视频，不应重复累计视频总量；论文表 3 平均 44.3 小时 | 同一份 EgoLife 预览 |
| HippoVlog | 25 个日常 vlog、1,000 道题 | 论文表 3 平均 0.45 小时（27 分钟）；由舍入均值推算合计约 11.25 小时，非逐文件实测 | 未采集 |
| LVBench | 103 个长视频；原始 1,549 题，剔除 15 道无片段标签题后评测 1,534 题 | 平均 1.14 小时（68.4 分钟）；推算约 117.42 小时，非精确总时长 | 未采集 |
| Video-MME Long | 300 个视频、900 道题 | 每个 30–60 分钟；本论文平均 0.69 小时（41.4 分钟），推算约 207 小时；Video-MME 全集另为 900 视频、254 小时 | 未采集 |

来源：[WorldMM 论文表 3 与数据集附录](https://arxiv.org/html/2512.02425v2)、[Video-MME 官方仓库](https://github.com/MME-Benchmarks/Video-MME)、[EgoLife 本地文件清单](../../metadata/video_inventory.csv)。**44.3 小时是 WorldMM 论文采用的记载口径，不能与另两篇论文的 Jake 51.9 小时或按发布文件数得到的标称值混写为同一个实测值。**

## 发布和访问

- [官方代码](https://github.com/wgcyeo/WorldMM)提供 EgoLife 和 Video-MME 的预处理、记忆构建与评测流程。
- [WorldMM-EgoLife](https://huggingface.co/datasets/wgcyeo/WorldMM-EgoLife)是预构建记忆元数据。此次 API 返回 32 个仓库文件，没有 MP4；不能据此当成 32 个新视频。仓库快照保存在 [sources/hf_info.json](sources/hf_info.json)。
- EgoLife 原视频、密集字幕和逐人转写可访问；更完整的七天、六人、视角和眼动预览见 [EgoLife 图册](../../preview_gallery.html)。
- 本页的预览仅覆盖论文实际使用的 Jake 视角。HippoVlog、LVBench、Video-MME 的全量视频此次未采集，不能由这 100 帧推断它们的内容分布。

## 论文结果与评测条件

下表为 [arXiv v2 表 1](https://arxiv.org/html/2512.02425v2)的多选题准确率（%），本次未运行模型复现。

| 方法 | EgoLifeQA | Ego-R1 | HippoVlog | LVBench | Video-MME Long | 五项平均 |
|---|---:|---:|---:|---:|---:|---:|
| GPT-5 基础模型 | 48.6 | 46.3 | 75.7 | 60.4 | 74.3 | 61.1 |
| WorldMM-8B | 56.4 | 52.0 | 69.7 | 55.4 | 66.0 | 59.9 |
| WorldMM-GPT | 65.6 | 65.3 | 78.3 | 61.9 | 76.6 | 69.5 |

WorldMM-GPT 相对表内 GPT-5 基线的五项平均提高 8.4 个百分点。GPT-5-mini 构建情节/语义记忆，VLM2Vec-V2 建立视觉索引；检索和回答分别配置 GPT-5 或 Qwen3-VL-8B 版本。检索最多 5 轮。EgoLife 使用 30 秒、3 分钟、10 分钟、1 小时等多种记忆粒度；这是算法分段长度，不是原始录制时长。不同论文的模型、问题子集和输入预算不同，不能将本表直接与 EGAgent 或 MAGIC-Video 的数字排序。

## 本地文件

- [project.json](project.json)：图册分组、帧时间戳、原视频来源；100 帧复用 `../../previews/`，没有重复下载视频。
- [sources/README.md](sources/README.md)、[sources/paper.html](sources/paper.html)、[sources/repo_tree.json](sources/repo_tree.json)：官方来源快照。
- [MM-Lifelong](../mm-lifelong/overview.html)、[EGAgent](../egagent/overview.html)、[MAGIC-Video](../magic-video/overview.html)：相关方法与数据口径对照。
