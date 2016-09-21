'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'div',
    { style: s.box },
    _react2.default.createElement(_reactHelmet2.default, {
      htmlAttributes: { style: 'font-size: 18px' },
      link: [{ rel: 'stylesheet', href: props.fontStylesheet || 'https://fonts.googleapis.com/css?family=Open+Sans' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }]
    }),
    _react2.default.createElement(
      _.ContextPropagator,
      { theme: props.theme },
      props.children
    )
  );
};