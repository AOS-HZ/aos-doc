# AOS Doc

独立的 AgentOfShield 文档站仓库，承载 AOS Desktop 与 AOS CLI 的产品说明、快速开始和命令参考。

## 技术栈

- Astro 6
- Starlight

## 本地运行

```bash
npm install
npm run dev
```

默认启动后访问 `http://localhost:4321`。

## 构建

```bash
npm run build
```

## 内容目录

```text
src/content/docs/
├── index.mdx
├── aos-desktop/
│   ├── index.md
│   ├── quick-start.md
│   └── activity-monitor.md
└── aos-cli/
    ├── index.md
    ├── quick-start.md
    └── commands.md
```

桌面端截图放在 `src/assets/screenshots/`，文档中通过相对路径直接引用。
