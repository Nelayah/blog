import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

import actions from './../../../actions/init.js';
import Sidebar from './Sidebar.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import CardItems from './CardItems.jsx';
import muiTheme from './../consts/muiTheme.js';
import ajax from './../../../lib/ajax';
import config from './../../../config';
import './../assets/sass/index.scss';

const {
	blogList
} = config.getIn(['address']).toJS();

injectTapEventPlugin();

@connect(state => ({
		...state
	}))
	// @muiThemeable() enable setting
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.clickCallback = this.clickCallback.bind(this);
	}
	static fetchData() {
		// ajax
		const currentIndex = this.props.pages.get('currentIndex');
		ajax.get(blogList + currentIndex)
			.then((resolve) => {
				console.log(resolve.text);
			});
	}
	clickCallback() {
		console.log('paginations');
	}
	handleToggle() {
		const { dispatch } = this.props;
		dispatch({ type: actions.getIn(['sidebar', 'toggle']) });
	}
	componentDidMount() {
		// console.log(this);
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="blog-wrap">
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
					<Navigation />
					<Sidebar/>
					<div className="blog-container">
						<div className="blogContent">
							<CardItems />
						</div>
						<div className="paginations">
							<RaisedButton 
								className="btn-previous"
								label="PREVIOUS"
								secondary={true}
							/>
							<div className="pages">1</div>
							<RaisedButton 
								className="btn-next"
								label="NEXT"
								secondary={true}
							/>
						</div>
					</div>
					<Footer />
				</div>
			</MuiThemeProvider>
		);
	}
}