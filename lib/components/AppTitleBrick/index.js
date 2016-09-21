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

function renderLogo(props, s) {
  if (props.title) {
    return _react2.default.createElement(
      'div',
      { style: s.companyName },
      _react2.default.createElement('img', { src: props.logo, style: s.logo }),
      _react2.default.createElement(
        'h4',
        { style: s.h4 },
        props.title
      )
    );
  }
  return null;
};

function renderImage(img, s) {
  if (!img) return null;
  return _react2.default.createElement('img', { src: img, style: s.image });
};

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'div',
      { style: s.textColumn },
      renderLogo(props, s),
      _react2.default.createElement(
        'h2',
        { style: s.h2 },
        props.subtitle
      ),
      _react2.default.createElement(
        _.ContextPropagator,
        null,
        _react2.default.createElement(
          'div',
          { style: s.buttons },
          props.buttons
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { style: s.imageColumn },
      renderImage(props.image, s)
    )
  );
};