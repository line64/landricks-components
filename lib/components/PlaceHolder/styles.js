'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styleHelpers = require('../../utils/styleHelpers');

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      primaryColor = _safeThemeFromProps.primaryColor;

  var wrapperStyle = props.wrapperStyle;


  return {
    wrapper: _extends({
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: primaryColor,
      display: 'flex',
      width: '100%',
      height: '100%',
      minHeight: '200px',
      justifyContent: 'center',
      alignItems: 'center'
    }, wrapperStyle)
  };
};