import CardItems from './../../CardItems/components/cardItems.jsx';

export default class Dairy extends CardItems {
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is dairy!!');
	}
}