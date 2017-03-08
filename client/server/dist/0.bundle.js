exports.ids = [0];
exports.modules = {

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(91);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pagedetail = __webpack_require__(240);

var _pagedetail2 = _interopRequireDefault(_pagedetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Project = function (_PageDetail) {
	(0, _inherits3.default)(Project, _PageDetail);

	function Project() {
		(0, _classCallCheck3.default)(this, Project);
		return (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || (0, _getPrototypeOf2.default)(Project)).apply(this, arguments));
	}

	(0, _createClass3.default)(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _get3.default)(Project.prototype.__proto__ || (0, _getPrototypeOf2.default)(Project.prototype), 'componentDidMount', this).call(this);
			console.log('Here is project!!');
		}
	}]);
	return Project;
}(_pagedetail2.default);

exports.default = Project;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(92);

var _Chip = __webpack_require__(93);

var _Chip2 = _interopRequireDefault(_Chip);

__webpack_require__(241);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardMinHeight = window.innerHeight - 570;
cardMinHeight = cardMinHeight < 385 ? 385 : cardMinHeight;

var style = {
	cardStyle: {
		width: '1000px',
		margin: '20px auto 40px auto',
		minHeight: cardMinHeight + 'px'
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

var CustomChip = function (_Component) {
	(0, _inherits3.default)(CustomChip, _Component);

	function CustomChip() {
		(0, _classCallCheck3.default)(this, CustomChip);
		return (0, _possibleConstructorReturn3.default)(this, (CustomChip.__proto__ || (0, _getPrototypeOf2.default)(CustomChip)).apply(this, arguments));
	}

	(0, _createClass3.default)(CustomChip, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Chip2.default,
				{ style: style.chip.style, labelStyle: style.chip.labelStyle },
				this.props.chip
			);
		}
	}]);
	return CustomChip;
}(_react.Component);

var PageDetail = function (_Component2) {
	(0, _inherits3.default)(PageDetail, _Component2);

	function PageDetail(props) {
		(0, _classCallCheck3.default)(this, PageDetail);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (PageDetail.__proto__ || (0, _getPrototypeOf2.default)(PageDetail)).call(this, props));

		_this2.state = {
			fadeIn: false
		};
		return _this2;
	}

	(0, _createClass3.default)(PageDetail, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				fadeIn: true
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.state.fadeIn ? 'pageFadeIn' : '' },
				_react2.default.createElement(
					'div',
					{ className: 'PageDetail-wrap' },
					_react2.default.createElement(
						_Card.Card,
						{ style: style.cardStyle },
						_react2.default.createElement(_Card.CardTitle, { title: 'Card title', subtitle: '2017\u5E7403\u670806\u65E5 13:48', style: style.cardTitleStyle }),
						_react2.default.createElement(
							'div',
							{ className: 'PageDetail-label' },
							_react2.default.createElement(CustomChip, { chip: 'Text Chip' }),
							_react2.default.createElement(CustomChip, { chip: 'Text Chip' })
						),
						_react2.default.createElement(
							_Card.CardText,
							null,
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
						)
					)
				)
			);
		}
	}]);
	return PageDetail;
}(_react.Component);

exports.default = PageDetail;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".PageDetail-wrap .PageDetail-label {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.pageFadeIn {\n  animation: pageFadeIn .8s ease-in;\n  opacity: 1; }\n\n@keyframes pageFadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/***/ })

};;