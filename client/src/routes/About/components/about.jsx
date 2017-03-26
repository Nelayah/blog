import PageDetail from './../../PageDetail/components/pagedetail.jsx';
import { connect } from 'react-redux';

@connect(state => ({
	...state
}))
export default class About extends PageDetail {
	static meta = true
}