module.exports = {
	path: 'project/',
	getComponent(nextState, callback) {
		System.import( './components/project.jsx').then((module) => callback(null, module.default));
	}
};