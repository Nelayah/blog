import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './../assets/sass/carditems.scss';
import actions from './../../../actions/init.js';

const style = {
	blogContainer: {
		width: '1000px', 
		margin: '0 auto'
	},
	cardWrap: {
		width: '1000px',
		margin: '20px auto 0 auto',
		cursor: 'pointer'
	},
	cardLabel: {
		display: 'flex',
		flex: 'flexWrap'
	},
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

@connect(state => ({
		...state
	}))
export default class CardItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeIn: false
		};
	}
	componentDidMount() {
		const {
			dispatch
		} = this.props;
		if (this.props.pages.get('isFirstLoad')) {
			dispatch({ type: actions.getIn(['pages', 'firstLoad']) });
			return;
		}
		this.setState({
			fadeIn: true
		});
	}
	render() {
		return (
			<div className="blog-container" style={ style.blogContainer }>
				<div className="blogContent">
					<div className={ this.state.fadeIn ? 'cardFadeIn' : ''}>
						<Link to="/articles/20170307/">
							{ test.map((element)=> 
								<div className="card-wrap" key={ element } style={ style.cardWrap }>
									<Card>
										<CardTitle title="Card title" subtitle="2017年03月06日 13:48" />
										<div className="card-label" style={ style.cardLabel }>
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
		);
	}

}