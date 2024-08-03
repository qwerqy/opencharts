module.exports = {
	content: [
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
		'./**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
			},
		},
	},
	plugins: [],
}
