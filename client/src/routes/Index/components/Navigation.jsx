import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Tabs, Tab } from 'material-ui/Tabs';
import './../assets/sass/navigation.scss';
import config from './../../../config.js';

import logo from './../assets/images/logo.png';

const {
	quotes
} = config.getIn(['profile']).toJS();

const {
	taps
} = config.getIn(['url']).toJS();

const tabStyle = {
	height: '64px'
};


@connect(state => ({
		...state
	}))
export default class Navigation extends Component {
	constructor(props) {
		super(props);
		let value = this.props.pages.getIn(['tapsHighlight']);
		this.state = {
			value
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(value) {
		this.setState({
			value
		});
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
					<div className="tabs-wrap">
						<Tabs className="tabs-container" value = { this.props.pages.getIn(['tapsHighlight']) } onChange={this.handleChange}>
							<Tab 
								icon={<i className="material-icons">home</i>}
								label="Article"
								style = { tabStyle }
								onActive = { 
									() => {
										browserHistory.push(`/${config.getIn(['url', 'base', 'articleList'])}/1/`);
									}
								}
								value = { taps.article }
							/>
							<Tab 
								icon={<i className="material-icons">code</i>}
								label="Project"
								style = { tabStyle }
								onActive = { 
									() => {
										browserHistory.push(`/${config.getIn(['url', 'base', 'project'])}`);
									}
								}
								value = { taps.project }
							/>
							<Tab 
								icon={<i className="material-icons">access_time</i>}
								label="Dairy"
								style = { tabStyle }
								onActive = { 
									() => {
										browserHistory.push(`/${config.getIn(['url', 'base', 'dairyList'])}/1/`);
									}
								}
								value = { taps.dairy }
							/>
							<Tab 
								icon={<i className="material-icons">perm_contact_calendar</i>}
								label="About"
								style = { tabStyle }
								onActive = { 
									() => {
										browserHistory.push(`/${config.getIn(['url', 'base', 'about'])}`);
									}
								}
								value = { taps.about }
							/>
						</Tabs>
					</div>
				</div>
			</div>

		);
	}
}