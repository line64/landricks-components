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

function renderTitle(props, s) {
  if (!props.title) return null;
  return _react2.default.createElement(
    'h1',
    { style: s.h1 },
    props.title
  );
}

function renderSubtitle(props, s) {
  if (!props.subtitle) return null;
  return _react2.default.createElement(
    'h2',
    { style: s.h2 },
    props.subtitle
  );
}

function renderImageBottom(props, s) {

  return _react2.default.createElement(
    'section',
    { style: s.box },
    renderTitle(props, s),
    renderSubtitle(props, s),
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
    renderContentRight(props, s)
  );
}

function renderContentRight(props, s) {
  return _react2.default.createElement(
    'div',
    { style: s.contentOnRight },
    _react2.default.createElement(
      'h1',
      { style: s.h1 },
      props.title
    ),
    props.divider ? _react2.default.createElement('hr', { style: s.divider }) : null,
    _react2.default.createElement(
      'h2',
      { style: s.h2 },
      props.subtitle
    ),
    _react2.default.createElement(
      'div',
      { style: s.flex },
      props.items.map(function (item) {
        return renderItems(item, s);
      })
    )
  );
}

function renderItems(item, s) {
  return _react2.default.createElement(
    'div',
    { key: item.key },
    _react2.default.createElement('img', { src: item.src }),
    _react2.default.createElement(
      'h2',
      null,
      item.title
    ),
    _react2.default.createElement(
      'p',
      null,
      item.subtitle
    )
  );
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return renderContent(props, s);
};