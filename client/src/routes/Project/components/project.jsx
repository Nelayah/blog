import PageDetail from './../../PageDetail/components/pagedetail.jsx';
import { connect } from 'react-redux';

@connect(state => ({
	...state
}))
export default class Project extends PageDetail {
	static meta = true
}