# MM-Lifelong / ReMA：日、周、月视频 overview

[返回全部论文目录](../../catalog.html) · [日 / 周 / 月预览](preview_gallery.html) · [EgoLife 完整说明](../../overview.html)

论文新建 **MM-Lifelong** 问答与时间证据基准，覆盖游戏历程、第一视角生活、直播三种时间尺度；**ReMA** 是配套的递归记忆智能体。Week 视频复用 EgoLife 的 Jake，不能把它作为另一套新拍视频重复统计。本次比对两仓库全部 6,266 个 Week 文件，文件名、大小和 LFS SHA-256 均一致（[核对结果](metadata/egolife_identity_check.json)）。核对日期：2026-09-22。

| 类别 | 数据主体 | 论文播放时长 | 现实时间跨度 | 原始 / 当前发布单文件结构 | 问题拆分 |
|---|---|---:|---|---|---|
| Day / Gamer’s Journey | 游戏人物的一次完整游戏历程 | 23.6 小时 | 约 24 小时的连续叙事 | 论文列 31 段，每段 821–4,297 秒；当前 HF 合并成 `videos/day/0.mp4`，8.695 GB | test 200 |
| Week / Egocentric Life | EgoLife A1_JAKE | 51.9 小时 | 约 7 天 | 当前发布 6,266 个通常 30 秒的 MP4 片段 | test 200 |
| Month / Live Stream | 同一主播跨城市和社交活动 | 105.6 小时 | 约 51 天 | 23 个广播 MP4；论文单段 2,390–42,900 秒，即约 39.8 分钟–11.92 小时 | train 266 / val 623 |
| 合计 | 三个主体时间流 | **181.1 小时** | 不将不同主体拼成同一真实时间线 | **6,290 个发布 MP4、203.061 GB** | **1,289 题** |

