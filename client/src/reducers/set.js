import actions from '../actions/init.js';

export function value_set(state = [], action) {
	switch (action.type) {
		case actions.set.letter_a: 
			return [...state, "a"];
		case actions.set.letter_b: 
			return [...state, "b"];
		case actions.set.letter_c: 
			return [...state, "c"];
		default:
			return state;
	}
}