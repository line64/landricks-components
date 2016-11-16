'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CallToAction = function (_Component) {
  _inherits(CallToAction, _Component);

  function CallToAction() {
    _classCallCheck(this, CallToAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CallToAction).apply(this, arguments));
  }

  _createClass(CallToAction, [{
    key: 'renderLabel',
    value: function renderLabel(style, props) {

      if (props.renderLabel) {
        return props.renderLabel(style, props);
      }

      if (!props.label) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        { style: style.label },
        props.label
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(style, props) {

      if (props.renderIcon) {
        return props.renderIcon(style, props);
      }

      if (!props.icon) {
        return null;
      }

      return _react2.default.createElement(_reactFontawesome2.default, { name: props.icon, style: style.icon });
    }
  }, {
    key: 'renderButton',
    value: function renderButton(style, props) {

      if (props.renderButton) {
        return props.renderButton(style, props);
      }

      return _react2.default.createElement(
        'button',
        { onClick: props.onClick, style: style.wrapper },
        this.renderIcon(style, props),
        ' ',
        this.renderLabel(style, props)
      );
    }
  }, {
    key: 'renderAnchor',
    value: function renderAnchor(style, props) {

      if (props.renderAnchor) {
        return props.renderAnchor(style, props);
      }

      return _react2.default.createElement(
        'a',
        { href: props.href, style: style.wrapper },
        this.renderIcon(style, props),
        ' ',
        this.renderLabel(style, props)
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var s = (0, _styles2.default)(this.props);

      if (this.props.href) {
        return this.renderAnchor(s, this.props);
      } else {
        return this.renderButton(s, this.props);
      }
    }
  }]);

  return CallToAction;
}(_react.Component);

CallToAction.propTypes = {
  href: _react2.default.PropTypes.string,
  icon: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func
};

exports.default = CallToAction;