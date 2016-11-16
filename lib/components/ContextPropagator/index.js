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
    if (!child) return null;
    return _react2.default.cloneElement(child, { theme: props.theme, viewport: getViewportData() });
  });
}

var ContextPropagator = function ContextPropagator(props) {
  return _react2.default.createElement(
    'div',
    { style: props.wrapperStyle },
    renderThemedChildren(props)
  );
};

ContextPropagator.propTypes = {
  wrapperStyle: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
};

exports.default = ContextPropagator;