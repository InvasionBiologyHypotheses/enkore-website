const autoprefixer = require('autoprefixer');
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

const config = {
	plugins: [autoprefixer(), postcssJitProps(OpenProps)]
};

module.exports = config;
