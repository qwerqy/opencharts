/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@dashboard-kit/eslint-config/react-internal.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.lint.json',
		tsconfigRootDir: __dirname,
	},
}
