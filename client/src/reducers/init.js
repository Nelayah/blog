import { combineReducers } from 'redux';

import { value_get } from './get.js';
import { value_set } from './set.js';
import { sidebarStatus } from './sidebar.js';

export default combineReducers({
	value_get,
	value_set,
	sidebarStatus
});