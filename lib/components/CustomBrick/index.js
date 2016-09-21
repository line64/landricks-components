'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    props.title ? _react2.default.createElement(
      'h1',
      { style: s.h1 },
      props.title
    ) : null,
    props.subtitle ? _react2.default.createElement(
      'h2',
      { style: s.h2 },
      props.subtitle
    ) : null,
    _react2.default.createElement(
      'div',
      { style: s.content },
      props.children
    )
  );
};