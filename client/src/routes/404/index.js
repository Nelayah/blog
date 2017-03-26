module.exports = {
	path: '*',
	indexRoute: { onEnter: (nextState, replace) => replace('/404/') },
	getComponent(nextState, callback) {
		System.import( './components/404.jsx').then((module) => callback(null, module.default));
	}
};