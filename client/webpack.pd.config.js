const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		index: path.resolve('./src/index.jsx'),
		vendor: path.resolve('./src/vendor.jsx')
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve('./dist'),
		sourceMapFilename: '[name].map'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
				'babel-loader'
			]
		}]
	},
	plugins: [
		/*
		* 提取公用代码库或模块, code split
		*/
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor'].reverse()
		}),
		/*
		* ProvidePlugin可以让我们无需引入的情况下，以全局的模式直接使用模块变量。
		* 不引入直接使用变量是一种很不好的编码习惯，ProvidePlugin的作用是帮我们HACK一些不规范的模块。
		*/
		new webpack.ProvidePlugin({ 
			'React': 'react'
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.NoErrorsPlugin()
	]
}