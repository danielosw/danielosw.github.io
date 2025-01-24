const { purgeCSSPlugin } = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssSimpleVars = require("postcss-simple-vars");

const postcssNesting = require("postcss-nesting");
const tailwindcss = require("@tailwindcss/postcss");
const cssnano = require("cssnano");
module.exports = {
	plugins: [
		tailwindcss({
			content: [
				"./src/**/*.{html,js,svelte,ts}",
				"./src/routes/**/*.{html,js,svelte,ts}",
			],
			theme: {
				extend: {},
			},
			plugins: [],
		}),
		postcssSimpleVars(),

		postcssNesting(),

		postcssPresetEnv({
			/* pluginOptions */
			stage: 3,
			autoprefixer: { grid: false },
		}),
		purgeCSSPlugin({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			css: ["./**/*.css"],
			//defaultExtractor: (content) => content.match("class=\"([\\w\\-/: ]+)\"(?<!:)|id=\"([\\w\\-/: ]+)\"(?<!:)|<([\\w\\-/: ]+) (?<!:)|<\\/([\\w\\-/: ]+)>(?<!:)") || [],

			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
		cssnano({
			preset: "advanced",
		}),
	],
};
