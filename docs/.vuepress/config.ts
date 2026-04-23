import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
	base: '/doc/',
	lang: 'zh-CN',
	title: 'AOS Docs',
	description: 'AOS Desktop 的产品文档中心。',
	head: [['link', { rel: 'icon', href: '/doc/favicon.svg' }]],
	theme: defaultTheme({
		logo: '/favicon.svg',
		repo: 'https://github.com/AOS-HZ',
		contributors: false,
		editLink: false,
		lastUpdated: false,
		navbar: [
			{ text: '首页', link: '/' },
			{ text: 'AOS Desktop', link: '/aos-desktop/' },
		],
		sidebar: {
			'/aos-desktop/': [
				{
					text: '开始使用',
					children: ['', 'runtimes.md'],
				},
				{
					text: '日常使用',
					children: ['activity-monitor.md', 'sessions.md', 'alerts.md'],
				},
				{
					text: '技能管理',
					children: ['skills.md', 'skill-risk.md'],
				},
				{
					text: '通知与界面',
					children: ['notifications.md', 'menu-bar.md', 'widget.md'],
				},
				{
					text: '设置',
					children: ['settings.md', 'faq.md'],
				},
			],
			'/': [
				{
					text: '开始使用',
					children: ['/', '/aos-desktop/runtimes.md'],
				},
				{
					text: '日常使用',
					children: [
						'/aos-desktop/activity-monitor.md',
						'/aos-desktop/sessions.md',
						'/aos-desktop/alerts.md',
					],
				},
				{
					text: '技能管理',
					children: ['/aos-desktop/skills.md', '/aos-desktop/skill-risk.md'],
				},
				{
					text: '通知与界面',
					children: [
						'/aos-desktop/notifications.md',
						'/aos-desktop/menu-bar.md',
						'/aos-desktop/widget.md',
					],
				},
				{
					text: '设置',
					children: ['/aos-desktop/settings.md', '/aos-desktop/faq.md'],
				},
			],
		},
	}),
	bundler: viteBundler(),
});
