import CardItems from './../../CardItems/components/cardItems.jsx';
import { connect } from 'react-redux';
import config from './../../../config.js';

const {
	base
} = config.getIn(['url']).toJS();

@connect(state => ({
	...state
}))
export default class DairyList extends CardItems {
	static baseUrl = `/${base.dairyList}/`
	static childrenUrl = `/${base.dairy}/`
	static meta = false
}