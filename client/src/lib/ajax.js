import request from 'superagent';
import Promise from 'promise';

const ajax = {
	get(url) {
		return new Promise((resolve, reject) => {
			request
				.get(url)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	},
	delete(url) {
		return new Promise((resolve, reject) => {
			request
				.delete(url)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	},
	head(url) {
		return new Promise((resolve, reject) => {
			request
				.head(url)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	},
	post(url, data) {
		return new Promise((resolve, reject) => {
			request
				.post(url)
				.send(data)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	},
	patch(url, data) {
		return new Promise((resolve, reject) => {
			request
				.patch(url)
				.send(data)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	},
	put(url, data) {
		return new Promise((resolve, reject) => {
			request
				.put(url)
				.send(data)
				.set('Accept', 'application/json')
				.end((error, res) => {
					error ? reject(error) : resolve(res);
				});
		});
	}
};
export default ajax;