'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderIcon(icon, s) {
  if (!icon) return;
  return _react2.default.createElement(_reactFontawesome2.default, { name: icon });
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'a',
    { key: props.key, href: props.link, target: '_blank', style: s.box },
    renderIcon(props.icon),
    ' ',
    props.text
  );
};