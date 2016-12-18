'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);

  var textColor = _safeThemeFromProps2.textColor;
  var primaryColor = _safeThemeFromProps2.primaryColor;
  var wrapperStyle = props.wrapperStyle;
  var iconStyle = props.iconStyle;
  var labelStyle = props.labelStyle;


  var styles = {
    wrapper: _extends({}, getWrapperForDesign(props), {
      padding: '1.7%',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '1%',
      fontSize: 'inherit'
    }, wrapperStyle),
    icon: _extends({
      fontSize: '1em'
    }, iconStyle),
    label: _extends({
      fontSize: '1em',
      fontWeight: 'bold'
    }, labelStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

function getWrapperForDesign(props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);

  var textColor = _safeThemeFromProps.textColor;
  var primaryColor = _safeThemeFromProps.primaryColor;
  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
  var objectDesign = _safeThemeFromProps.objectDesign;


  switch (objectDesign) {
    case 'rounded-solid':
      return {
        backgroundColor: primaryColor,
        color: primaryContrastColor,
        borderStyle: 'none',
        borderRadius: '30px'
      };
    case 'rounded-outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: primaryColor,
        color: primaryColor,
        borderStyle: 'solid',
        borderRadius: '30px'
      };
    case 'square-outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: primaryColor,
        color: primaryColor,
        borderStyle: 'solid',
        borderRadius: 0
      };
    default:
      //square-solid
      return {
        backgroundColor: primaryColor,
        color: primaryContrastColor,
        borderStyle: 'none',
        borderRadius: 0
      };
  }
}