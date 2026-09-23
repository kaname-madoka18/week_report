# MAGIC-Video：底层数据、长度与预览

[返回全部论文目录](../../index.html) · [本页图册](preview_gallery.html) · [MM-Lifelong 数据说明](../mm-lifelong/overview.html)

MAGIC-Video 是无需额外训练的图记忆与跨时间叙事链方法，**没有新建原始视频数据集**。论文评测三套问答：EgoLifeQA、Ego-R1 和 MM-Lifelong Month；底层只有 EgoLife 与 MM-Lifelong 两个视频库。此次核对 [论文 v1](https://arxiv.org/html/2605.08271v1)、[官方代码](https://github.com/lijiazheng0917/MAGIC-video)与公开文件列表，日期为 2026-09-22。

| 评测集 | 实际问题范围 | 视频长度与复用关系 |
|---|---|---|
| EgoLifeQA | A1_JAKE 的 500 道四选一题；EL 125、ER 126、HI 61、RM 125、TM 63 | 论文采用 Jake 51.9 小时、7 天；发布原视频通常为 30 秒片段，6,266 个 Jake 文件。按 30 秒估算 52.217 小时只是标称值。 |
| Ego-R1 | 论文第 4.1 节记载 Jake 的 50 道题，分 Manual / Gemini | 完全复用上行视频、记忆图和叙事链；不额外增加 51.9 小时。WorldMM 表 3 使用 300 题，不能混成相同题数。 |
| MM-Lifelong Month | 623 道开放问答、11 类；官方代码列出覆盖这些题的 14 个广播视频 | Month 全库为 23 个广播、论文总播放 105.6 小时、跨约 51 天。14 个验证视频的论文表内时长合计 **274,890 秒 / 76.358 小时**；105.6 小时不是这 14 个文件的实测总和。 |

上述 14 个广播 ID 为 `4, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23`。新发布的 Month 验证 JSON 中引用的视频 ID 与这一列表一致。长度按 [MM-Lifelong 论文逐视频表](../mm-lifelong/metadata/paper_video_timeline.csv)求和；容器实测结果另见其 overview。跨 51 天表示真实时间线的跨度，不表示连续拍了 51×24 小时。

## 原视频与公开文件

- [EgoLife overview](../../overview.html)与[完整预览](../../preview_gallery.html)：本页复用 100 个 Jake 片段帧，未重新下载视频。
- [MM-Lifelong 当前官方数据入口](https://huggingface.co/datasets/MM-Lifelong/MM-Lifelong)：作者当前 ReMA 仓库指向此命名空间；可匿名读取文件目录。MAGIC-Video README 中旧 `CG-Bench/MM-Lifelong` 地址此次返回 401，旧命令中的 `month/*.mp4` 在当前库应对应 `videos/month/*.mp4`。详见 [MM-Lifelong overview](../mm-lifelong/overview.html)。
- [magic-video-artifacts](https://huggingface.co/datasets/jiazhengli7/magic-video-artifacts)公开原论文使用的 captions、OpenIE、语义三元组、topic/event chains 等中间文件。本次 API 清单为 254 个文件、没有 MP4。它是推理中间结果，不能当成新增 254 个视频。
- Day 游戏数据不是本论文的 MM-Lifelong 评测范围。Week 与 EgoLife 又有重叠，汇总多个论文时应去重。

## 论文结果及口径

以下为原论文表 1、表 2 的结果；本次没有训练或运行模型复现。

| 方法 / 论文内比较行 | EgoLifeQA 准确率 | Ego-R1 准确率 | MM-Lifelong Month 得分 |
|---|---:|---:|---:|
| EGAgent + Gemini 2.5 Pro（引用原论文） | 57.5 | — | — |
| WorldMM + Qwen3.5-Flash（MAGIC 论文重跑） | 56.0 | 57.3 | — |
| ReMA + GPT-5（引用原论文） | — | — | 18.6 |
| MAGIC-Video + Qwen3.5-Flash | **67.6** | **64.7** | **24.5** |

摘要中的 +10.1、+7.4、+5.9 分别对应上表不同基线的差值；不能解读成三项都对同一个模型提升。使用同样 Qwen3.5-Flash 回答骨干时，EgoLifeQA 相对该论文重跑的 WorldMM 是 +11.6 点，而不是与 WorldMM 原论文 GPT-5 配置直接对比。

离线处理和在线检索控制使用 gpt-oss-120b，回答使用 Qwen3.5-Flash，最多 5 次搜索。MM-Lifelong 采用 GPT-5 裁判；答案先按 0–5 级评价，再映射为 0、0.5、1，平均后记为百分比。它与四选一准确率不是同一种指标。更换裁判时论文得到不同绝对分数，因此跨论文比较需要同时对齐问题子集、骨干、预处理和裁判。

## 本地交付

[project.json](project.json)记录帧路径与原视频来源；[sources/README.md](sources/README.md)、[sources/paper.html](sources/paper.html)、[sources/hf_info.json](sources/hf_info.json)保留核对依据。本页另共享 MM-Lifelong 的 100 帧 Month 图册：广播 1、14、19、23 各 25 帧。1 号广播不在该论文的 14 个验证视频中，故这组代表底层 Month 数据内容，而非只代表验证子集。预览中的 EgoLife 帧与 MM-Lifelong 帧均复用共享文件；本方法没有另外下载完整大视频。
