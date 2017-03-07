module.exports = {
	path: 'dairy/',
	getComponent(nextState, callback) {
		System.import( './components/dairy.jsx').then((module) => callback(null, module.default));
	}
};