import actions from '../actions/init.js';
import Immutable from 'immutable';
import config from './../config.js';
const {
	taps
} = config.getIn(['url']).toJS();

export const defaultState = Immutable.fromJS({
	tapsHighlight: taps.article,
	isFirstLoad: false,
	content: {}
});

export default function pagesReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.getIn(['pages', 'taps']):
			{
				let tmp = state;
				return tmp.merge({ tapsHighlight: action.taps });
			}
		case actions.getIn(['pages', 'firstload']):
			{
				let tmp = state;
				return tmp.merge({ isFirstLoad: true });
			}	
		case actions.getIn(['pages', 'content']):
			{
				let tmp = state,
					empty = {};

				empty[action.pathname] = action.response;

				let content = tmp.getIn(['content']);
				content = content.merge(Immutable.fromJS(empty));

				return tmp.merge({ content });
			}
		default:
			return state;
	}
}