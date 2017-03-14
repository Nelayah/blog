import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import actions from './../../../actions/init.js';
import Sidebar from './Sidebar.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import './../assets/sass/index.scss';

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
		console.log('fetchdata');
		// ajax
/*		const currentIndex = this.props.pages.get('currentIndex');
		ajax.get(blogList + currentIndex)
			.then((resolve) => {
				console.log(resolve.text);
			});*/
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
						{ this.props.children }
					<Footer />
				</div>
		);
	}
}