module.exports = {
	path: '404',
	getComponent(nextState, callback) {
		System.import( './components/404.jsx').then((module) => callback(null, module.default));
	}
};