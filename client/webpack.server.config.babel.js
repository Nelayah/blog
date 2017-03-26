import webpack from 'webpack';
var fs = require('fs');
var path = require('path');
const env = process.env.NODE_ENV;

module.exports = {

	entry: {
		server: path.resolve('./server/src/server.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('./server/dist'),
		publicPath: '/'
	},

	target: 'node',

	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons'
	]).reduce(function(ext, mod) {
		ext[mod] = 'commonjs ' + mod;
		return ext;
	}, {}),

	node: {
		__filename: true,
		__dirname: true
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: [
				'css-loader',
				'sass-loader'
			]
		}, {
			test: /\.html$/,
			exclude: /node_modules/,
			loader: [
				'html-loader'
			]
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader?name=static/images/[hash:8].[ext]'
		}, {
			test: /\.(woff|eot|woff2|ttf|svg)/,
			loader: 'file-loader?name=static/font/[hash:8].[ext]'
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
			// 'process.env.NODE_ENV': JSON.stringify('development')
		}),
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
};