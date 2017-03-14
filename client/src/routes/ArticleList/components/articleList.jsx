import CardItems from './../../CardItems/components/cardItems.jsx';

export default class ArticleList extends CardItems {
	static fetchData() {
		let keywords = 'element';
		console.log(keywords);
	}
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is article!!');
	}
}