import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import avatar from './../assets/avatar.jpg';

@connect(state => ({
		...state
}))
export default class Sidebar extends Component {

		render() {
				const toggle = this.props.sidebar.get('toggle');
				return (
						<Drawer open={toggle}>
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
				);
		}
}