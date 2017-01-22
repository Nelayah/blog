import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import actions from './../../../actions/init.js';
import Sidebar from './Sidebar.jsx';
import './../assets/sass/index.scss';

const $primary_color_dark = '#7b1fa2',
	$primary_color = '#9c27b0',
	$primary_color_light = '#e1bee7',
	$accent_color = '#cddc39',
	$primary_color_text = '#fff',
	$primary_text_color = '#212121',
	$secondary_text_color = '#757575',
	$divider_color = '#bdbdbd';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: $primary_color,
		primary2Color: $primary_color_dark,
		primary3Color: $primary_color_light,
		accent1Color: $accent_color,
		accent2Color: $secondary_text_color,
		textColor: $primary_text_color,
		alternateTextColor: $primary_color_text,
		borderColor: $divider_color,
		disabledColor: fade($primary_text_color, 0.3),
		clockCircleColor: fade($primary_text_color, 0.07)
	}
});

injectTapEventPlugin();

@connect(state => ({
	...state
}))
// @muiThemeable() enable setting
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}
	static fetchData() {
		// ajax
		console.log('type');
	}
	handleToggle() {
		const { dispatch } = this.props;
		dispatch({ type: actions.getIn(['sidebar', 'toggle']) });
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
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
					<RaisedButton className="toggleSidebar" label="Toggle Drawer" onTouchTap={this.handleToggle}/>
					<Sidebar/>
				</div>
			</MuiThemeProvider>
		);
	}
}