// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.agentshield.site',
	integrations: [
		starlight({
			title: 'AgentOfShield Docs',
			description: 'AOS Desktop 与 AOS CLI 的产品文档中心。',
			favicon: '/favicon.svg',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AOS-HZ' }],
			sidebar: [
				{
					label: '开始阅读',
					items: [{ label: '文档首页', slug: 'index' }],
				},
				{
					label: 'AOS Desktop',
					autogenerate: { directory: 'aos-desktop' },
				},
				{
					label: 'AOS CLI',
					autogenerate: { directory: 'aos-cli' },
				},
			],
		}),
	],
});
