# M3-Agent / M3-Bench：数据集 overview

[返回全部论文目录](../../index.html) · [700 帧场景图册](preview_gallery.html)

这篇论文提出带长期记忆的多模态智能体 **M3-Agent**，并新建问答基准 **M3-Bench**。后者包含机器人视角情景视频与网络视频两个子集；另在 Video-MME Long 上评测。机器人子集由演员按脚本模拟服务机器人及人与机器人的互动，以头戴相机记录，并非真实机器人自主执行任务的轨迹。核对日期：2026-09-22。

| 数据部分 | 视频数 / QA 数 | 单视频长度 | 总播放长度与发布方式 |
|---|---|---|---|
| M3-Bench-robot | 100 / 1,276 | 论文平均 2,039.9 秒，约 34 分钟；容器实测见下方明细 | 由论文舍入均值估计约 56.664 小时；100 个 MP4 公开，125.700 GB |
| M3-Bench-web | 920 / 3,214 | 论文平均 1,630.7 秒，约 27.2 分钟 | 由论文舍入均值估计约 416.734 小时；官方发布 920 个 YouTube 来源链接，未在本仓库托管 MP4 |
| 合计 M3-Bench | 1,020 / 4,490 | 包含声音及开放式问答 | 上述估计合计约 473.398 小时；不是一天连续记录 |
| Video-MME Long（外部评测） | 300 / 900 | 30–60 分钟 | 独立已有基准，不能计入 M3-Bench 新采集视频量 |

数量由 [官方 robot.json](sources/robot.json)、[web.json](sources/web.json)逐项统计；均值来自 [论文表 2](https://arxiv.org/html/2508.09736)。**论文均值×文件数是估算，不是实测总时长。** 本次另外通过 HTTP Range 读取 MP4 容器信息，提供 [逐文件时长 CSV](metadata/video_inventory.csv)与[探测结果](metadata/video_durations.json)。脚本里的 30 秒切分是记忆构建窗口，不是原视频只有 30 秒。

本次已完成 **100 / 100 个 robot 视频的容器时长实测**：合计 **204,604.533 秒 / 56.834593 小时**，单个最短 **440.067 秒（7.334 分钟）**、最长 **3,453.533 秒（57.559 分钟）**。这与由论文舍入均值估计的 56.664 小时略有差异，因此文件选择和存储规划请使用实测清单。100 个视频都是 30 FPS；91 个为 1280×720，其余 9 个为约 1578–1580×720。

## 视频类别与 100 帧预览

robot 按官方文件名前缀分为 7 个场景。每个场景选其最小文件作为代表，在视频约 10%、35%、60%、85% 四个位置，各取 25 个实际解码帧（约 0.1 秒间隔），总计 100 帧。这样能观察同一场景在不同时间的内容，但不代表该类别全部视频的随机样本，也不是 100 个独立视频。

| 场景 | 视频数量 | 代表视频 | 实测时长 |
|---|---:|---|---:|
| 卧室 bedroom | 12 | bedroom_04 | 1,650.633 秒 / 27.511 分钟 |
| 健身房 gym | 4 | gym_01 | 1,883.300 秒 / 31.388 分钟 |
| 厨房 kitchen | 23 | kitchen_15 | 1,845.000 秒 / 30.750 分钟 |
| 客厅 living_room | 24 | living_room_20 | 1,999.667 秒 / 33.328 分钟 |
| 会议室 meeting_room | 6 | meeting_room_01 | 1,820.333 秒 / 30.339 分钟 |
| 办公室 office | 8 | office_05 | 1,872.333 秒 / 31.206 分钟 |
| 书房 study | 23 | study_17 | 1,875.133 秒 / 31.252 分钟 |

每帧的源文件、时刻和源文件总长度保存在 [project.json](project.json)、[抽帧清单](metadata/robot_preview_manifest.json)。本次 **没有保存任何完整 robot MP4**；最小原视频为 298,983,969 字节，最大为 3,362,278,483 字节，均超过 100 MB，所以全部使用有上限的 HTTP Range 读取。

web 的官方统计包含 46 种视频内容，但当前 `web.json` 没有逐视频内容类别字段；其中的 `type` 是问题推理类别，不能直接当作视频类别。此次没有取得这些 YouTube 视频可用的匿名媒体直链，未下载 web 全视频、也未生成声称覆盖 46 类的帧。可从 [920 个 web 来源清单](metadata/web_sources.csv)跳转到原视频；[官方示例 1](https://www.youtube.com/watch?v=7W0gRqCRMZQ)、[示例 2](https://www.youtube.com/watch?v=Efk3K4epEzg)、[示例 3](https://www.youtube.com/watch?v=6Unxpxy-Ct4)保留作为在线播放入口。

## 标注、模型与结果

五种问题能力为多证据推理、多跳推理、跨模态推理、人物理解、一般知识提取；单题可以有多个标签。robot JSON 将“多证据”标签写作 `Multi-Detail Reasoning`，web 使用 `Multi-Evidence Reasoning`，汇总标签时需要显式对齐。机器人问题还包含提问时刻、参考推理等字段；提问时刻应在机器人行动/回答前，以免看到答案。

下表采用本次取得的 [arXiv v4（2025-10-09）表 5](https://arxiv.org/html/2508.09736)；本次没有模型复现。

| 方法 | M3-Bench-robot | M3-Bench-web | Video-MME Long |
|---|---:|---:|---:|
| Gemini-GPT4o-Hybrid | 24.0 | 41.2 | 56.5 |
| M3-Agent | **30.7** | **48.9** | **61.8** |
| 差值（百分点） | +6.7 | +7.7 | +5.3 |

仓库 README 摘要仍写 robot 提升 +8.2，本次以所取得论文表 5 的 30.7−24.0=6.7 为准，保留两份快照便于复核。M3-Bench 是开放式 QA，使用 GPT-4o 判断答案正确性；Video-MME 使用官方多选题评价。M3-Agent 分别训练 Qwen2.5-Omni-7B 记忆模型和 Qwen3-32B 控制模型，后者使用强化学习；强基线则由 Gemini-1.5-Pro 建记忆、GPT-4o 控制。论文另外使用 500 个内部训练视频、2,736 个 QA，它们不能混入公开 M3-Bench 的 1,020 个测试视频。

## 来源与复用

[官方主页](https://m3-agent.github.io/) · [官方代码](https://github.com/ByteDance-Seed/m3-agent) · [公开数据](https://huggingface.co/datasets/ByteDance-Seed/M3-Bench)。数据仓库还发布 intermediate outputs 与 memory graphs；它们是衍生文件，不是更多原始视频。

[sources/hf_info.json](sources/hf_info.json)保存带大小与固定 revision 的目录；[sources/paper.html](sources/paper.html)保存论文快照。[scripts/sample_robot.py](scripts/sample_robot.py)记录完整抽帧和时长探测方式，采用有字节预算的 Range 读取，服务端若不返回 206 则终止。图册的 700 帧均为源视频解码 JPEG，没有生成图片或重复一帧凑数。
