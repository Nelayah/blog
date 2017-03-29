import { Component } from 'react';
import { browserHistory } from 'react-router';
import actions from './../../../actions/init.js';
import ajax from './../../../lib/ajax.js';
import config from './../../../config.js';

export default class Base extends Component {
	fetchdata(pathname) {
		const { dispatch } = this.props;
		const response = this.props.pages.getIn(['content']).toJS();

		const {
			title,
			description,
			keywords
		} = config.getIn(['website']).toJS();

		if (!response[location.pathname]) {
			ajax.get(`/api${pathname}`)
				.catch(() => {
					browserHistory.push('/404/');
				})
				.then((resolve) => {
					let result = JSON.parse(resolve.text);
					if (this.constructor.meta) {
						dispatch({
							type: actions.getIn(['website', 'metaupdate']),
							title: result.title,
							description: result.digest,
							keywords: result.tag.join(', ')
						});
					} else {
						dispatch({
							type: actions.getIn(['website', 'metaupdate']),
							title,
							description,
							keywords
						});
					}
					if (result.results && result.results.length === 0) {
						browserHistory.push('/404/');
					}
					dispatch({ type: actions.getIn(['pages', 'content']), pathname: location.pathname, response: result });
				});
		}
	}
}