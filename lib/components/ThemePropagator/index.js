'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderThemedChildren(props) {
  return _react2.default.Children.map(props.children, function (child) {
    if (!child) return null;
    return _react2.default.cloneElement(child, { theme: props.theme });
  });
}

var ThemePropagator = function ThemePropagator(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className, style: props.wrapperStyle },
    renderThemedChildren(props)
  );
};

ThemePropagator.propTypes = {
  wrapperStyle: _propTypes2.default.object,
  children: _propTypes2.default.node
};

exports.default = ThemePropagator;