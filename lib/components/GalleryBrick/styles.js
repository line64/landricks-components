'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props),
      textColor = _safeThemeFromProps2.textColor,
      primaryColor = _safeThemeFromProps2.primaryColor,
      fontSize = _safeThemeFromProps2.fontSize,
      indicatorColor = _safeThemeFromProps2.indicatorColor,
      controlsColor = _safeThemeFromProps2.controlsColor;

  var wrapperStyle = props.wrapperStyle,
      iconStyle = props.iconStyle,
      titleStyle = props.titleStyle,
      descriptionStyle = props.descriptionStyle,
      itemStyle = props.itemStyle,
      pageWrapperStyle = props.pageWrapperStyle;


  var styles = {
    wrapper: _extends({}, getWrapperForDesign(props), {
      textAlign: 'center',
      minHeigh: '200px',
      display: 'flex',
      padding: '2%',
      flexDirection: 'row',
      flex: 1
    }, wrapperStyle),
    container: {
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: primaryColor || '#fff'
    },
    pageWrapper: _extends({
      flex: 5,
      display: 'flex'
    }, pageWrapperStyle),
    controls: {
      alignSelf: 'center',
      margin: '0 15px',
      fontSize: '2.5rem',
      color: controlsColor || '#000'
    },
    itemWrapper: {
      flex: 1,
      margin: '20px',
      flexGrow: 1,
      flexBasis: 'auto',
      alignSelf: 'center'
    },
    item: _extends({
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 100,
      minWidth: 100
    }, itemStyle),
    center: _defineProperty({
      textAlign: 'center',
      alignSelf: 'center',
      padding: '25px',
      backgroundColor: primaryColor || '#fff'
    }, 'padding', 0),
    indicator: {
      margin: '0 5px',
      color: indicatorColor || "#000"
    }
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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