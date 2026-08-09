import postcssPresetEnv from "postcss-preset-env";
import postcssMixins from "postcss-mixins";
export default {
	plugins: [
		postcssMixins(),

		postcssPresetEnv({
			stage: 2,
		}),
	],
};
