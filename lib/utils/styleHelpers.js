'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_THEME = undefined;
exports.safeThemeFromProps = safeThemeFromProps;
exports.getBandStyle = getBandStyle;
exports.lightenColor = lightenColor;
exports.darkenColor = darkenColor;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = exports.DEFAULT_THEME = {
  canvasBgColor: '#ffffff',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleDefault: {
    primaryColor: '#4db6ac',
    textColor: '#ffffff'
  }
};

function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

function getBandStyle(theme, bandStyleKey) {
  return theme['bandStyle' + bandStyleKey] || DEFAULT_THEME.bandStyleDefault;
}

function lightenColor(color, amount) {
  return (0, _color2.default)(color).lighten(amount).rgbString();
}

function darkenColor(color, amount) {
  return (0, _color2.default)(color).darken(amount).rgbString();
}