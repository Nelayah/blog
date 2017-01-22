import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';

import actions from './../../../actions/init.js';
import avatar from './../assets/avatar.jpg';
import './../assets/sass/sidebar.scss';

@connect(state => ({
	...state
}))
export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		const { dispatch } = this.props;
		dispatch({ type: actions.getIn(['sidebar', 'toggle']) });
	}
	render() {
		const toggle = this.props.sidebar.get('toggle');
		return (
			<div>
				<Drawer openSecondary={true} open={toggle} width={320}>
					<div className="sidebar-wrap">
						<div className="sidebar-container">
							<div className="avatar">
								<img src={avatar} alt="Hayalen"/>
								<p className="name">Hayalen</p>
								<p className="word">Not Fucking Excuse, Just Do It!</p>
							</div>
							<p className="summary">This is a testing...</p>
							<div className="contact">
									<p className="email">Email: hayalenelayah@outlook.com</p>
									<p className="github">
										<a href="https://github.com/Nelayah" alt="Hayalen's Github">Github</a>
									</p>
							</div>
						</div>
					</div>
				</Drawer>
				<div className="sidebar-toggle" data-status = {toggle ? 'active' : 'none'} onClick = { this.handleToggle }>
					<div className="sidebar-toggle-line-wrap">
						<span className="sidebar-toggle-line sidebar-toggle-line-first"></span>
						<span className="sidebar-toggle-line sidebar-toggle-line-middle"></span>
						<span className="sidebar-toggle-line sidebar-toggle-line-last"></span>
					</div>
				</div>
			</div>
		);
	}
}