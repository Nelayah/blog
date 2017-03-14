import PageDetail from './../../PageDetail/components/pagedetail.jsx';

export default class About extends PageDetail {
	static fetchData() {
		console.log('Here is about!!');
	}
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is about!!');
	}
}