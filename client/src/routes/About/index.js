module.exports = {
	path: 'about/',
	getComponent(nextState, callback) {
		System.import( './components/about.jsx').then((module) => callback(null, module.default));
	}
};