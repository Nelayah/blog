import CardItems from './../../CardItems/components/cardItems.jsx';
import { connect } from 'react-redux';
import config from './../../../config.js';

const {
	base
} = config.getIn(['url']).toJS();

@connect(state => ({
	...state
}))
export default class ArticleList extends CardItems {
	static baseUrl = `/${base.articleList}/`
	static childrenUrl = `/${base.articles}/`
	static meta = false
}