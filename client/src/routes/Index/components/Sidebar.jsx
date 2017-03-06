import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

import config from './../../../config.js';
import actions from './../../../actions/init.js';
import './../assets/sass/sidebar.scss';

const {
	name,
	motto,
	introduce_zh,
	introduce_en,
	summary,
	contact
} = config.getIn(['profile']).toJS();

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
		const { dispatch } = this.props;
		const toggle = this.props.sidebar.get('toggle');
		return (
			<div>
				<Drawer 
					open={ toggle } 
					width={ 280 } 
					docked={ false } 
					onRequestChange={ () => dispatch({ type: actions.getIn(['sidebar', 'toggle']) }) }
				>
					<div className="sidebar-wrap" data-status = {toggle ? 'active' : 'none'}>
						<div className="sidebar-container">
							<div className="avatar-wrap">
								<Avatar className="avatar" size={ 54 }>H</Avatar>
								<p className="name">{ name }</p>
								<p className="word">{ motto }</p>
							</div>

							<p className="introduce-zh">{ introduce_zh }</p>
							<p className="introduce-en">{ introduce_en }</p>
							<p className="summary">{ summary }</p>
							<div className="contact">
									<p className="email"><i className="material-icons">email</i> : { contact.email }</p>
									<RaisedButton 
										className="btn-github"
										href={ contact.github }
										target="_blank"
										label="GitHub Link"
										secondary={true}
									/>
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