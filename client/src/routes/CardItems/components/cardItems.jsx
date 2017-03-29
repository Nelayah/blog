import React from 'react';
import { Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './../assets/sass/carditems.scss';
import Base from './../../Base/components/base.jsx';
import actions from './../../../actions/init.js';
import config from './../../../config.js';

const {
	progressStyle
} = config.getIn(['style']).toJS();

const style = {
	blogContainer: {
		position: 'relative',
		width: '1000px',
		minHeight: 'calc(100% - 515px)',
		margin: '0 auto'
	},
	cardWrap: {
		width: '1000px',
		margin: '20px auto 0 auto',
		cursor: 'pointer'
	},
	cardTitleStyle: {
		fontWeight: 'bold'
	},
	card: {
		padding: '10px'
	},
	cardLabel: {
		display: 'flex',
		flex: 'flexWrap'
	},
	chip: {
		style: {
			height: '20px',
			margin: '0 10px 0 15px'
		},
		labelStyle: {
			fontSize: '12px',
			lineHeight: '20px'
		}
	},
	cardText: {
		lineHeight: '30px'
	}
};

export default class CardItems extends Base {
	constructor(props) {
		super(props);
		this.state = {
			baseUrl: this.constructor.baseUrl,
			childrenUrl: this.constructor.childrenUrl,
			fadeIn: false
		};
		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}
	handlePrevious() {
		const response = this.props.pages.getIn(['content']).toJS();

		const {
			baseUrl
		} = this.state;

		if (response[location.pathname].previous) {
			const updatePathname = `${baseUrl + (parseInt(this.props.params.id) - 1)}/`;
			browserHistory.push(updatePathname);
			this.fetchdata(updatePathname);
		}
	}
	handleNext() {
		const response = this.props.pages.getIn(['content']).toJS();

		const {
			baseUrl
		} = this.state;

		if (response[location.pathname].next) {
			const updatePathname = `${baseUrl + (parseInt(this.props.params.id) + 1)}/`;
			browserHistory.push(updatePathname);
			this.fetchdata(updatePathname);
		}
	}
	componentDidMount() {
		const { dispatch } = this.props;
		const {
			title,
			description,
			keywords
		} = config.getIn(['website']).toJS();

		dispatch({ 
			type: actions.getIn(['website', 'metaupdate']),
			title,
			description,
			keywords
		});

		this.fetchdata(location.pathname);
		if (!this.props.pages.getIn(['isFirstLoad'])) {
			dispatch({ type: actions.getIn(['pages', 'firstload']) });
			return;
		}
		this.setState({
			fadeIn: true
		});
	}
	render() {
		const response = this.props.pages.getIn(['content']).toJS();

		const {
			childrenUrl
		} = this.state;

		return (
			<div 
				className="blog-container" 
				style={ style.blogContainer }
			>
				{ !response[location.pathname] ? 
					<CircularProgress 
						style={progressStyle}
					/> :
					<div>
						<div 
							className="blogContent"
						>
							<div 
								className={ this.state.fadeIn ? 'cardFadeIn' : ''}
							>
								{ response[location.pathname].results.map((element, index)=> 
									{
										const {
											pk,
											title,
											digest,
											tag
										} = element;

										return (
											<Link 
												key={ index }
												to={`${childrenUrl + pk}/`} 
											>
												<div 
													className="card-wrap" 
													style={ style.cardWrap }
												>
													<Card 
														style={ style.card }
													>
														<CardTitle 
															title={ title } 
															style={ style.cardTitleStyle }
														/>
														<div 
															className="card-label" 
															style={ style.cardLabel }
														>
															{ tag.map((tagElement, tagIndex) => 
																<Chip 
																	key={ tagIndex } 
																	style={ style.chip.style } 
																	labelStyle={ style.chip.labelStyle }
																>
																	{ tagElement }
																</Chip>
															)}
															
														</div>
														<CardText
															style= { style.cardText }
														>
															&emsp;&emsp;{ digest }
														</CardText>
													</Card>
												</div>
											</Link>);
									}
								)}
							</div>
						</div>
						<div 
							className="paginations"
						>
							<RaisedButton 
								className="btn-previous"
								label="PREVIOUS"
								secondary={true}
								disabled={response[location.pathname].previous ? false : true}
								onTouchTap = { this.handlePrevious }
							/>
							<div 
								className="pages"
							>
								{ this.props.params.id }
							</div>
							<RaisedButton 
								className="btn-next"
								label="NEXT"
								secondary={true}
								disabled={response[location.pathname].next ? false : true}
								onTouchTap = { this.handleNext }
							/>
						</div>
					</div> 
				}
			</div>
		);
	}

}