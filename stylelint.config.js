// stylelint.config.js
/** @type {import('stylelint').Config} */
export default {
	plugins: ["stylelint-order"],
	languageOptions: {
		syntax: {
			atRules: {
				// Define @define-mixin <name> <args>?
				"define-mixin": {
					prelude: "<custom-ident> [<any-value>]*",
				},
				// Define @mixin <name> <args>?
				mixin: {
					prelude: "<custom-ident> [<any-value>]*",
				},
			},
		},
	},

	extends: ["stylelint-config-standard"],
	rules: {
		"order/order": ["custom-properties", "declarations"],
		"order/properties-order": ["width", "height"],
		"selector-no-deprecated": true,
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["mixin", "define-mixin", "include", "content"],
			},
		],
		"color-named": [
			"never",
			{
				/** @param {string} name @returns {string} */
				message: (name) =>
					`Disallowed named color "${name}". Use \`oklch\` instead`,
			},
		],
		"color-no-hex": [
			true,
			{
								/** @param {string} hex @returns {string} */

				message: (hex) =>
					`Disallowed hex color "${hex}". Use \`oklch\` instead`,
			},
		],
		"display-notation": "full",
		"function-disallowed-list": [
			["rgb", "hsl", "hwb", "lab", "lch", "oklab"],
			{
												/** @param {string} fn @returns {string} */

				message: (fn) =>
					`Disallowed color function "${fn}". Use \`oklch\` instead`,
			},
		],
	},
};
