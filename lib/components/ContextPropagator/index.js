'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportData() {
  var viewport = 'xs';
  if (window.innerWidth >= 544) viewport = 'sm';
  if (window.innerWidth >= 768) viewport = 'md';
  if (window.innerWidth >= 992) viewport = 'lg';
  if (window.innerWidth >= 1200) viewport = 'xl';
  return viewport;
}

function renderThemedChildren(props) {

  return _react2.default.Children.map(props.children, function (child) {
    return _react2.default.cloneElement(child, { theme: props.theme, viewport: getViewportData() });
  });
}

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    renderThemedChildren(props)
  );
};