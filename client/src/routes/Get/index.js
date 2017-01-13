module.exports = {
	path: 'get',
	getComponent(nextState, callback) {
		 System.import( './components/Get.jsx').then((module) => callback(null, module.default));
	}
}