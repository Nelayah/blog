import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import actions from './../../../actions/init.js';

import Sidebar from './Sidebar.jsx';

@connect(state => ({
		...state
}))
export default class Index extends Component {
		static fetchData() {
				// ajax
				console.log('type');
		}
		handleToggle() {
			const {dispatch} = this.props;
			dispatch({type: actions.getIn(['sidebar', 'toggle'])});
		}
		render() {
				return (
						<div className="word">
								<Helmet
										title="My Title"
										titleTemplate="MySite.com - %s"
										defaultTitle="My Default Title"
										meta={[
										{
												name: 'description',
												content: 'Helmet application'
										}, {
												property: 'og:type',
												content: 'article'
										}
								]}/>
								<RaisedButton label="Toggle Drawer" onTouchTap={this.handleToggle}/>
								<Sidebar/>
						</div>
				);
		}
}