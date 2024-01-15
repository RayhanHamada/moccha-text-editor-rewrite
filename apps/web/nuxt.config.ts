// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Moccha Text Editor',
		},
	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	pages: true,
	imports: {
		autoImport: true,
		addons: {
			vueTemplate: true,
		},
	},
	modules: ['@nuxtjs/tailwindcss'],
})
