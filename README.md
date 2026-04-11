# AOS Doc

独立的 AgentOfShield 文档入口站仓库，当前用于引导访问正式文档站 `https://doc.agentshield.site`。

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
└── .vuepress/
    ├── config.ts
    └── public/
        ├── favicon.svg
        └── images/screenshots/
```

静态资源放在 `docs/.vuepress/public/`，会随站点一起发布。
