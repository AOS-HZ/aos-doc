# AOS Doc

独立的 AgentOfShield 文档站仓库，当前对外承载 AOS Desktop 的用户帮助文档。

AOS CLI 相关文档已临时移入 `archived/aos-cli/`，不参与 VuePress 站点构建，也不会出现在导航和首页入口中。

## 技术栈

- VuePress 2
- Default Theme

## 本地运行

```bash
npm install
npm run dev
```

建议使用 Node `^20.9.0` 或 `>=22.18.0`。

默认启动后访问 `http://localhost:4321`。如果该端口已被占用，VuePress 会自动切到下一个可用端口。

## 构建

```bash
npm run build
```

## 内容目录

```text
docs/
├── README.md
├── aos-desktop/
│   ├── README.md
│   ├── quick-start.md
│   ├── activity-monitor.md
│   ├── sessions.md
│   ├── alerts.md
│   ├── skills.md
│   ├── skill-risk.md
│   ├── settings.md
│   └── faq.md
└── .vuepress/
    ├── config.ts
    └── public/
        ├── favicon.svg
        └── images/screenshots/

archived/
└── aos-cli/
    ├── README.md
    ├── quick-start.md
    └── commands.md
```

桌面端截图放在 `docs/.vuepress/public/images/screenshots/`，文档中通过公开路径引用。
