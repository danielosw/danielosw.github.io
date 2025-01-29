const cssnano = require('cssnano');
const present = require('postcss-preset-env');
const nested = require('postcss-nested');
module.exports = {

	plugins: [
		nested(),
		present(),
		cssnano()
	]
}