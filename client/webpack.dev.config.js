const webpack = require('webpack');


const recruitPath = "./transcats/static/js/recruit/src/";
const producePlugins = [
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	new webpack.optimize.DedupePlugin(),
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("production")
		}
	}),
	new webpack.NoErrorsPlugin()
];


const developmentPlugins = [
];


const plugins = process.env.npm_lifecycle_event === "recruit-build" ? producePlugins : developmentPlugins;


const entryArr = ["board", "jobDetail", "companyDetail", "co_homepage", "job_post", "job_create", "resume", "jobs_delivery", "company_list"];


let entry = {};
for (let item of entryArr) {
	entry[`transcats/static/js/recruit/dist/${item}.bundle.js`] = `${recruitPath+item}.jsx`;
}


module.exports = {
	entry,
	output: {
		filename: "[name]",
		path: "/home/ilinux/tmp/local/project",
		publicPath: "http://localhost:3000"
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: [
					"transform-runtime"
				]
			}
		}]
	},
	plugins,
}