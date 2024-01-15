import { antfu } from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
	},
})
