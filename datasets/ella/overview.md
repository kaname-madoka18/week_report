# Ella 数据与预览 overview

核查日期：2026-09-22；论文内容按 arXiv v1 快照整理。对应 [Ella: Embodied Social Agents with Lifelong Memory](https://arxiv.org/abs/2506.24019)。[项目页](https://umass-embodied-agi.github.io/Ella/)标题也写作 Embodied Lifelong Learning Agents with Non-Parametric Memory；均为同一作者项目。[代码](https://github.com/UMass-Embodied-AGI/Ella)在 Virtual Community 仿真环境中运行。

## 数据是什么、长度是什么

Ella 是具身社会智能体及记忆系统，不是新拍摄的长视频语料库。论文在纽约、伦敦、底特律风格的 **3 个虚拟社区**评估，每个有 **15 个模拟人物**；人物名是仿真角色，不是这些真实人物的录像。

| 量 | 论文含义 |
|---|---|
| 场景规模 | 每个社区约600m×600m |
| 观察 | 512×512 RGB + depth、位姿、时间、场所、对话及持有物等状态 |
| 第一阶段 | 在社区中经历9小时仿真日常生活，建立长期记忆 |
| Influence Battle | 组织6小时后的聚会，测邀请影响力；聚会计入30分钟出席窗口 |
| Leadership Quest | 3小时内分配购买任务并返回，测领导和合作 |
| 计算时间 | 附录称第一阶段每社区约20小时墙钟；每个第二阶段任务约10小时墙钟，单A100 |
| 固定视频总小时 / 逐episode录像清单 | 未以独立视频数据集形式公开，不能用15×9h推算已发布视频总长 |

9h是仿真经历时间，20h是运行计算时间；下表是压缩剪辑后的演示播放时间，三种时间不能互相替代。

## 官网视频时长与读取情况

| 官网 MP4 | 实测播放时长 | 官方文件大小 | 读取方式 |
|---|---:|---:|---|
| method.mp4 | 63.833秒 | 13,266,291 bytes | 仅HTTP Range |
| influence_battle.mp4 | 101.500秒 | 66,574,375 bytes | 仅HTTP Range，100帧 |
| leadership_quest.mp4 | 123.400秒 | 102,232,940 bytes | **超过100MB，仅HTTP Range** |
| teaser.mp4 | 未核验 | 85,150,490 bytes | 元数据读取不稳定，未保存完整文件 |

前三个时长来自 PyAV 在有限 Range 数据中的 video stream metadata。所有MP4都没有完整保存。相应[清单](metadata/video_inventory.csv)把未知时长留空；未凭文件大小估算。

## 原论文主要结果

下表为三社区平均；本次没有运行仿真、复现模型或重新评估。

| 方法 | Influence Battle 出席率 | Leadership Quest 完成率 |
|---|---:|---:|
| CoELA | 24.5% | 3.8% |
| Generative Agents | 33.3% | 8.3% |
| Ella | **53.4%** | **32.5%** |
| Ella + Oracle Perception | 57.8% | 33.2% |

Ella/CoELA 使用 GPT-4o-2024-11-20，Generative Agents 使用 GPT-3.5-Turbo-0125；Oracle Perception 版本使用真值2D分割。比较包含骨干差异和感知设置差异，不能只归因于记忆结构。出席率和任务物品完成率也不是视频问答准确率。

## 官方数据预览

官网 `gh-pages` 树含 **15,435 张原生 RGB 仿真观察图**（15个角色各1,029张，文件以仿真step编号），供可交互的日常生活 demo 使用。本次跨角色、跨step选择 **100张不同源内容的观察图**；每张原PNG大小和Git blob SHA1均核对，转为JPG方便浏览。它们是有效的原生视觉观察数据，但**不是从视频解码的帧**。时间步到实际秒的映射未验证，因此不填写视频秒数。

另外保存100帧方法讲解动画、100帧Influence Battle任务演示（30–40秒区间），以及Leadership Quest任务演示在Range读取中成功解码的有限帧。Leadership Quest没有完成100帧；精确采样日志中断的帧不给伪精确时间戳。

当前图册：100张原生仿真观察图 + 228张MP4帧。[离线图册](preview_gallery.html)按图像与视频来源分别标注；[观察来源清单](metadata/observation_manifest.json)、[演示时长](metadata/final_media_manifest.json)、[下载记录](metadata/download_audit.json)。

来源快照：[论文](sources/paper.html)、[官网](sources/home.html)、[代码README](sources/README.md)、[官网完整文件树](sources/site_tree.json)。
