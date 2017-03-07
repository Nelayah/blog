import PageDetail from './../../PageDetail/components/pagedetail.jsx';

export default class Blog extends PageDetail {
	componentDidMount() {
		super.componentDidMount();
		console.log(this.props.params.blogId);
	}
}