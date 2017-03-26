import actions from '../actions/init.js';
import Immutable from 'immutable';

export const defaultState = Immutable.fromJS({toggle: false});

export default function sidebarReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.getIn(['sidebar', 'toggle']): {
			let tmp = state;
			return tmp.merge({toggle: !state.get('toggle')});
		}
		default:
			return state;
	}
}