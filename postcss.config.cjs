const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
	plugins: [

		require("postcss-import"),
		require("postcss-nesting"),
		require("tailwindcss"),
		postcssPresetEnv({
			/* pluginOptions */
			features: {stage: 3 },
			autoprefixer: { grid: false },
		}),
		purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
		require("cssnano")({
			preset: "advanced",
		}),
	],
};
