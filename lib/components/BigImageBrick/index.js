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

function renderContent(props, s) {

  if (props.imageOnLeft) {

    return renderImageOnLeft(props, s);
  }

  return renderImageBottom(props, s);
}

function renderImageBottom(props, s) {

  return _react2.default.createElement(
    'section',
    { style: s.box },
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
    _react2.default.createElement(
      'div',
      { style: s.imageContainer },
      _react2.default.createElement('img', { style: s.image, src: props.image })
    )
  );
}

function renderImageOnLeft(props, s) {

  return _react2.default.createElement(
    'section',
    { style: s.flexbox },
    _react2.default.createElement(
      'div',
      { style: s.imageContainerOnLeft },
      _react2.default.createElement('img', { style: s.image, src: props.image })
    ),
    _react2.default.createElement(
      'div',
      { style: s.contentOnRight },
      _react2.default.createElement(
        'h1',
        { style: s.h1 },
        props.title
      ),
      _react2.default.createElement(
        'h2',
        { style: s.h2 },
        props.subtitle
      )
    )
  );
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return renderContent(props, s);
};