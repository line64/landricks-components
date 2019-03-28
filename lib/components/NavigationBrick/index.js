'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styler = require('./styler');

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Fontawesome from 'react-fontawesome';


var NavigationBrick = function (_Component) {
	_inherits(NavigationBrick, _Component);

	function NavigationBrick(props) {
		_classCallCheck(this, NavigationBrick);

		var _this = _possibleConstructorReturn(this, (NavigationBrick.__proto__ || Object.getPrototypeOf(NavigationBrick)).call(this, props));

		_this.state = {
			open: false
		};
		return _this;
	}

	_createClass(NavigationBrick, [{
		key: 'renderItem',
		value: function renderItem(item, index, style) {
			var _this2 = this;

			return _react2.default.createElement(
				'li',
				{ onClick: function onClick() {
						return _this2.setState({ open: false });
					}, style: item.highlight ? style.itemHighlight : style.item, key: index },
				item.href ? _react2.default.createElement(
					'a',
					{ style: style.itemLink, href: item.href },
					item.label
				) : null,
				item.onClick ? _react2.default.createElement(
					'button',
					{ style: style.itemLink, onClick: function onClick() {
							return item.onClick();
						} },
					item.label
				) : null
			);
		}
	}, {
		key: 'renderItems',
		value: function renderItems(style, items) {
			var _this3 = this;

			if (!items) return null;
			return items.map(function (item, index) {
				return _this3.renderItem(item, index, style);
			});
		}
	}, {
		key: 'renderNavigation',
		value: function renderNavigation(style, items, isCollapsed) {
			return _react2.default.createElement(
				'ul',
				{ style: _extends({}, style.navigationContainer, isCollapsed ? style.collapsedContainer : {}) },
				this.renderItems(style, items)
			);
		}
	}, {
		key: 'renderLogo',
		value: function renderLogo(style) {
			var _props = this.props,
			    logo = _props.logo,
			    brand = _props.brand;

			return _react2.default.createElement(
				'span',
				{ style: style.collapsedHeader },
				logo ? _react2.default.createElement('img', { style: style.logo, src: logo }) : null,
				brand ? _react2.default.createElement(
					'span',
					{ style: style.brand },
					brand
				) : null
			);
		}
	}, {
		key: 'renderFullWidth',
		value: function renderFullWidth(style) {
			return _react2.default.createElement(
				'nav',
				{ style: style.box },
				_react2.default.createElement(
					'div',
					{ style: style.boxContent },
					_react2.default.createElement(
						'ul',
						{ style: style.logoContainer },
						this.renderLogo(style)
					),
					this.renderNavigation(style, this.props.items, false)
				)
			);
		}
	}, {
		key: 'renderCollapsed',
		value: function renderCollapsed(style) {
			return _react2.default.createElement(
				'nav',
				{ style: style.collapsed.box },
				this.renderLogo(style),
				this.renderCollapsedContent(style)
			);
		}
	}, {
		key: 'renderCollapsedContent',
		value: function renderCollapsedContent(style) {
			var visible = _extends({}, style.menuContent, this.state.open ? style.menuOpen : '');
			return _react2.default.createElement(
				'div',
				{ style: visible },
				this.renderNavigation(style, this.props.items, true)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var style = (0, _styler2.default)(this.props);
			var viewport = this.props.viewport;


			return viewport == 'xs' || viewport == 'sm' ? this.renderCollapsed(style) : this.renderFullWidth(style);
		}
	}]);

	return NavigationBrick;
}(_react.Component);

exports.default = NavigationBrick;