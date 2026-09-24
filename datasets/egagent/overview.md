# EGAgent：既有视频基准与方法演示

[返回全部论文目录](../../catalog.html) · [预览图册](preview_gallery.html) · [EgoLife 完整 overview](../../overview.html)

《Agentic Very Long Video Understanding》提出围绕实体场景图的 **EGAgent**：规划智能体组合视觉、音频转写和实体图搜索。**本文没有新增原始视频数据集**，实验使用 EgoLifeQA 与 Video-MME Long。核对日期为 2026-09-22，结果采用 [论文 v3](https://arxiv.org/html/2601.18157v3)。

| 数据与范围 | 数量 | 视频长度 | 本地预览 |
|---|---|---|---|
| EgoLifeQA / Jake | 500 道四选一题，A1_JAKE 一周记录 | 论文描述约 50 小时；原始发布通常 30 秒一段，本地清单有 6,266 个 Jake MP4 | 复用 100 个跨七天 Jake 片段帧 |
| Video-MME Long | 300 个视频、900 道四选一题 | 每个 30–60 分钟；全 Video-MME 另含 900 个视频、254 小时，不能把全库总时长写成长子集总和 | 此次未抽取 |
| 官网 teaser / pipeline | 两个方法演示 MP4 | teaser：21.028 秒、13.655 MB；pipeline：33.992 秒、13.267 MB | 每个演示按实际解码帧序号均匀 100 帧，包含原视频片段、文字及方法动画 |

来源：[论文第 4.1 节](https://arxiv.org/html/2601.18157v3)、[Video-MME 官方仓库](https://github.com/MME-Benchmarks/Video-MME)、[EGAgent 官网](https://facebookresearch.github.io/egagent/)。录制时长、现实跨度和算法采样预算是不同概念；“1 FPS → 50”表示从一秒一帧的索引里取 50 帧供模型分析，不表示视频长 50 秒。

## 可访问内容与预览说明

[官方代码仓库](https://github.com/facebookresearch/egagent)提供数据源构建、推理、基线及消融脚本；原视频按各数据集自己的入口获取。完整数据说明和更多真实场景图片见 [EgoLife overview](../../overview.html)与 [EgoLife 图册](../../preview_gallery.html)。

本地保存两个官网 MP4，文件大小预先通过 GitHub 文件树确认严格小于 100,000,000 字节，再下载并校验 Git blob SHA-1。每个演示按实际解码帧序号均匀取 100 个不同帧（可变帧率，含停顿）；这是**方法演示预览，不是 200 个独立数据集视频**，也不替代对完整 Video-MME 的内容覆盖。全部帧路径、原网址、时刻、实测源文件长度与校验值见 [metadata/demo_manifest.json](metadata/demo_manifest.json)；图册可以打开本地小视频。

## 论文结果和条件

以下均为原论文报告值，本次没有运行评测。

| 方法 | EgoLifeQA 准确率 | Video-MME Long 准确率 |
|---|---:|---:|
| 均匀采样 Gemini 2.5 Pro | 46.8 | 82.0 |
| EGAgent + GPT-4.1 | 50.7 | — |
| EGAgent + Gemini 2.5 Pro | **57.5** | **74.1** |

在 EgoLifeQA 上，EGAgent + Gemini 2.5 Pro 相对该论文均匀采样同骨干基线提高 10.7 点；Video-MME Long 上则低于表内 Gemini 2.5 Pro 82.0 的基线，不能把“所有基准都最好”当作结论。两项基线帧数和音频输入也不同：EgoLife 均匀基线 3,000 帧加转写，Video-MME 均匀基线 256 帧加音频；EGAgent 使用检索的 50 帧及字幕/图信息。[论文表 1、2](https://arxiv.org/html/2601.18157v3)

EgoLife 实体图按每小时建立，Video-MME 每个视频一张图。EgoLife 使用带说话人身份的人工转写，Video-MME 使用 ASR；规划和多工具调用会增加模型调用成本。论文附录说明每个配置只有一次运行，没有重复实验方差。相对 WorldMM 与 MAGIC-Video 的数字也应对齐题集、骨干、采样和字幕条件后再比较。

## 本地来源

[project.json](project.json) · [官网演示清单](metadata/demo_manifest.json) · [官方 README 快照](sources/README.md) · [论文快照](sources/paper.html) · [含 MP4 大小与 hash 的文件树](sources/repo_tree.json)。

## 第二版短视频展示

本次第二版预览把本地完整副本不超过 **180 秒** 的视频改为直接播放的 video case 卡片，不再为这些短视频重复生成 100 帧图片；较长视频、没有安全本地副本的视频仍保留抽帧预览。当前项目检测到 **2 个**短视频 case，播放文件均小于 100 MB；页面中的时长、大小与 SHA-256 来自本地文件核验。
