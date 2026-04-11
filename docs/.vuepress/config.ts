import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'AgentOfShield Docs',
	description: 'AgentOfShield 文档入口页。',
	head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
	theme: defaultTheme({
		logo: '/favicon.svg',
		repo: 'https://github.com/AOS-HZ',
		contributors: false,
		editLink: false,
		lastUpdated: false,
		navbar: [
			{ text: '首页', link: '/' },
			{ text: '阅读文档', link: 'https://doc.agentshield.site' },
		],
	}),
	bundler: viteBundler(),
});
