import { combineReducers } from 'redux';
import sidebar from './sidebar.js';
import pages from './pages.js';
import website from './website.js';

export default combineReducers({ sidebar, pages, website });