来源：[论文表 1、2、9、10](https://arxiv.org/html/2603.05484v1)、[当前官方 HF 数据卡](https://huggingface.co/datasets/MM-Lifelong/MM-Lifelong)。HF 文件数量和大小来自本次 API 清单，论文的“3 个样本/流”与发布的 6,290 个文件不是同一计数单位。

## 时长核对

[论文逐视频时间表 CSV](metadata/paper_video_timeline.csv)保留 Day 31 段、Month 23 个广播和 Week 每日起止时间。按论文的时长列求和：Day 为 **84,914 秒 / 23.587 小时**，Month 为 **380,301 秒 / 105.639 小时**。这些是公开表格值，本次另对 Day/Month 容器做 HTTP Range 探测，实测值及失败项在 [发布视频清单 CSV](metadata/video_inventory.csv)、[Range 清单](metadata/range_manifest.json)，不把表格值冒充逐文件实测值。

Week 附录列出的每日开始到结束时间含拍摄空档：七天日内时间跨度合计约 **79.621 小时**，不能将它当作 51.9 小时的实际播放时长。当前 6,266 段×30 秒得到 **52.217 小时**只是标称估算，片尾短段等使其不等于实际总和；更完整的长度口径见 [EgoLife overview](../../overview.html)。

现已完成 **Day + Month 全部 24 个文件的时长原子实测**：Day 为 **84,912.696313 秒 / 23.586860 小时**，Month 23 个视频合计 **380,303.824041 秒 / 105.639951 小时**。读取 `mvhd` 和视频轨 `mdhd`，每个文件约 49–63 KB，不需要下载庞大的完整音视频索引。早期常规探测的超时/预算失败保存在 [range_attempts.json](metadata/range_attempts.json)，最终已由 [轻量时长探测](metadata/sparse_duration_probes.json)补齐。

## 100 帧预览与访问状态

Day 从合并原视频开头约 **0.133–59.533 秒**的 1,800 个真实解码帧中等间隔取 **100 帧**，只代表开头约 1 分钟；Month 在 **1、14、19、23** 号广播的中点附近分别取 **25 帧**，合计 **100 帧**；Week 复用跨 7 天的 **100 个 Jake 片段帧**。每帧都记录文件 URL、源视频总长和实际帧时间。大于 100 MB 的 Day / Month 源文件只通过带预算的 HTTP Range 读取，没有保存完整视频。三个类别均已完成 100 帧，共 300 个帧引用，其中新提取 200 张、复用 100 张。Day 的尾部索引原有 127.5 MB；本次直接读取必要视频样本表和编码数据，只用了约 8.35 MB Range 数据便获得开头预览。

**使用作者当前仓库指向的 [MM-Lifelong/MM-Lifelong](https://huggingface.co/datasets/MM-Lifelong/MM-Lifelong)。** 此次 API 返回 `gated=false`，文件和四份问答 JSON 均可匿名访问。原论文以及部分衍生仓库仍指向 `CG-Bench/MM-Lifelong`，该旧地址此次返回 401；这不代表当前数据未公开。新库路径有 `videos/` 前缀，不能原样沿用旧下载命令。网站的自动数据查看器存在字段不一致错误，但四份原始 JSON 可读取，已保存本地。

原始来源列表见 [sources/video_list.txt](sources/video_list.txt)：Day 为 Bilibili 游戏攻略，Week 为 EgoLife，Month 为 YouTube 直播。当前清单有 22 个 YouTube 地址，而发布目录有 23 个广播文件；本页按发布 MP4 统计，未假设一条网页 URL 一定对应一个文件。当前数据卡将用途限制为学术研究，代码和源视频权利范围应分别查看 [当前数据卡快照](sources/hf_current_README.md)。

## 问题与结果

1,289 道题附带 1,810 段证据区间，涵盖计数、因果、实体、时间、事件、语言内容回忆、幻觉判断、属性、社交、状态变化、事件追踪等 11 类。267 道题的证据跨度在 1–10 小时，127 道超过 10 小时。Month 按证据时间排序，前 30% 训练、后 70% 验证；Day/Week 全部留作测试，从而分离时间偏移与领域偏移。四个 split 的实际 JSON 行数已核对为 266 / 623 / 200 / 200。

下表为 [论文表 4](https://arxiv.org/html/2603.05484v1)报告值，没有在本机复现模型。

| 方法 | Month val Acc | Month Ref@300 | Week test Acc | Week Ref@300 | Day test Acc | Day Ref@300 |
|---|---:|---:|---:|---:|---:|---:|
| GPT-5，均匀 50 帧 | 14.87 | 0.44 | 15.00 | 0.92 | 15.25 | 0.53 |
| ReMA | **18.62** | **15.46** | **18.82** | **16.37** | **16.75** | **11.51** |
| 人类 | 80.4 | 33.5 | 95.6 | 42.4 | 99.2 | 49.8 |

Acc 为 GPT-5 对开放答案的评价，原始 0–5 级分数映射到 0 / 0.5 / 1 再平均；不是四选一题的准确率。Ref@300 把时间线按 300 秒分桶，比较预测证据与标准证据的集合交并比。ReMA 可调用视频检查和记忆搜索，表中 `Full` 表示访问整条视频流，不代表把所有帧一次装进上下文。5 分钟等设置是记忆更新粒度，不是数据集视频文件长度。

## 本地文件

[官方代码](https://github.com/cg1177/Recursive-Multimodal-Agent) · [论文](https://arxiv.org/abs/2603.05484) · [来源快照](sources/README.md)。

- [metadata/video_inventory.csv](metadata/video_inventory.csv)：6,290 个视频文件的大小、来源和已知时长依据。
- [metadata/paper_video_timeline.csv](metadata/paper_video_timeline.csv)：论文逐段时间表，特别区分 Week 日内时钟跨度与播放时长。
- [metadata/range_manifest.json](metadata/range_manifest.json)、[project.json](project.json)：实测与真实帧来源。
- [MAGIC-Video](../magic-video/overview.html)：使用 Month 的 623 道验证题；其覆盖的 14 个广播是 Month 的一个子集。
