import actions from '../actions/init.js';
import Immutable from 'immutable';
import config from './../config.js';
const {
	title,
	description,
	keywords
} = config.getIn(['website']).toJS();


export const defaultState = Immutable.fromJS({
	title,
	description,
	keywords
});

export default function sidebarReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.getIn(['website', 'metaupdate']):
			{
				let tmp = state;
				return tmp.merge({
					title: action.title,
					description: action.description,
					keywords: action.keywords
				});
			}
		default:
			return state;
	}
}