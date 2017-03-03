import actions from '../actions/init.js';
import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({currentIndex: 1});

export default function pagesReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.getIn(['pages', 'currentIndex']): {
			let tmp = state;
			return tmp.merge({currentIndex: action.page});
		}
		default:
			return state;
	}
}