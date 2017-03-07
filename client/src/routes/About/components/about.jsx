import PageDetail from './../../PageDetail/components/pagedetail.jsx';

export default class Project extends PageDetail {
	componentDidMount() {
		super.componentDidMount();
		console.log('Here is about!!');
	}
}