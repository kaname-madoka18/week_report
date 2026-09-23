# SMB / Linguistic Trajectory Encoding overview

对应 [Linguistic Trajectory Encoding for Efficient Long-Horizon Spatial Memory in Embodied Agents](https://arxiv.org/abs/2609.04802)（v1，2026-09-04）。核查日期：2026-09-22。论文提出 LTE 记忆表示，并基于 **EgoLife 已有录像**构建 Spatial Memory Benchmark；不是新采集一套 300 小时视频。

## 数据规模与长度

| 项目 | 规模 / 长度 |
|---|---|
| Semantic Trajectory Retrieval（STR） | 300 条查询，232 个物体实例，检索符合运动状态/轨迹和时空条件的物体 |
| Long-Horizon Object Retrieval（LOR） | 300 条查询，找物体最后出现位置 |
| LOR 回溯窗口 | 2、6、12、24 小时各 75 条查询；120 条含空间提示 |
| 底层录像 | EgoLife，6 人，7 天，同住一屋；Aria RGB 1408×1408 |
| 底层单文件长度 | 公开 EgoLife 切片通常为 30 秒；此前抽测有短尾片段 |
| SMB 单独采用的视频数量与总时长 | 论文未给可核对文件清单，未验证；2–24h 是查询回溯跨度，不是固定文件长度 |

论文采用 EgoLife 约 300 小时的摘要口径；本地 [EgoLife overview](../../overview.html) 已说明原论文表格 266 小时、公开 32,001 段×30秒为 266.675 标称小时之间的关系。不要将六人的累计小时理解为一个人的连续历史。标注由三位 annotator 完成：STR 共约 60 人时，LOR 共约 45 人时。

## 结果与评测条件

原论文 Table 3 的成功条件为：检索帧位于目标真值时间跨度，且物体框 IoU≥0.3。以下为论文值，本次未复现。

| 方法 | STR success % | LOR success % |
|---|---:|---:|
| Qwen3-VL-8B + Grounding-DINO | 21.5 | 25.1 |
| Qwen3-VL-235B + Grounding-DINO | 31.9 | 34.4 |
| KFMem（3D-Mem 风格） | 19.8 | 33.8 |
| VideoAgent | 24.7 | 30.5 |
| LTE 系统 | **45.3** | **48.7** |

VLM 基线查询时按 2 秒窗口扫描；LTE 先离线建立物体轨迹、语言描述及索引。A800 上 24h 输入的在线查询为 0.43 秒，但附录 C 同时报告离线构建约 68.4 GPU 工作小时（顺序）/约 42 小时（并行流水线）；**0.43 秒并不包含从零处理 24 小时视频**。26.1× 压缩比仅比较 LTE 轨迹存储与稠密轨迹存储，不是完整视频压缩比。消融中去除 LTE 的 LOR 仍为 48.7%，表明该项成绩不能单独归因于 LTE。

## 发布与真实预览

本次核查官方 arXiv 正文及附录，仅发现底层 EgoLife 项目链接，没有找到作者发布的 SMB 标注、逐视频分割清单或官方代码仓库。因此未声称已下载 SMB benchmark。

[本项目图册](preview_gallery.html)提供 **100 张现有 EgoLife 真实视频帧**，跨七天取样，只用相对路径引用已有 JPG，不重复下载。这些帧说明底层拍摄视角与场景，**不是 SMB 查询的证据帧，也不能标成 STR/LOR 已标注样本**。两个任务共用一个源数据预览分组。

来源：[论文快照](sources/paper.html)、[EgoLife 官网](https://egolife-ai.github.io/)、[EgoLife 完整本地图册](../../preview_gallery.html)。
