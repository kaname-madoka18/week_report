# FindingDory

FindingDory 是用于评估 embodied agent 记忆能力的 benchmark。论文在 Habitat 中定义长程任务，并通过程序化扩展控制记忆所需的空间与事件依赖。

## 与多模态记忆的关系

直接记忆：智能体需要把视觉观察、位置关系和先前经历保留到后续重排任务，再从历史经验中检索可执行信息。

## 数据与视频长度

论文描述 60 个基础任务及程序化扩展。项目页公开 Example Video Sequences；本页保存 4 个能够完整下载并解码的 episode，实测播放时长 29.20–59.00 秒。

## 数据入口

- [论文](https://arxiv.org/abs/2506.15635)
- [官方项目页](https://findingdory-benchmark.github.io/)
- [Habitat 环境代码](https://github.com/findingdory-benchmark/findingdory-habitat)
- [训练代码](https://github.com/findingdory-benchmark/findingdory-train)
- [Hugging Face 数据集](https://huggingface.co/datasets/yali30/findingdory)

## 预览限制

- 本地 4 个视频是官网示例，不代表所有任务分布。
- 项目页另外列有 episode 3371 与 89；这两项在本次网络传输中断，仍可从官网直接打开。
- 记忆跨度应结合 Habitat episode / step 定义阅读，不能只看播放器秒数。

## 首发与状态

- arXiv：2506.15635；动态元数据中的日期、引用和 GitHub stars按本地刷新时间记录。
- 公开页面显示其作为 NeurIPS 2025 Workshop SpaVLE 相关工作展示；状态来源保留在动态元数据。
