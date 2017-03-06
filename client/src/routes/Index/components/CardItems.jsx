import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './../assets/sass/carditems.scss';

let test = [1, 2, 3, 4, 5];
export default class CardItems extends Component {
	render() {
		return (
			<div className="s">
				{ test.map((element)=> 
					<div className="card-wrap" key={ element }>
						<Card>
							<CardTitle title="Card title" subtitle="2017年03月06日 13:48" />
							<Chip style={{ margin: '0 20px', height: '20px' }} labelStyle={{ fontSize: '12px', lineHeight: '20px' }}>
								Text Chip
							</Chip>
							<CardText>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
								Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
								Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
							</CardText>
						</Card>
					</div>
				)}
			</div>
		);
	}

}