# MIKASA-Robo: Memory Benchmark for Complex Robot Tasks

MIKASA-Robo 评估机器人在遮挡、延迟、序列、容量和多阶段交互下利用视觉历史进行控制的能力。论文版含 32 项桌面操作任务，当前官方 VLA 文档扩展到 90 项任务、10 类记忆和 22,500 条轨迹。

## 与多模态记忆的关系

直接记忆：后续动作依赖此前看到的颜色、形状、位置或交互结果；只看当前观测会丢失关键状态。

## 数据与视频长度

本页从官方文档中补充 10 个 VLA 小视频案例。原始 GIF 转换为本地 MP4 后，播放时长为 0.50–1.33 秒；该播放时间只用于浏览，不表示完整控制轨迹的步数长度。

## 数据入口

- [论文](https://arxiv.org/abs/2502.10550)
- [官方项目页](https://mikasarobo.github.io/)
- [官方 GitHub](https://github.com/CognitiveAISystems/MIKASA-Robo)
- [VLA 任务目录](https://mikasarobo.github.io/vla_environments/index.html)

## 预览限制

- 10 个案例来自官方文档展示，不是完整任务集的随机抽样。
- GIF 转 MP4 只改变容器，不改变原始播放时序；没有下载完整轨迹仓库。
- 轨迹长度依赖控制步数和 Short/Medium/Long 配置，不能由 GIF 秒数换算。

## 首发与状态

- arXiv：2502.10550；日期、引用数、stars 和会议状态显示在动态元数据区域。
- 官方 VLA 代码和任务说明：[CognitiveAISystems/MIKASA-Robo](https://github.com/CognitiveAISystems/MIKASA-Robo)。
