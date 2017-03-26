import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import './../assets/sass/footer.scss';


export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	render() {
		return (
			<div className="footer-wrap">
				<div className="footer-container">
					<div className="footer-blocks">
						<FloatingActionButton className="backTop" onClick={ this.handleClick }>
							<i className="material-icons">keyboard_arrow_up</i>
						</FloatingActionButton>
						<p className="text">Copyright © 2017 Hayalen</p>
					</div>
				</div>
			</div>
		);
	}
}