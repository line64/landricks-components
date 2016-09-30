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

function renderImage(img, s) {
  if (!img) return null;
  return _react2.default.createElement('img', { src: img, style: s.image });
};

function renderLogo(props, s) {
  if (props.logoUrl) {
    return _react2.default.createElement('img', { src: props.logoUrl, style: s.logo });
  }
  if (props.logo) return props.logo;
  return null;
}

function renderTitle(props, s) {
  if (props.titleText) {
    return _react2.default.createElement(
      'h1',
      { style: s.title },
      props.titleText
    );
  }
  if (props.title) return props.title;
  return null;
}

function renderSubtitle(props, s) {
  if (props.subtitleText) {
    return _react2.default.createElement(
      'h1',
      { style: s.subtitle },
      props.subtitleText
    );
  }
  if (props.subtitle) return props.subtitle;
  return null;
}

function renderVideo(props, s) {
  if (props.videoUrl) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        props.videoTitle
      ),
      _react2.default.createElement('video', { style: s.video, src: props.videoUrl, controls: true })
    );
  }
  if (props.video) return props.video;
  return null;
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'div',
      { style: s.textColumn },
      renderLogo(props, s),
      renderTitle(props, s),
      renderSubtitle(props, s),
      props.content
    ),
    _react2.default.createElement(
      'div',
      { style: s.videoColumn },
      renderImage(props.image, s),
      renderVideo(props, s)
    )
  );
};