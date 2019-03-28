'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeThemeFromProps = safeThemeFromProps;
var DEFAULT_THEME = exports.DEFAULT_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '20px',
  backgroundColor: '#4051B5',
  primaryColor: '#E91C63',
  textColor: '#FFFFFF'
};

function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}