'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderIcon(icon, s) {
  if (!icon) return;
  return _react2.default.createElement(_reactFontawesome2.default, { name: icon, size: '4x' });
}

function renderImg(img, s) {
  if (!img) return null;
  return _react2.default.createElement('img', { src: img, styles: s.image });
}

function renderFeature(feature, s) {
  return _react2.default.createElement(
    'article',
    { key: feature.key, style: s.feature },
    renderIcon(feature.icon),
    renderImg(feature.img, s),
    _react2.default.createElement(
      'h5',
      { style: s.featureTitle },
      feature.title
    ),
    _react2.default.createElement(
      'p',
      { style: s.featureDescription },
      feature.description
    )
  );
};

function renderTitle(title, s) {
  if (title) return _react2.default.createElement(
    'h3',
    { style: s.title },
    title
  );

  return null;
};

function renderSubTitle(subtitle, s) {
  if (subtitle) return _react2.default.createElement(
    'h4',
    { style: s.subtitle },
    subtitle
  );

  return null;
};

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    renderTitle(props.title, s),
    props.divider ? _react2.default.createElement('hr', { style: s.divider }) : null,
    renderSubTitle(props.subtitle, s),
    _react2.default.createElement(
      'div',
      { style: s.featureContainer },
      props.features.map(function (f) {
        return renderFeature(f, s);
      })
    )
  );
};