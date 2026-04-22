---
title: 认识 AOS Desktop
description: 了解 AOS Desktop 是什么、能帮你做什么，以及主要功能在哪里。
---

# 认识 AOS Desktop

AOS Desktop 是一款运行在本机的桌面应用，帮助你监控 AI 助手在你电脑上的所有行为——消耗了多少 token、调用了哪些工具、触发了哪些安全风险，以及每次任务的完整过程。

## 你可以用它做什么

### 查看活动总览

总览页汇总所有已连接 AI 工具的近期使用情况：token 消耗、工具调用次数、成本估算、风险事件数量。你可以按今天、7 天、30 天等时间段筛选，对比不同工具或 Agent 的用量。

![AOS Desktop 活动总览](/images/screenshots/runtime-overview.png)

### 追踪一次任务的完整过程

会话页把一次任务里发生的所有事情串起来——从输入开始，到模型调用、工具调用，再到任务结束。你可以用时间线或交互式画布查看每一步，找到失败或风险出现在哪个环节。

![AOS Desktop 会话画布](/images/screenshots/live-canvas.png)

### 处理安全告警

告警页集中展示所有检测到的风险事件，分为"已拦截"和"观察中"两类。点开一条告警就能看到它来自哪个工具、触发了什么规则，以及是否已被自动拦截。

![AOS Desktop 安全告警](/images/screenshots/alerts.png)

### 管理本机技能

技能页展示 AOS Desktop 在本机发现的所有技能，包括它们来自哪里、关联了哪些 AI 工具，以及安全分析的结果和风险评分。

![AOS Desktop 技能管理](/images/screenshots/skills-management.png)

## 主要功能在哪里

| 我想做的事 | 去哪里 |
|---|---|
| 看整体用量和风险概况 | 侧边栏 → 总览 |
| 查看一次任务的过程 | 侧边栏 → 会话 |
| 处理安全告警 | 侧边栏 → 告警 |
| 管理本机技能 | 侧边栏 → 技能 |
| 设置通知和数据保留 | 侧边栏 → 设置 |
| 不打开应用查看今日用量 | macOS 菜单栏图标 |
| 在锁屏或通知中心查看数据 | macOS 桌面小组件 |

## 支持哪些 AI 工具

AOS Desktop 支持 Claude Code、Cursor、Gemini、Qwen、CodeWhisperer 等主流 AI 编程工具。详见[支持的 AI 工具](./runtimes.md)。
