import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from 'path';
import webpack from 'webpack';
import { RootMostResolvePlugin } from 'webpack-dependency-suite';
import customProperties from "postcss-custom-properties";
import autoprefixer from "autoprefixer";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

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
		filename: "[name].[chunkhash:8].bundle.js",
		path: path.resolve(__dirname, 'dist')
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
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: [
					{ loader: 'css-loader!sass-loader', query: { modules: true, sourceMaps: true } },
					'postcss-loader'
				]
			})
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: `file-loader?name=/static/images/[hash:8].[ext]`
		}, {
			test: /\/opensans\/.*\.(woff|eot|woff2|ttf|svg)/,
			loader: `file-loader?emitFile=false&name=${ path.resolve() }/font/opensans/[name].[ext]`
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
		new WebpackMd5Hash(),
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
		new ExtractTextPlugin({ filename: "static/css/styles.[chunkhash:8].css", disable: false, allChunks: false }),
		new webpack.LoaderOptionsPlugin({
			minimize: env === "development" ? false : true,
			debug: env === "development" ? true : false,
			options: {
				postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
						customProperties(),
						autoprefixer({ browsers: ['last 10 versions', 'ie 6-8'] })
					]
					// ...other configs that used to directly on `modules.exports`
			}
		}),
		...plugins,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			inject: false,
			filename: 'template.html',
			template: "./src/template.html",
			files: {
				"css": ["style.css"],
				"js": ["index.js", "vendor.js"],
				"chunks": {
					"vendor": {
						"entry": "vendor.js",
						"css": []
					},
					"index": {
						"entry": "index.js",
						"css": ["style.css"]
					}
				}
			},
		})
	]
}