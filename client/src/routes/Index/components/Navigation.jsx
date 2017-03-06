import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import throttle from 'lodash/throttle';

import './../assets/sass/navigation.scss';
import config from './../../../config.js';
import logo from './../assets/images/logo.png';

const {
	quotes
} = config.getIn(['profile']).toJS();

const tabStyle = {
	height: '64px'
};

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFixed: false
		};
		this.handleFix = this.handleFix.bind(this);
	}
	handleFix() {
		if (window.pageYOffset > 300 && !this.state.isFixed) {
			this.setState({
				isFixed: true
			});
			return;
		}
		if (window.pageYOffset < 300 && this.state.isFixed) {
			this.setState({
				isFixed: false
			});
			return;
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', throttle(this.handleFix, 100));
	}
	render() {
		return (
			<div className="nav-wrap">
				<div className="nav-container">
					<div className="banner">
						<div className="logo">
							<img src={ logo } alt="" className="logo_img"/>
							<p className="logo_text">HAYALEN BLOG</p>
						</div>
						<div className="banner-container">
							<div className="left">
								<div className="outer">
									<div className="inter">
										<div className="circle"></div>
									</div>
								</div>
							</div>
							<div className="right">
								<div className="text-wrap">
									<h4 className="title">{ quotes.title }</h4>
									<p className="description">{ quotes.description }</p>
								</div>
							</div>
						</div>
					</div>
					<div className="tabs-wrap" data-fixed = {this.state.isFixed ? 'on' : 'off'}>
						<Tabs className="tabs-container">
							<Tab 
								icon={<i className="material-icons">home</i>}
								label="Article"
								style = { tabStyle }
							/>
							<Tab 
								icon={<i className="material-icons">code</i>}
								label="Project"
								style = { tabStyle }
							/>
							<Tab 
								icon={<i className="material-icons">access_time</i>}
								label="Dairy"
								style = { tabStyle }
							/>
							<Tab 
								icon={<i className="material-icons">perm_contact_calendar</i>}
								label="About"
								style = { tabStyle }
							/>
						</Tabs>
					</div>
				</div>
			</div>

		);
	}
}