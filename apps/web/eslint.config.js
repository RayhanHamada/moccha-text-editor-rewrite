import { antfu } from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	rules: {
		'vue/html-self-closing': ['off'],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 1,
			},
		],
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
