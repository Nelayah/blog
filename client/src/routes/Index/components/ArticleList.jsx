import CardItems from './../../CardItems/components/cardItems.jsx';

export default class ArticleList extends CardItems {
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is article!!');
	}
}