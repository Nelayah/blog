import React, { Component } from 'react';

import './../assets/sass/get.scss';
import png from './../assets/images/test.png';

export default class Get extends Component {
	render() {
		return(
			<div className="word_0">
				<img src={ png } alt="" />
				sslThis is a word.This is a word.This is a word.This is a word.
			</div>
		)
	}
}