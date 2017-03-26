import React, { Component } from 'react';
import './../assets/sass/404.scss';
import config from './../../../config.js';
const {
	title,
	description
} = config.getIn(['notFound']).toJS();

export default class NotFound extends Component {
	render() {
		return(
			<div 
				className="notFound-wrap"
			>
				<div 
					className="notFound-container"
				>
					<i 
						className="material-icons"
					>
						not_interested
					</i>
					<h4>{ title }</h4>
					<p 
						className="description"
					>
						{ description }
					</p>
				</div>
			</div>
		);
	}
}