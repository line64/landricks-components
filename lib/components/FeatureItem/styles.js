'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props),
      textColor = _safeThemeFromProps2.textColor,
      primaryColor = _safeThemeFromProps2.primaryColor;

  var wrapperStyle = props.wrapperStyle,
      iconStyle = props.iconStyle,
      titleStyle = props.titleStyle,
      descriptionStyle = props.descriptionStyle,
      imageStyle = props.imageStyle;


  var styles = {
    wrapper: _extends({}, getWrapperForDesign(props), {
      padding: '1.7%',
      margin: '1%',
      textAlign: 'center',
      minWidth: '200px',
      flex: 1
    }, wrapperStyle),
    icon: _extends({
      fontSize: '3em'
    }, iconStyle),
    image: _extends({
      width: '6em'
    }, imageStyle),
    title: _extends({
      fontSize: '1em',
      fontWeight: 'bold',
      margin: '0.5%'
    }, titleStyle),
    description: _extends({
      fontSize: '0.8em',
      fontWeight: 'normal',
      margin: '0.5%'
    }, descriptionStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

function getWrapperForDesign(props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      textColor = _safeThemeFromProps.textColor,
      primaryColor = _safeThemeFromProps.primaryColor,
      primaryContrastColor = _safeThemeFromProps.primaryContrastColor,
      objectDesign = _safeThemeFromProps.objectDesign;

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