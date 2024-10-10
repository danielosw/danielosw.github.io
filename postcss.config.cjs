const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require("postcss-preset-env");
module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-nesting"),
		require("tailwindcss"),
		require('postcss-mixins'),
		postcssPresetEnv({
			/* pluginOptions */
			stage: 3,
			autoprefixer: { grid: false },
		}),
		purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			css: ["./**/*.css"],
			//defaultExtractor: (content) => content.match("class=\"([\\w\\-/: ]+)\"(?<!:)|id=\"([\\w\\-/: ]+)\"(?<!:)|<([\\w\\-/: ]+) (?<!:)|<\\/([\\w\\-/: ]+)>(?<!:)") || [],

			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
		require("cssnano")({
			preset: "advanced",
		}),
	],
};
