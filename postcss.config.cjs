const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require("postcss-preset-env");
const postcssSimpleVars = require('postcss-simple-vars');
const postcssImport = require("postcss-import");
const postcssNesting = require("postcss-nesting");
const postcssMixins = require('postcss-mixins');
const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
module.exports = {
	plugins: [
		postcssImport(),
		postcssMixins(),
		postcssNesting(),
		tailwindcss(),
		postcssSimpleVars(),
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
		cssnano({
			preset: "advanced",
		}),
	],
};
