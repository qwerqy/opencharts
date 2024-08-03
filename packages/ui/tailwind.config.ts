import type { Config } from 'tailwindcss'
import tailwindConfig from '@dashboard-kit/tailwind-config/tailwind.config'

const config: Config = {
	...tailwindConfig,
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
export default config
