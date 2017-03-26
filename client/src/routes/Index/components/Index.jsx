import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import actions from './../../../actions/init.js';
import Sidebar from './Sidebar.jsx';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import './../assets/sass/index.scss';
import config from './../../../config.js';


injectTapEventPlugin();

@connect(state => ({
	...state
}))
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle() {
		const { dispatch } = this.props;
		dispatch({ type: actions.getIn(['sidebar', 'toggle']) });
	}
	componentDidMount() {
		console.log(config.getIn(['egg']));
	}
	render() {
		return (
			<div className="blog-wrap">
				<Helmet>
					<title>{ this.props.website.getIn(['title']) }</title>
					<meta 
						property="og:type" 
						content="article" 
					/>
					<meta 
						content={ this.props.website.getIn(['keywords']) } 
						name="keywords" 
					/>
					<meta 
						content={ this.props.website.getIn(['description']) } 
						name="description" 
					/>
				</Helmet>
				<Navigation />
				<Sidebar/>
				{ this.props.children }
				<Footer />
			</div>
		);
	}
}