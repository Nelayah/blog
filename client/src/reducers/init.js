import { combineReducers } from 'redux';
import sidebar from './sidebar.js';
import pages from './pages.js';

export default combineReducers({ sidebar, pages });