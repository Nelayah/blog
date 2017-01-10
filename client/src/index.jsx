import { Component } from 'react';
import { render } from 'react-dom';

class Index extends Component {
	render() {
		return(
			<div className="wrap">Hello world!</div>
		)
	}
}
render(<Index />, document.getElementById('root'));