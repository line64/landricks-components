'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderInput(props, s) {
  if (!props.placeholder) return null;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { style: s.inputField, placeholder: props.placeholder })
  );
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'h1',
      { style: s.h1 },
      props.title
    ),
    _react2.default.createElement(
      _.ContextPropagator,
      { theme: props.theme },
      renderInput(props, s)
    ),
    _react2.default.createElement(
      'h2',
      { style: s.h2 },
      props.subtitle
    )
  );
};