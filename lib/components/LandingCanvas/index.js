'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calculateViewportFromWindow() {
  if (typeof window !== 'undefined') {
    var size = window.innerWidth;
    if (size < 544) return 'xs';
    if (size >= 544 && size < 768) return 'sm';
    if (size >= 768 && size < 992) return 'md';
    if (size >= 992 && size < 1200) return 'lg';
    if (size >= 1200) return 'xl';
  } else {
    return null;
  }
}

function renderAugmentedChildren(props) {
  return _react2.default.Children.map(props.children, function (child) {
    if (!child) return null;
    return _react2.default.cloneElement(child, { viewport: calculateViewportFromWindow() });
  });
}

var LandingCanvas = function LandingCanvas(props) {
  return _react2.default.createElement(
    'div',
    { style: props.wrapperStyle },
    renderAugmentedChildren(props)
  );
};

exports.default = LandingCanvas;