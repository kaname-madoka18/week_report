# 论文与数据集目录

打开 [index.html](index.html)，可浏览所有论文、预览与源网页快照，并返回主目录。

共 44 篇论文；主页显示 40 篇；已整理 44 篇；2,938 张独立视频预览图；135 个可播放短视频 case。主页隐藏的文本/长文档记忆条目仍保留子页和 URI。短视频阈值为完整本地副本不超过 180 秒。相同文件被多篇论文复用时只计一次。

| 论文 | arXiv 首次提交 | 引用 / GitHub stars | 当前状态 | 视频长度摘要 | 预览 / 视频 case |
| --- | --- | --- | --- | --- | --- |
| [EgoLife](datasets/egolife/overview.html) | 2025/03/05 | 102 / 464 | CVPR 2025 | 32,001段通常约30秒；按片段数折算266.675小时（非精确总长）；700段实测4.05–30.05秒。 | [800 张图, 11 个视频 case](datasets/egolife/preview_gallery.html) |
| [M3-Agent / M3-Bench：机器人与网络视频](datasets/m3-agent/overview.html) | 2025/08/13 | 78 / 1452 | ICLR 2026 | 机器人100个视频实测56.8346h；单片7.33–57.56分钟；web论文平均27.2分钟。 | [700 张图](datasets/m3-agent/preview_gallery.html) |
| [WorldMM：五个既有长视频基准](datasets/worldmm/overview.html) | 2025/12/02 | 43 / 119 | CVPR 2026 · Highlight | EgoLife通常30秒/片段，覆盖7天；其它评测视频平均27–68.4分钟。 | [100 张图](datasets/worldmm/preview_gallery.html) |
| [MM-Lifelong / ReMA：日、周、月](datasets/mm-lifelong/overview.html) | 2026/03/05 | 8 / 20 | arXiv preprint · 未检索到公开会议状态 | 论文Day23.6h、Week51.9h、Month105.6h；实际时间跨度约1天/7天/51天。 | [300 张图](datasets/mm-lifelong/preview_gallery.html) |
| [EGAgent：EgoLife 与 Video-MME](datasets/egagent/overview.html) | 2026/01/26 | 13 / 61 | ACL 2026 · Long Paper | EgoLife Jake约50h/7天；Video-MME Long每个30–60min；官网演示21.028s与33.992s。 | [100 张图, 2 个视频 case](datasets/egagent/preview_gallery.html) |
| [MAGIC-Video：EgoLife 与 MM-Lifelong](datasets/magic-video/overview.html) | 2026/05/08 | 1 / 8 | arXiv preprint · 未检索到公开会议状态 | Jake论文口径51.9h/7天；Month全库105.6h/51天，验证题覆盖14个广播约76.36h。 | [200 张图](datasets/magic-video/preview_gallery.html) |
| [Ella — Embodied Social Agents with Lifelong Memory](datasets/ella/overview.html) | 2025/06/30 | 4 / 18 | ICLR 2026 · under review | 仿真熟悉阶段9h，Influence Battle约6h，Leadership Quest3h；官网MP4实测63.833s /101.5s /123.4s，teaser未核验。 | [328 张图](datasets/ella/preview_gallery.html) |
| [EgoMem — Full-duplex Lifelong Memory Agent](datasets/egomem/overview.html) | 2025/09/15 | 3 / — | ICLR 2026 · under review | 训练 token stream 最长 8,192 步 / 12.5 Hz ≈ 655.36 秒；论文演示约 2 分钟；源视频总时长未公开。 | [打开图册](datasets/egomem/preview_gallery.html) |
| [SuperMemory-VQA](datasets/supermemory-vqa/overview.html) | 未取得 | — / 6 | NeurIPS 2026 Datasets & Benchmarks Track · under review | 总计 52.9 小时（仓库声明）；小时级上下文、跨最多两周；单个视频文件时长未公开。 | [打开图册](datasets/supermemory-vqa/preview_gallery.html) |
| [SMB — Spatial Memory Benchmark / LTE](datasets/smb/overview.html) | 2026/09/04 | 0 / — | arXiv preprint · 未检索到公开会议状态 | 底层 EgoLife 跨 7 天；SMB lookback 2/6/12/24 小时；独立使用视频总时长未公布；公开底层切片通常 30 秒。 | [100 张图](datasets/smb/preview_gallery.html) |
| [HALO / ReMemBench](datasets/halo/overview.html) | 2026/06/23 | 6 / 7 | RSS 2026 · accepted | 任务需回忆最长8分钟；9段官网演示的精确MP4播放时长见CSV（部分4×加速，不能直接当作原始轨迹长度）。 | [9 个视频 case](datasets/halo/preview_gallery.html) |
| [MemER: Scaling Up Memory for Robot Control via Experience Retrieval](datasets/memer/overview.html) | 2025/10/23 | 68 / 60 | ICLR 2026 | 本地完整保存 6 个官网 MP4，实测播放时长约 17.23–62.67 秒；论文任务本身需要数分钟的长时操作，视频是官网精选演示，不代表训练集的全部 episode。 | [6 个视频 case](datasets/memer/preview_gallery.html) |
| [Break Out the Silverware / Stored Household Item Challenge](datasets/silverware/overview.html) | 2025/12/25 | 0 / — | AAMAS 2026 | 不适用：数据单位是静态 RGB 图像，没有视频或 episode 时长。 | [3 张图](datasets/silverware/preview_gallery.html) |
| [FetchBench](datasets/fetchbench/overview.html) | 2024/06/17 | 11 / 35 | CoRL 2024 | 轨迹库逐条秒数未公开核验；控制步上限与算法计算时间不能等同 MP4 时长。 | [3 张图](datasets/fetchbench/preview_gallery.html) |
| [Visual Room Rearrangement / RoomR](datasets/roomr/overview.html) | 2021/03/30 | 159 / 129 | CVPR 2021 | 论文 walkthrough ≤250 动作；当前配置 walkthrough 250 / unshuffle 500 步，无固定视频秒数。 | [4 张图](datasets/roomr/preview_gallery.html) |
| [BEHAVIOR-1K / 2026 Challenge Demonstrations](datasets/behavior-1k/overview.html) | 2024/03/14 | 180 / 1717 | CoRL 2023 | 当前 20,000 条 episode：1952.93 小时，平均 351.53 秒，中位数 335.03 秒，范围 4.93–1525.37 秒（meta length / 30fps）。 | [600 张图](datasets/behavior-1k/preview_gallery.html) |
| [RoboCasa365](datasets/robocasa365/overview.html) | 2026/03/04 | 76 / 1751 | ICLR 2026 | 论文：多数人工示范10–60秒，部分超过3分钟。官网365任务的取整episode中位数：原子任务5–46秒、复合任务10–166秒；不是所有episode的最短/最长范围。 | [10 个视频 case](datasets/robocasa365/preview_gallery.html) |
| [HD-EPIC](datasets/hd-epic/overview.html) | 2025/02/06 | 110 / 44 | CVPR 2025 | 156 段共 41.3167h；单段 9.7 秒–74.7522 分钟，均值15.8910分钟；官方完整时长CSV。 | [110 张图](datasets/hd-epic/preview_gallery.html) |
| [Ego4D — Episodic Memory](datasets/ego4d/overview.html) | 2021/10/13 | 2057 / 141 | CVPR 2022 | 原论文全库 3,670h；NLQ 227.1h / 单clip均值8.2min；VQ2D 432.9h / 6.1min；MQ 328.7h / 7.9min。 | [12 个视频 case](datasets/ego4d/preview_gallery.html) |
| [RMBench / Mem-0](datasets/rmbench/overview.html) | 2026-03-01 | 40 / 217 | Under review · arXiv preprint | 18段官方发布评测录像实测25–350秒：16段25–150秒直接播放，2段350秒各抽50帧；全量训练episode的秒数分布未核验。 | [103 张图, 16 个视频 case](datasets/rmbench/preview_gallery.html) |
| [RoboDojo](datasets/robodojo/overview.html) | 2026-07-05 | 19 / 611 | arXiv preprint · official benchmark release | 论文仿真训练3500条/20.66小时，平均21.25秒；真实1800条/17.91小时，平均35.82秒（25Hz）。18个本地官网演示实测6.72–65.72秒，直接播放。 | [1 张图, 18 个视频 case](datasets/robodojo/preview_gallery.html) |
| [VideoWebArena：视频记忆与网页智能体基准](datasets/videowebarena/overview.html) | 2024-10-24 | 42 / 14 | ICLR 2025 | 74 个教程总长 3:48:19；单视频最短 1:16、最长 10:41、平均 3:05（论文表2）。 | [1 张图](datasets/videowebarena/preview_gallery.html) |
| [MMLongBench：长上下文图文评测基准](datasets/mmlongbench/overview.html) | 2025-05-15 | 28 / 182 | NeurIPS 2025 · Spotlight | 非视频数据：输入按 8K、16K、32K、64K、128K token 五档组织，图像与文本交错。视频秒数不适用。 | [3 张图](datasets/mmlongbench/preview_gallery.html) |
| [CG-Bench：长视频证据检索与问答基准](datasets/cg-bench/overview.html) | 2024-12-16 | 83 / 22 | ICLR 2025 | 单视频 10–80 分钟；平均约 1,624.4 秒（27.1 分钟）；20–30 分钟最常见；证据片段平均 19.24 秒。 | [3 张图](datasets/cg-bench/preview_gallery.html) |
| [LongVALE：音视频语言事件基准](datasets/longvale/overview.html) | 2024-11-29 | 60 / 62 | CVPR 2025 | 训练集 473.8 小时、7,240 视频；评测集 75.6 小时、1,171 视频。总549.4小时，按官方总量计算平均约235.2秒/视频。 | [102 张图, 1 个视频 case](datasets/longvale/preview_gallery.html) |
| [Video-MMMU：视频知识获取与迁移基准](datasets/video-mmmu/overview.html) | 2025-01-23 | 233 / 73 | ACL 2026 · Main | 数据集视频平均 506.2 秒（约8分26秒）；本页短case为官网剪辑，其实测时长单独标注。 | [6 个视频 case](datasets/video-mmmu/preview_gallery.html) |
| [VSI-Bench：视觉空间记忆基准](datasets/vsi-bench/overview.html) | 2024-12-18 | 756 / 743 | CVPR 2025 · Oral | 288个评测视频；本文本未取得可直接核验的统一平均时长。下方官网case由PyAV实测，官方分布图保留其源集合统计口径，不据图反推288视频的平均长度。 | [1 张图, 2 个视频 case](datasets/vsi-bench/preview_gallery.html) |
| [VRBench：长叙事视频多步推理基准](datasets/vrbench/overview.html) | 2025-06-12 | 28 / 28 | ICCV 2025 | 平均约1.6小时/视频；视频筛选设最短20分钟；题目依赖分散在时间线上的多段证据。 | [1 张图](datasets/vrbench/preview_gallery.html) |
| [Video-MMLU：短视频知识理解评测](datasets/video-mmlu/overview.html) | 2025-04-20 | 43 / 34 | ICCV 2025 Workshop · Findings | 单视频10–240秒；平均109秒；82.2%不超过180秒。因此本页优先直接播放短case。 | [100 张图, 2 个视频 case](datasets/video-mmlu/preview_gallery.html) |
| [LV-Haystack / T*：长视频关键帧检索基准](datasets/lv-haystack/overview.html) | 2025-04-03 | 99 / 98 | CVPR 2025 | 数据总长480小时；来自Ego4D与长视频问答源，单视频长度不一。官网演示视频长度另行实测，不能替代数据集原视频长度。 | [1 个视频 case](datasets/lv-haystack/preview_gallery.html) |
| [Mem-Gallery：长期多模态会话记忆基准](datasets/mem-gallery/overview.html) | 2026-01-07 | 39 / 110 | ACL 2026 · Main | 非视频数据：以跨会话图文历史衡量记忆跨度，共240会话、3,962轮；视频秒数不适用。 | [4 张图](datasets/mem-gallery/preview_gallery.html) |
| [MIKASA-Robo: Memory Benchmark for Complex Robot Tasks](datasets/mikasa-robo/overview.html) | 2025-02-14 | 37 / 139 | ICLR 2026 | 官方 GIF 转码案例实测播放时长 0.50–1.33 秒；VLA 任务本身仍按 Short/Medium/Long 控制步数定义。 | [10 个视频 case](datasets/mikasa-robo/preview_gallery.html) |
| [EmbodiedEval](datasets/embodiedeval/overview.html) | 2025-01-21 | 55 / 60 | CVPR 2026 Workshop · VisScale | 交互式仿真任务，无统一原视频时长；轨迹随智能体行为变化。子页面记录每段官方演示的实测播放秒数。 本地6段官网案例播放时长 3.00–15.00秒。 专家示范平均10.72步（论文），不换算为固定秒数。 | [6 个视频 case](datasets/embodiedeval/preview_gallery.html) |
| [LSDBench](datasets/lsdbench/overview.html) | 2025-03-16 | 21 / 29 | ICCV 2025 | 原视频 20.32–115.32 分钟，平均 45.39 分钟；目标片段平均 3 分钟（官方 README）。 | [1 张图](datasets/lsdbench/preview_gallery.html) |
| [StreamingBench](datasets/streamingbench/overview.html) | 2024-11-06 | 128 / 172 | ICASSP 2026 | 原视频 3 秒–24 分钟（论文数据统计）；另外测试查询前 60 秒上下文。官网演示长度另行实测，不能当作数据集时长。 本地1段官网案例播放时长 12.30–12.30秒。 | [1 个视频 case](datasets/streamingbench/preview_gallery.html) |
| [OVO-Bench](datasets/ovo-bench/overview.html) | 2025-01-09 | 135 / 164 | CVPR 2025 | 正文描述主体视频为数分钟至半小时；平均查询时点 428.89 秒。附录 CRR 子任务平均原视频长度 6,857 秒（约114.3分钟），不能将全库统一写成≤30分钟。 | [5 张图](datasets/ovo-bench/preview_gallery.html) |
| [HourVideo](datasets/hourvideo/overview.html) | 2024-11-07 | 140 / 145 | NeurIPS 2024 · Datasets and Benchmarks | 原视频 20–120 分钟；开发集 50 段共39.3小时。官网示例是压缩/剪辑后的问答演示，播放秒数单列。 本地6段官网案例播放时长 26.07–29.07秒。 | [6 个视频 case](datasets/hourvideo/preview_gallery.html) |
| [LongDocURL](datasets/longdocurl/overview.html) | 2024-12-24 | 87 / 44 | ACL 2025 · Main | 不适用视频时长：输入是多页PDF与图表/文本/布局元素；规模以页数及上下文长度计。 | [5 张图](datasets/longdocurl/preview_gallery.html) |
| [MMDocIR](datasets/mmdocir/overview.html) | 2025-01-15 | 55 / 38 | EMNLP 2025 · Main | 不适用视频时长：输入是文档页图像、文本、图表和布局，按页及布局元素检索。 | [3 张图](datasets/mmdocir/preview_gallery.html) |
| [M3DocVQA / M3DocRAG](datasets/m3docvqa/overview.html) | 2024-11-07 | 128 / 70 | ICCV 2025 Workshop · Findings（M3DocVQA） | 不适用视频时长：内容为PDF页面和文档证据，范围以文档数/页数描述。 | [3 张图](datasets/m3docvqa/preview_gallery.html) |
| [Neptune](datasets/neptune/overview.html) | 2024-12-12 | 27 / 99 | arXiv 预印本 | 单视频16秒–15分钟，平均2.5分钟；约100小时总量。超过12%视频长于5分钟、超过25%长于3分钟（论文统计）。 | [2 张图](datasets/neptune/preview_gallery.html) |
| [RoboMemArena: A Comprehensive and Challenging Robotic Memory Benchmark](datasets/robomemarena/overview.html) | 2026/05/11 | 17 / 196 | arXiv preprint · official benchmark release | 官方任务视频实测 23.60–90.30 秒；展示视频是任务演示播放时长，不等于仿真轨迹的控制步数。 | [12 个视频 case](datasets/robomemarena/preview_gallery.html) |
| [eMEM-Bench / eMEM: A Hybrid Spatio-Temporal Memory System for Embodied Agents](datasets/emem-bench/overview.html) | 2026/06/02 | 1 / 14 | arXiv preprint · official code released | 官方 README 按 AI2-THOR 场景与 QA 数量描述 benchmark；当前公开仓库未提供可直接下载的官方视频 clip，因此不虚构播放时长。 | [1 张图](datasets/emem-bench/preview_gallery.html) |
| [FindingDory: A Benchmark to Evaluate Memory in Embodied Agents](datasets/findingdory/overview.html) | 2025/06/18 | 12 / 10 | NeurIPS 2025 Workshop · SpaVLE | 官方示例 episode 实测 29.20–59.00 秒；任务轨迹的上下文长度由 Habitat episode 与记忆阶段定义。 | [4 个视频 case](datasets/findingdory/preview_gallery.html) |

引用数的来源与抓取时间保存在 [paper_metadata.json](metadata/paper_metadata.json)；Semantic Scholar 不可用时使用 arXiv.gg index，并在对应子页保留来源链接。视频帧、静态图像、官网演示与复用预览的具体范围见各项目说明。无法访问或没有发布媒体的项目保留原因，不生成替代画面。

[全部 HTML URI（CSV）](metadata/all_html_uris.csv) · [目录 JSON](metadata/catalog.json)

重新生成：先对变更项目运行 `scripts/render_dataset.py datasets/<slug>`，再运行 `scripts/build_catalog.py`。
