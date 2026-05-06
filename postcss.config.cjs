const postcssPresetEnv = require("postcss-preset-env");
const postcssSimpleVars = require("postcss-simple-vars");

const postcssNesting = require("postcss-nesting");
const cssnano = require("cssnano");
module.exports = {
	plugins: [
		postcssSimpleVars(),

		postcssNesting(),

		postcssPresetEnv({
			/* pluginOptions */
			stage: 3,
			autoprefixer: { grid: false },
		}),

		cssnano({
			preset: "advanced",
		}),
	],
};
