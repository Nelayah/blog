import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'articles']),
	getComponent(nextState, callback) {
		System.import( './components/articles.jsx').then((module) => callback(null, module.default));
	}
};