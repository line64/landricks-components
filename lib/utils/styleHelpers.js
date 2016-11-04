'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_THEME = undefined;
exports.safeThemeFromProps = safeThemeFromProps;
exports.getBandStyle = getBandStyle;

var _lodash = require('lodash');

var DEFAULT_THEME = exports.DEFAULT_THEME = {
  canvasBgColor: '#FAFAFA',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleDefault: {
    backgroundColor: '#4051B5',
    textColor: '#FFFFFF',
    activeColor: '#E91C63'
  }
};

function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

function getBandStyle(theme, bandStyleKey) {
  return (0, _lodash.assign)({}, DEFAULT_THEME.bandStyleDefault, theme['bandStyle' + bandStyleKey] || {});
}