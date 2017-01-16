var fs = require('fs')
var path = require('path')

module.exports = {

	entry: {
		server: path.resolve('./server/src/server.js')
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('./server/dist')
	},

	target: 'node',

	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function(ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
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
			loader: [
				'url-loader'
			]
		}]
	},

}