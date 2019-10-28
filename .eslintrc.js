module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react'],
	extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		"indent": "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"camelcase": "off",
		"@typescript-eslint/camelcase": ["error", {"properties": "always"}],
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/explicit-function-return-type": ["error", {
			allowHigherOrderFunctions: true,
			allowExpressions: true
		}],
		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": ["error"],
		"@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
		"@typescript-eslint/no-non-null-assertion": ["off"],
		"@typescript-eslint/no-namespace": ["error"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"comma-dangle": ["error", "always-multiline"],
		"object-curly-spacing": ["error", "always"],
		"eol-last": ["error", "always"],
		"react/prop-types": 0,
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-access-state-in-setstate": "error",
		"react/no-will-update-set-state": "error",
		"react/no-this-in-sfc": "error",
		"react/no-unsafe": "error",
		"react/self-closing-comp": "warn",
		"react/void-dom-elements-no-children": "error",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 7,
		sourceType: "module"
	},
};
