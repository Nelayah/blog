import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './../assets/sass/carditems.scss';

const style = {
	chip: {
		style: { 
			margin: '0 10px 0 15px',
			height: '20px' 
		},
		labelStyle: {
			fontSize: '12px', 
			lineHeight: '20px'
		}
	}
};

let test = [1, 2, 3, 4, 5];
export default class CardItems extends Component {
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
			<div className={ this.state.fadeIn ? 'cardFadeIn' : ''}>
				<Link to="/blog/20170307">
					{ test.map((element)=> 
						<div className="card-wrap" key={ element }>
							<Card>
								<CardTitle title="Card title" subtitle="2017年03月06日 13:48" />
								<div className="card-label">
									<Chip style={ style.chip.style } labelStyle={ style.chip.labelStyle }>
										Text Chip
									</Chip>
									<Chip style={ style.chip.style } labelStyle={ style.chip.labelStyle }>
										Text Chip
									</Chip>
								</div>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
									Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
									Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
								</CardText>
							</Card>
						</div>
					)}
				</Link>
			</div>
		);
	}

}