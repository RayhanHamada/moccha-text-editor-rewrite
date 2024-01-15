import { antfu } from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'ts/consistent-type-imports': 'error',
		'max-len': [
			'error',
			{
				code: 80,
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
			},
		],
		'array-bracket-newline': [
			'error',
			{
				minItems: 3,
				multiline: true,
			},
		],
	},
	markdown: false,
})
