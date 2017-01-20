import actions from '../actions/init.js';

export function sidebarStatus(state = false, action) {
	switch (action.type) {
		case actions.sidebar.toggle: 
			return !state;
		default:
			return state;
	}
}