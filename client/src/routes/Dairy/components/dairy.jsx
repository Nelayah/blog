import PageDetail from './../../PageDetail/components/pagedetail.jsx';
import { connect } from 'react-redux';

@connect(state => ({
	...state
}))
export default class Dairy extends PageDetail {
	static meta = true
}