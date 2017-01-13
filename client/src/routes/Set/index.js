module.exports = {
	path: 'set',
	getComponent(nextState, callback) {
		 System.import( './components/Set.jsx').then((module) => callback(null, module.default));
	}
}