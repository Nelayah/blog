import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'dairy']),
	getComponent(nextState, callback) {
		System.import( './components/dairy.jsx').then((module) => callback(null, module.default));
	}
};