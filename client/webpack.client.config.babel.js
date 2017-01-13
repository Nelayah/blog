import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from 'path';
import webpack from 'webpack';
import { RootMostResolvePlugin } from 'webpack-dependency-suite';

const env = process.env.NODE_ENV;
const plugins = env === "development" ? [] : [
	new webpack.optimize.UglifyJsPlugin({
		beautify: false,
		mangle: {
			screw_ie8: true,
			keep_fnames: true
		},
		compress: {
			screw_ie8: true,
			warnings: false
		},
		comments: false
	})
]
module.exports = {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		historyApiFallback: true
	},
	entry: {
		index: path.resolve('./src/index.jsx'),
		vendor: path.resolve('./src/vendor.jsx')
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve('./dist')
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader'
			})
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: `url-loader?limit=5000&emitFile=true&name=/static/images/[hash:8].[ext]`
		}, {
			test: /\/opensans\/.*\.(woff|eot|woff2|ttf|svg)/,
			loader: `file-loader?emitFile=false&name=${ path.resolve() }/font/opensans/[name].[ext]`
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader!sass-loader'
			})
		}]
	},
	resolve: {
		plugins: env === "development" ? [] : [
			// removes duplicate submodules if the required SemVer is satisfied
			// preferring local ones (closest to rootDir)
			// useful especially when using linked modules
			// webpack 2 removed DedupePlugin, resolve plugins replace
			new RootMostResolvePlugin(path.resolve(), true)
		]
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
		new ExtractTextPlugin("./static/css/styles.css"),
		new webpack.LoaderOptionsPlugin({
			minimize: env === "development" ? false : true,
			debug: env === "development" ? true : false
		}),
		...plugins,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		new webpack.NoEmitOnErrorsPlugin()
	]
}