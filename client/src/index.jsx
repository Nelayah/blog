import { Component } from 'react';
import { render } from 'react-dom';

import Child1 from './components/child1.jsx'

import './assets/sass/test.scss';
import testPng from './assets/images/test.png';

class Index extends Component {
	render() {
		return(
			<div className="wrap">
				<p className="text">Hello world!</p>
				<img src={ testPng } alt="" />
				<Child1 />
			</div>
		)
	}
}
render(<Index />, document.getElementById('root'));