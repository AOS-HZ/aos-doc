import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'AOS Docs',
	description: 'AOS Desktop 与 AOS CLI 的产品文档中心。',
	head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
	theme: defaultTheme({
		logo: '/favicon.svg',
		repo: 'https://github.com/AOS-HZ',
		contributors: false,
		editLink: false,
		lastUpdated: false,
		navbar: [
			{ text: '首页', link: '/' },
			{ text: 'AOS Desktop', link: '/aos-desktop/' },
			{ text: 'AOS CLI', link: '/aos-cli/' },
		],
		sidebar: {
			'/aos-desktop/': [
				{
					text: 'AOS Desktop',
					children: ['', 'quick-start.md', 'activity-monitor.md'],
				},
			],
			'/aos-cli/': [
				{
					text: 'AOS CLI',
					children: ['', 'quick-start.md', 'commands.md'],
				},
			],
		},
	}),
	bundler: viteBundler(),
});
