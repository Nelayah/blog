import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

import './../../assets/sass/word.scss';

@connect(state => ({
		...state
}))
export default class Index extends Component {
		static fetchData() {
				return Promise.all([
						this
								.props
								.dispatch(asyncAction)
				]);
		}
		componentWillMount() {
				console.log("ok");
		}
		componentDidMount() {
				console.log("end!!")
		}
		render() {
				const {value_set} = this.props;
				return (
						<div className="word">
								<Helmet
										title="My Title"
										titleTemplate="MySite.com - %s"
										defaultTitle="My Default Title"
										meta={[
										{
												name: 'description',
												content: 'Helmet application'
										}, {
												property: 'og:type',
												content: 'article'
										}
								]}/>
								<p className="text">
										<Link to="/">This is Homepage.HAHAHAHAHAHAHAHAHAHAH</Link>
								</p>
								<p className="text">
										<Link to="/set">go to set</Link>
								</p>
								<p className="text">
										<Link to="/get">go to get</Link>
								</p>
								{this.props.children}
						</div>
				)
		}
}