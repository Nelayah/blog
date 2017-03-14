import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'articleList']),
	getComponent(nextState, callback) {
		System.import( './components/articleList.jsx').then((module) => callback(null, module.default));
	}
};