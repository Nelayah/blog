import CardItems from './../../CardItems/components/cardItems.jsx';

export default class DairyList extends CardItems {
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is dairy!!');
	}
}