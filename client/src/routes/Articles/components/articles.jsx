import PageDetail from './../../PageDetail/components/pagedetail.jsx';
import { connect } from 'react-redux';

@connect(state => ({
	...state
}))
export default class Articles extends PageDetail {
	static meta = true
}