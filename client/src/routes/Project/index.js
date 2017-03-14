import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'project']),
	getComponent(nextState, callback) {
		System.import( './components/project.jsx').then((module) => callback(null, module.default));
	}
};