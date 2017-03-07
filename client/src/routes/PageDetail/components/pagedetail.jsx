import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './../assets/sass/pagedetail.scss';

let cardMinHeight = window.innerHeight - 570;
cardMinHeight = cardMinHeight < 385 ? 385 : cardMinHeight;

const style = {
	cardStyle: {
		width: '1000px',
		margin: '20px auto 40px auto',
		minHeight: `${cardMinHeight}px`
	},
	cardTitleStyle: {
		textAlign: 'center'
	},
	chip: {
		style: { 
			margin: '0 20px', 
			height: '20px' 
		},
		labelStyle: { 
			fontSize: '12px', 
			lineHeight: '20px' 
		}
	}
};

class CustomChip extends Component {
	render() {
		return (
			<Chip style={ style.chip.style } labelStyle={ style.chip.labelStyle }>
				{ this.props.chip }
			</Chip>
		);
	}
}

export default class PageDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeIn: false
		};
	}
	componentDidMount() {
		this.setState({
			fadeIn: true
		});
	}
	render() {
		return (
			<div className={ this.state.fadeIn ? 'pageFadeIn' : ''}>
				<div className="PageDetail-wrap">
					<Card style={ style.cardStyle }>
						<CardTitle title="Card title" subtitle="2017年03月06日 13:48" style ={ style.cardTitleStyle }/>
						<div className="PageDetail-label">
							<CustomChip chip = { 'Text Chip' } />
							<CustomChip chip = { 'Text Chip' } />
						</div>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
							Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
							Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
						</CardText>
					</Card>
				</div>
			</div>
		);
	}
}