---
title: AOS Desktop 活动监控
description: 使用标准 OTLP 接入工具调用、模型调用和安全事件。
---

活动监控是 AOS Desktop 的关键能力之一。它不只看静态文件，也会把运行时的工具调用、模型调用和安全告警统一汇总到一个观察面板中。

![AOS Desktop 活动监控](/images/screenshots/activity-monitor.png)

## 默认接入地址

本地 OTLP bridge 默认监听以下地址：

- `POST http://127.0.0.1:46357/v1/logs`
- `POST http://127.0.0.1:46357/v1/traces`
- `POST http://127.0.0.1:46357/v1/metrics`
- `GET http://127.0.0.1:46357/health`

你可以先访问健康检查接口，确认 bridge 已经工作：

```bash
curl http://127.0.0.1:46357/health
```

## 建议上报的字段

为了让会话时间线和摘要更有可读性，建议优先携带以下字段：

- `service.name` 或 `scope.name`
- `session_id` 或 `run_id`
- `tool_name`
- `model`
- `input_token_count` / `output_token_count`
- `cost_usd`
- `duration_ms`

## 事件会如何展示

- 带 `tool_name` 的 logs 或 spans 会被归纳为工具执行事件。
- 带 `model` 和 token 计数的事件会被归纳为模型响应事件。
- `ERROR`、`FATAL` 或策略命中的事件会被归类为安全告警。
- 其他事件会作为普通 runtime 事件展示在时间线中。

## Claude Code 示例

如果你的运行时支持 OpenTelemetry，最简单的方式就是直接发标准 OTLP。以 Claude Code 为例，可以通过环境变量把日志发进本地 bridge：

```bash
export CLAUDE_CODE_ENABLE_TELEMETRY=1
export OTEL_LOGS_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_LOGS_PROTOCOL=http/json
export OTEL_EXPORTER_OTLP_LOGS_ENDPOINT=http://127.0.0.1:46357/v1/logs
```

## 使用建议

- 优先发送标准 OTLP，而不是自定义 JSON。
- 先保证 `session_id`、`tool_name`、`model` 这三类字段完整，再逐步补充 token、耗时和成本。
- 如果你已经在桌面端做静态扫描，建议把活动监控一起接上，这样更容易形成完整闭环。
