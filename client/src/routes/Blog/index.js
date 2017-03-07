module.exports = {
	path: 'blog/:blogId',
	getComponent(nextState, callback) {
		System.import( './components/blog.jsx').then((module) => callback(null, module.default));
	}
};