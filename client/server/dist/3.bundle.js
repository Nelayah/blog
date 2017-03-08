exports.ids = [3];
exports.modules = {

/***/ 238:
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

var _cardItems = __webpack_require__(94);

var _cardItems2 = _interopRequireDefault(_cardItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dairy = function (_CardItems) {
	(0, _inherits3.default)(Dairy, _CardItems);

	function Dairy() {
		(0, _classCallCheck3.default)(this, Dairy);
		return (0, _possibleConstructorReturn3.default)(this, (Dairy.__proto__ || (0, _getPrototypeOf2.default)(Dairy)).apply(this, arguments));
	}

	(0, _createClass3.default)(Dairy, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			(0, _get3.default)(Dairy.prototype.__proto__ || (0, _getPrototypeOf2.default)(Dairy.prototype), 'componentDidMount', this).call(this);
			console.log('Here is dairy!!');
		}
	}]);
	return Dairy;
}(_cardItems2.default);

exports.default = Dairy;

/***/ })

};;