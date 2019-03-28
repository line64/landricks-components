'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureItem = function (_Component) {
  _inherits(FeatureItem, _Component);

  function FeatureItem() {
    _classCallCheck(this, FeatureItem);

    return _possibleConstructorReturn(this, (FeatureItem.__proto__ || Object.getPrototypeOf(FeatureItem)).apply(this, arguments));
  }

  _createClass(FeatureItem, [{
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

      // return (<FontAwesome name={ props.icon } style={ style.icon } />);
    }
  }, {
    key: 'render',
    value: function render() {

      var s = (0, _styles2.default)(this.props);

      var _props = this.props,
          icon = _props.icon,
          image = _props.image,
          title = _props.title,
          description = _props.description;


      return _react2.default.createElement(
        'div',
        _extends({}, this.props, { style: s.wrapper }),
        image ? _react2.default.createElement('img', { src: image, style: s.image }) : null,
        _react2.default.createElement(
          'h5',
          { style: s.title },
          title
        ),
        _react2.default.createElement(
          'p',
          { style: s.description },
          description
        )
      );
    }
  }]);

  return FeatureItem;
}(_react.Component);

FeatureItem.propTypes = {
  icon: _propTypes2.default.string,
  image: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
};

exports.default = FeatureItem;