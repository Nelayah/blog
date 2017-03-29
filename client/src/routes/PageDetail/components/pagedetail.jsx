import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Chip from 'material-ui/Chip';
import Base from './../../Base/components/base.jsx';
import './../assets/sass/pagedetail.scss';
import actions from './../../../actions/init.js';
import config from './../../../config.js';
import showdown from 'showdown';

const converter = new showdown.Converter();
const {
	progressStyle
} = config.getIn(['style']).toJS();

const style = {
	cardStyle: {
		width: '1000px',
		margin: '20px auto 40px auto',
		padding: '20px'
	},
	cardTitleStyle: {
		fontWeight: 'bold',
		textAlign: 'center'
	},
	pageDetailWrap: {
		position: 'relative',
		minHeight: 'calc(100% - 515px)'
	},
	pageDetailLabel: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
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
	},
	cardTextStyle: {
		lineHeight: '40px'
	}
};

export default class PageDetail extends Base {
	constructor(props) {
		super(props);
		this.state = {
			baseUrl: this.constructor.baseUrl,
			fadeIn: false
		};
	}
	componentDidMount() {
		const { dispatch } = this.props;
		const response = this.props.pages.getIn(['content']).toJS();

		if (response[location.pathname] && !response[location.pathname].detail) {
			dispatch({
				type: actions.getIn(['website', 'metaupdate']),
				title: response[location.pathname].title,
				description: response[location.pathname].digest,
				keywords: response[location.pathname].tag.join(', ')
			});
		}
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
		return (
			<div 
				className={ this.state.fadeIn ? 'pageFadeIn pageDetail-wrap' : 'pageDetail-wrap'} 
				style={ style.pageDetailWrap }
			>
				{ !response[location.pathname] ? 
					<CircularProgress 
						style={progressStyle}
					/> :
					<Card 
						style={ style.cardStyle }
					>
						<CardTitle 
							title={ response[location.pathname].title } 
							style ={ style.cardTitleStyle }
						/>
						<div 
							className="pageDetail-label" 
							style={ style.pageDetailLabel }
						>
							{ response[location.pathname].tag.map((element, index) =>
								<Chip 
									key = { index }
									style={ style.chip.style } 
									labelStyle={ style.chip.labelStyle }
								>
									{ element }
								</Chip>
							)}
						</div>
						<CardText
							style= { style.cardTextStyle }
						>
							<div 
								className="markdown"
								dangerouslySetInnerHTML={{__html: converter.makeHtml(response[location.pathname].content) }}
							>
							</div>
						</CardText>
					</Card> }
			</div>
		);
	}
}