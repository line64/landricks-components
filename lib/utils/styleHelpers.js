'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.safeThemeFromProps = safeThemeFromProps;
exports.getBandStyle = getBandStyle;
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
  return _extends({}, DEFAULT_THEME.bandStyleDefault, theme['bandStyle' + bandStyleKey]);
}