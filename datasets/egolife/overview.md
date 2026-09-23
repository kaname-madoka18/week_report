# EgoLife 数据集 overview

核对日期：2026-09-22（UTC）。入口：[项目官网](https://egolife-ai.github.io/) · [官方博客](https://egolife-ai.github.io/blog/) · [论文 v3](https://arxiv.org/html/2503.03803v3) · [代码](https://github.com/EvolvingLMMs-Lab/EgoLife)。WorldMM 等方法对这套数据的使用范围另见各篇论文页面。

**主视频共 32,001 段、512.226 GB；通常为 30 秒片段。已制作 1,600 张独立预览图，并提供 22 组各 100 帧的浏览入口，其中六组参与者入口复用每日预览。**

直接打开 **[离线预览图册](preview_gallery.html)**，可切换日期、参与者、眼动相机、第三视角和 QA 示例，点击图片查看来源及时间。所有图片均来自实际视频，未生成或补造画面。

## 数据内容与公开入口

EgoLife 记录六位参与者连续七天共同生活、筹备 Earth Day 派对的经历。主要数据为 Aria 眼镜的第一视角视频与声音，并配合 15 台固定相机、眼动及其他传感器。它适合研究跨小时、跨天的事件检索、个人记忆与多人交互。这里聚焦官网链接的 EgoLife 主数据、第三视角及眼动发布；EgoIT-99K 是相关的外部数据混合训练集。

| 数据部分 | 本次核对的发布规模 | 时长口径 | 下载入口 |
| --- | --- | --- | --- |
| 第一视角 RGB + 音频 | 32,001 个 MP4；512.226 GB | 通常约 30 秒；700 段实测 4.05–30.05 秒 | [lmms-lab/EgoLife](https://huggingface.co/datasets/lmms-lab/EgoLife/tree/main) |
| 第三视角 EgoLifeThird | 133 个 MP4；1,234.026 GB；Level1 69 段、Level2 64 段 | 多数按整点命名，呈小时分块；**真实播放时长未核验** | [百度网盘，提取码 szxh](https://pan.baidu.com/s/1Xc3m4W9TxLx0QzQfb_LvmA?pwd=szxh) |
| EyeTracking 双眼相机 | 32,067 个 MP4 | 100 段实测 9.25–30.00 秒，多数 30 秒 | [眼动数据仓库](https://huggingface.co/datasets/Wangtwohappy/EgoLife_EyeTracking_EyeGaze) |
| EyeGaze | 32,067 个 CSV | 逐时间戳的眼动数值，无视频播放时长 | 同上 |
| EgoLifeCap | 406 个 DenseCaption SRT；402 个 Transcript SRT | 带时间戳的文本标注 | [EgoLifeCap](https://huggingface.co/datasets/lmms-lab/EgoLife/tree/main/EgoLifeCap) |
| EgoLifeQA | 当前公开 Jake 的 500 道题；论文描述 3,000 道 | 问题时间与证据时间，支持长历史检索 | [EgoLifeQA](https://huggingface.co/datasets/lmms-lab/EgoLife/tree/main/EgoLifeQA) |
| EgoLife 的指令训练标注 | Caption 9,002 条 / 4,501 个不同视频；QA 33,352 条 / 6,027 个不同视频 | 引用同一主视频仓库，不应重复计入视频小时数 | [EgoIT 子目录](https://huggingface.co/datasets/lmms-lab/EgoLife/tree/main/EgoIT) |

GB/MB 均为十进制（10⁹/10⁶ 字节）。文件数量、大小及标注条数为本次读取公开清单 / JSON 的统计。眼动与主视频有 32,000 个同名对应项；眼动侧独有 67 项，主视频侧独有 1 项，详见 [对应差异](../../metadata/eye_main_alignment.json)。

## 视频长度：总量、每人、每天

**时长有摘要概数、论文详细统计和实际文件长度三种口径。** 论文摘要写约 300 小时，详细比较表 Table 1 写 266 小时 / 6 位参与者、平均约 44.3 小时每人。当前公开清单按每段 30 秒折算为 **266.675 小时**；这是标称折算，不是 32,001 个视频实际时长之和。会话边界存在不足 30 秒的片段，少量片段为 30.05 秒。

700 段主视频抽样中，685 段恰为 30.00 秒，5 段为 30.05 秒，10 段短于 30 秒。全部抽样均为 H.264、1408×1408、20 fps，带 1 路音频。实际画面有鱼眼视野、黑边、时间与参与者标识。此编码统计仅代表本次抽查。

下列“折算小时”统一按片段数 × 30 秒计算。长记忆通常需要按人物和时间把这些片段组织成序列，单个 MP4 并非一天的连续录像；录像间可能有缺口。

| 参与者 | MP4 数 | 折算小时（非精确） | 大小 GB | 预览 |
| --- | --- | --- | --- | --- |
| A1_JAKE | 6,266 | 52.217 | 102.782 | [100 帧拼图](../../previews/contact_sheets/PERSON_A1_JAKE.jpg) |
| A2_ALICE | 5,515 | 45.958 | 85.604 | [100 帧拼图](../../previews/contact_sheets/PERSON_A2_ALICE.jpg) |
| A3_TASHA | 4,844 | 40.367 | 78.470 | [100 帧拼图](../../previews/contact_sheets/PERSON_A3_TASHA.jpg) |
| A4_LUCIA | 5,266 | 43.883 | 88.385 | [100 帧拼图](../../previews/contact_sheets/PERSON_A4_LUCIA.jpg) |
| A5_KATRINA | 4,806 | 40.050 | 74.994 | [100 帧拼图](../../previews/contact_sheets/PERSON_A5_KATRINA.jpg) |
| A6_SHURE | 5,304 | 44.200 | 81.990 | [100 帧拼图](../../previews/contact_sheets/PERSON_A6_SHURE.jpg) |

| 日期 | MP4 数 | 折算小时（非精确） | 大小 GB | 当天内容概述 | 预览 |
| --- | --- | --- | --- | --- | --- |
| DAY1 | 4,717 | 39.308 | 75.038 | 计划、购物、做饭 | [100 帧拼图](../../previews/contact_sheets/DAY1.jpg) |
| DAY2 | 4,418 | 36.817 | 65.848 | 练舞、手工与布置 | [100 帧拼图](../../previews/contact_sheets/DAY2.jpg) |
| DAY3 | 5,028 | 41.900 | 91.401 | 游戏、户外与聚餐 | [100 帧拼图](../../previews/contact_sheets/DAY3.jpg) |
| DAY4 | 4,814 | 40.117 | 76.010 | 清洁、装饰与外出 | [100 帧拼图](../../previews/contact_sheets/DAY4.jpg) |
| DAY5 | 4,318 | 35.983 | 72.674 | 派对前最后准备 | [100 帧拼图](../../previews/contact_sheets/DAY5.jpg) |
| DAY6 | 5,596 | 46.633 | 87.539 | Earth Day 派对 | [100 帧拼图](../../previews/contact_sheets/DAY6.jpg) |
| DAY7 | 3,110 | 25.917 | 43.716 | 清理与告别 | [100 帧拼图](../../previews/contact_sheets/DAY7.jpg) |

每日活动摘要参考论文附录 E；各小时统计是六人视频相加，包含同步多视角，不能当作单一时间轴的墙钟长度。完整的六人 × 七天统计见 [by_participant_day.csv](../../metadata/by_participant_day.csv)。

第一视角的 **[32,001 个文件清单](../../metadata/video_inventory.csv)** 包含大小、来源、标称时长及已实测字段。只有 700 个抽样文件填入 `duration_seconds`，其他行留空；`nominal_duration_seconds=30` 不表示已核验。独立实测表见 [measured_clip_durations.csv](../../metadata/measured_clip_durations.csv)。

命名示例：`A1_JAKE/DAY1/DAY1_A1_JAKE_11100000.mp4`。末尾 `HHMMSSFF` 是当天时间码；按官方 `time_to_frame_idx`，最后两位为帧号，**不是百分之一秒**。主视频抽样 20 fps，因此一帧约 0.05 秒。[代码来源](https://github.com/EvolvingLMMs-Lab/EgoLife/blob/main/EgoRAG/egorag/utils/util.py)

## 第三视角的已知范围

通过官方公开提取码读到了完整目录。133 段均超过 100 MB，单文件大小为 233.67 MB–10.945 GB，**本次未下载这些完整视频**。目录按 DAY1–DAY7 / Level1、Level2 组织，视频名多以 `10000000`、`11000000` 等整点结尾。目录未提供播放时长，尝试取得媒体访问配置未成功，不能由文件大小或相邻文件名把每段直接认定为 60 分钟。

| 日期 | Level1 文件数 | Level2 文件数 | 合计 GB |
| --- | --- | --- | --- |
| DAY1 | 5 | 5 | 94.490 |
| DAY2 | 12 | 9 | 201.182 |
| DAY3 | 9 | 9 | 163.162 |
| DAY4 | 12 | 13 | 239.762 |
| DAY5 | 11 | 10 | 178.294 |
| DAY6 | 13 | 13 | 256.700 |
| DAY7 | 7 | 5 | 100.435 |

完整列表见 [third_person_inventory.csv](../../metadata/third_person_inventory.csv)，其时长列明确为空。已提供的两组第三视角 100 帧预览取自官网小型演示视频，展示多机位拼图效果，不能代表对上述 133 段的均匀抽样。

## 官网视频的实测长度及预览

主页有两段演示：Day 1 11:22 和 Day 1 13:20。三类拼图视频时长如下，每类各 100 帧。

| 视角 | 11:22 演示 | 13:20 演示 | 抽帧方式 |
| --- | --- | --- | --- |
| 第一视角拼图 | 120.000 秒 | 71.100 秒 | 50 + 50 帧 |
| 第三视角一层 | 120.100 秒 | 71.100 秒 | 50 + 50 帧 |
| 第三视角二层 | 120.100 秒 | 71.100 秒 | 50 + 50 帧 |

主页单机位短片与拼图视频可能经过不同裁剪，长度并不相同。已测量主页 48 个视频和博客 9 个视频；完整 57 条时长、分辨率、帧率、文件大小与 URL 见 **[website_video_durations.csv](../../metadata/website_video_durations.csv)**。

EgoLifeQA 的五种任务是问题类别。下表“题数”只统计当前公开的 Jake 500 题；“视频长度”是博客对应示例短片的实测长度。

| QA 类型 | 公开题数 | 示例视频长度 | 示例大小 | 预览 |
| --- | --- | --- | --- | --- |
| EntityLog（实体日志） | 125 | 9.067 秒 | 7.77 MB | [100 帧拼图](../../previews/contact_sheets/QA_EntityLog.jpg) |
| EventRecall（事件回忆） | 126 | 9.100 秒 | 7.90 MB | [100 帧拼图](../../previews/contact_sheets/QA_EventRecall.jpg) |
| HabitInsight（习惯洞察） | 61 | 8.867 秒 | 7.57 MB | [100 帧拼图](../../previews/contact_sheets/QA_HabitInsight.jpg) |
| RelationMap（关系网络） | 125 | 12.233 秒 | 10.95 MB | [100 帧拼图](../../previews/contact_sheets/QA_RelationMap.jpg) |
| TaskMaster（任务管理） | 63 | 8.967 秒 | 7.58 MB | [100 帧拼图](../../previews/contact_sheets/QA_TaskMaster.jpg) |

眼动视频另有 **[100 帧拼图](../../previews/contact_sheets/EYE_TRACKING.jpg)**，来自 100 个不同视频；实测为 640×240、20 fps。双眼图像与观察外界的 RGB 视频是两种不同内容。眼动 [全量文件名清单](../../metadata/eye_video_inventory.csv) 和 [100 段实测时长](../../metadata/eye_measured_durations.csv) 已保留。

## 标注与论文结果

公开 QA JSON 含中英文问题、选项、答案、问题时间、证据时间，以及 `need_audio`、`need_name` 等字段。500 道公开题中 202 道标记需要声音。评测中的“证据回溯长度”指问题与历史证据的时间跨度，不等于某一个视频文件的时长。论文描述总共 3,000 题，约 66% 需要回看两小时以上，超过 15% 需要回看一天以上。[官方博客](https://egolife-ai.github.io/blog/)

论文这一版在 Jake 的 500 道 QA 上评测。下面是 Table 6 按证据回溯跨度统计的准确率（%）：Gemini-1.5-Pro 和 EgoGPT 基线按 30 分钟视频分段回答，EgoGPT + EgoRAG 则可跨段检索历史证据。因此这些数值不代表两种基线直接读入了完整多日视频。**以下是论文报告值，本次没有运行模型复现**。[论文 §5 / Table 6](https://arxiv.org/html/2503.03803v3)

| 方法 | <2 小时 | 2–6 小时 | 6–24 小时 | >24 小时 |
| --- | --- | --- | --- | --- |
| Gemini-1.5-Pro | 27.9 | 14.8 | 25.0 | 18.4 |
| EgoGPT | 28.2 | 29.1 | 26.8 | 25.0 |
| EgoGPT + EgoRAG | 27.2 | 35.7 | 38.9 | 35.4 |

对超过 24 小时的证据检索，EgoRAG 相对 EgoGPT 提高 10.4 个百分点；不到 2 小时这一档并未提高。论文 Table 5 的另一个比较将不同模型作为视频描述器接入统一的 EgoRAG 流程，最终答案统一由 GPT-4o 生成：平均分分别为 Gemini-1.5-Pro 36.9、GPT-4o 36.2、LLaVA-OV 30.8、EgoGPT(EgoIT) 33.1、EgoGPT(EgoIT+D1) 36.0，不能与 Table 6 各时间档直接混算。D1 个性化微调利用了第一天数据，设计训练/测试划分时应记录这一点。

## 本地文件与复现

| 本地产物 | 用途 |
| --- | --- |
| [preview_gallery.html](../../preview_gallery.html) | 离线图册，22 组各 100 帧；支持切换类别、放大、上一帧/下一帧与来源链接 |
| `previews/DAY1`–`DAY7` | 每天 100 张，共 700 张，来自 700 个不同片段 |
| `previews/EYE_TRACKING` | 100 张，来自 100 个不同眼动片段 |
| `previews/VIEW_*` | 3 种视角，每种 100 张，来自官网两段拼图演示 |
| `previews/QA_*` | 5 种 QA 类型，每种 100 张，来自官网单个示例短片 |
| `previews/contact_sheets` | 22 张 10×10 拼图；人物组复用每日已有帧 |
| `metadata/` | 全量清单、实测时长、来源、抽帧时间、下载审计、机器可读汇总 |
| `samples/` | 11 个官网小视频，均严格小于 100 MB；共 62.85 MB，最大 10.95 MB |
| `sources/` | 官方网页快照、原始标注 JSON、公开仓库元数据 |
| `scripts/` | 清单采集、受限 Range 读取、抽帧与报告生成脚本 |

主数据和眼动视频只读取所需 HTTP Range，未保存完整 MP4；每个采样源设置 3 MB 读取上限，服务器忽略 Range 时拒绝继续。成功记录的主视频抽帧读取约 152.63 MB，眼动约 10.39 MB。全量下载仅用于上述 11 个已确认小于 100 MB 的官网示例；100 MB 是单文件限制，不是全部网络流量上限。11 个完整小视频已与官网 GitHub 仓库的 Git blob 哈希逐一校验。该流量统计不含网页/标注、探测测试、失败请求和重试，详见 [download_audit.json](../../metadata/download_audit.json) 与 [完整性校验](../../metadata/demo_integrity.json)。

核心 700 个日类别预览共读取 152.626 MB、发出 2,687 个 HTTP Range 请求；按预览任务开始/结束时间估计有效平均带宽约 **2.237 Mbps**。这是应用层 payload 速率，不包含 TCP/TLS 开销；眼动、网站探测和小视频副本的分项记录见 [bandwidth_summary.json](../../metadata/bandwidth_summary.json)。

运行环境：Python 3 + `requests`、`av`、`Pillow`、`beautifulsoup4`、`Markdown`。当前环境解释器为 `/usr/local/bin/python3`。报告和图册可在已有元数据、JPEG、小视频基础上离线重建：

```bash
cd /mnt/workspace/private/ztsong/day-long-mem
/usr/local/bin/python3 scripts/build_overview.py
```

重新联网采集按 `collect_inventory.py` → `build_previews.py` / `eye_previews.py` / `website_previews.py`，以及 `collect_third_inventory.py` 执行，再运行 `build_overview.py`。抽帧脚本支持复用已成功的结果。HF 直连在本环境不可用，文件传输使用 `hf-mirror.com`；报告中的来源仍指向官方仓库。

元信息备注：HF 主数据卡标为 MIT；代码仓库使用 S-Lab License。这里只记录各入口给出的标记，未将代码许可自动套用到全部数据模态。官网列出的 IMU、mmWave、3D 等模态未在本次主视频仓库树中发现对应全量发布，未计入已下载或已核验的数据。

## 第二版短视频展示

本次第二版预览把本地完整副本不超过 **180 秒** 的视频改为直接播放的 video case 卡片，不再为这些短视频重复生成 100 帧图片；较长视频、没有安全本地副本的视频仍保留抽帧预览。当前项目检测到 **11 个**短视频 case，播放文件均小于 100 MB；页面中的时长、大小与 SHA-256 来自本地文件核验。
