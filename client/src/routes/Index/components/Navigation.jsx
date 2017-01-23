import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import './../assets/sass/navigation.scss';

export default class Navigation extends Component {
	render(){
		return(
			<div className="nav-wrap">
				<div className="nav-container">
					<div className="banner"></div>
					<div className="tabs-wrap">
						<Tabs className="tabs-container">
							<Tab label="Article"/>
							<Tab label="Project"/>
							<Tab label="Dairy"/>
							<Tab label="About"/>
						</Tabs>
					</div>
				</div>
			</div>
			
		);
	}
}