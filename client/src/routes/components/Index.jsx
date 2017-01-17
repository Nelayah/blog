import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './../../assets/sass/word.scss';
import png from './../../assets/images/test.png';

@connect(
	state => ({...state })
)
export default class Index extends Component {
	static type = 'archives';
	componentWillMount() {
		console.log("ok");
	}
	componentDidMount() {
		console.log("end!!")
	}
	render() {
		const {
			value_set
		} = this.props;
		return (
			<div className="word">
				<p className="text"><Link to="/">This is Homepage.</Link></p>
				<p className="text"><Link to="/set">go to set</Link></p>
				<p className="text"><Link to="/get">go to get</Link></p>
				{this.props.children}
			</div>
		)
	}
}