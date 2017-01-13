import { combineReducers } from 'redux';

import { value_get } from './get.js';
import { value_set } from './set.js';

export default combineReducers({
	value_get,
	value_set
});