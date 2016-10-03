'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleClick(onClick, args) {
  return function (event) {
    event.preventDefault();
    onClick(args);
  };
}

function renderImage(s, props) {
  var src = props.imageUrl || props.image;
  return _react2.default.createElement('img', { style: s.image, src: src });
}

function renderContent(s, props) {
  if (props.buttons) {
    return props.buttons.map(function (button, index) {
      return _react2.default.createElement(
        'a',
        { key: index, href: '#', onClick: handleClick(button.onClick), style: s.button },
        button.label
      );
    });
  }
  return props.content;
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'div',
      { style: s.textColumn },
      _react2.default.createElement(
        'h1',
        { style: s.h1 },
        props.title
      ),
      _react2.default.createElement(
        'h2',
        { style: s.h2 },
        props.subtitle
      ),
      renderContent(s, props)
    ),
    _react2.default.createElement(
      'div',
      { style: s.imageColumn },
      renderImage(s, props)
    )
  );
};