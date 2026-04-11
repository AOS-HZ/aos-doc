---
title: AOS Desktop
description: 面向 AI Agent 生态的桌面安全工作台，聚焦本地发现、风险分析、隔离处置和运行时监控。
---

AOS Desktop 是 AgentOfShield 的桌面端产品，用来帮助团队看清本地 Agent、Skill、MCP Server、Prompt、Resource 和代码仓库中的风险暴露面。

它不是单点扫描器，而是一套围绕本地 AI 生态构建的安全工作台，负责把发现、分析、监控和处置放到同一个图形界面里完成。

## 核心能力

- 本地资产发现：自动盘点本机上的 Skill、Agent、MCP Server、Tool、Prompt 和 Resource。
- 静态风险检测：重点识别 Shell 执行、敏感文件访问、外部网络请求、远程代码下载和 Prompt Injection 等模式。
- 风险分析：按组件查看 findings、风险分数、关联文件和建议动作。
- 隔离区：把高风险 Skill 移出常规使用路径，便于恢复或清理。
- 代码库扫描：对本地 Agent 项目和 MCP 集成仓库做专门审计。
- 活动监控：把工具调用、模型调用和安全事件纳入统一时间线。

## 典型使用方式

1. 先执行本地扫描，建立 Agent 生态资产清单。
2. 在概览页定位高风险组件，再进入详情页做研判。
3. 对不可信或待观察的组件执行隔离或进一步复核。
4. 对项目仓库执行专门审计，补足开发阶段检查。
5. 接入活动监控，形成“运行前检查 + 运行中观察”的闭环。

## 产品界面

### 安全概览

![AOS Desktop 安全概览](/images/screenshots/dashboard.png)

### Skill 管理

![AOS Desktop Skill 管理](/images/screenshots/skills-management.png)

### 风险分析

![AOS Desktop 风险分析](/images/screenshots/risk-analysis.png)

### 隔离区

![AOS Desktop 隔离区](/images/screenshots/quarantine-zone.png)

## 技术基础

- 桌面容器：Tauri 2
- 前端：React、TypeScript、Vite、Tailwind CSS
- 后端：Rust
- 本地发现与静态扫描：复用 `aos-core` 中的 `discovery-engine` 和 `local-scanner`
- 数据存储：SQLite

## 继续阅读

- [AOS Desktop 快速开始](./quick-start.md)
- [AOS Desktop 活动监控](./activity-monitor.md)
