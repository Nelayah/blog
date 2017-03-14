import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'about']),
	getComponent(nextState, callback) {
		System.import( './components/about.jsx').then((module) => callback(null, module.default));
	}
};