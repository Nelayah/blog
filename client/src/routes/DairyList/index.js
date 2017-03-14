import config from './../../config.js';

module.exports = {
	path: config.getIn(['url', 'routes', 'dairyList']),
	getComponent(nextState, callback) {
		System.import( './components/dairyList.jsx').then((module) => callback(null, module.default));
	}
};