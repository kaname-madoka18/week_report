# BEHAVIOR-1K / 2026 Challenge Demonstrations

BEHAVIOR-1K 定义 1,000 项日常家庭活动。本地页面使用公开的 2026 Challenge 示范元数据，覆盖 100 个任务与 20,000 条 episode，并保留可核验的 RGB-D 长视频抽样。

## 与多模态记忆的关系

直接记忆：家庭活动需要根据过去的视觉观察、物体状态和操作阶段继续执行；RGB-D 相机视角适合观察跨时间的空间状态。

## 视频长度与本轮扩展

当前全量元数据给出 episode 时长 4.93–1,525.37 秒，平均 351.53 秒，中位数 335.03 秒。本页保留头部、左腕、右腕三个视角、两个 episode 各 100 帧，并明确其为 turning_on_radio / episode 0 的受限 Range 抽样。

## 数据入口

- [论文](https://arxiv.org/abs/2403.09227)
- [官方项目页](https://behavior.stanford.edu/)
- [GitHub](https://github.com/StanfordVL/BEHAVIOR-1K)
- [2026 LeRobot 示范](https://huggingface.co/datasets/behavior-1k/2026-challenge-demos)

## 预览限制

- 600 张图由三个相机视角、两个 episode 各 100 帧组成；它们来自公开示范中的一个任务/episode，不是 1,000 活动的随机抽样。
- 原始文件是多个 episode 拼接的大 MP4，只通过 HTTP Range 读取所需片段。
- 具体视频长度以 episode 元数据 / 30fps 为准，不能用容器总长度代替。
