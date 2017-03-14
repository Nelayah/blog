import PageDetail from './../../PageDetail/components/pagedetail.jsx';

export default class Articles extends PageDetail {
	componentDidMount() {
		super.componentDidMount();
		console.log(this.props.params.blogId);
	}
}