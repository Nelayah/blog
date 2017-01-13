import actions from '../actions/init.js';

export function value_get(state = [], action) {
	switch (action.type) {
		case actions.get.head: 
			return ["10", ...state];
		case actions.get.tail: 
			return [...state, "01"];
		default:
			return state;
	}
}