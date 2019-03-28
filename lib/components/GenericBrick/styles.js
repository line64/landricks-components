'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      fontFamily = _safeThemeFromProps.fontFamily,
      baseFontSize = _safeThemeFromProps.baseFontSize,
      backgroundColor = _safeThemeFromProps.backgroundColor,
      textColor = _safeThemeFromProps.textColor;

  var backgroundImage = props.backgroundImage,
      wrapperStyle = props.wrapperStyle,
      contentStyle = props.contentStyle,
      headerStyle = props.headerStyle,
      titleStyle = props.titleStyle,
      subtitleStyle = props.subtitleStyle;


  var styles = {
    wrapper: _extends({
      fontFamily: fontFamily,
      fontSize: baseFontSize,
      backgroundColor: backgroundColor,
      backgroundImage: 'url(' + backgroundImage + ')',
      backgroundSize: 'cover',
      color: textColor,
      padding: '5%'
    }, wrapperStyle),
    content: _extends({}, contentStyle),
    header: _extends({
      textAlign: 'center'
    }, headerStyle),
    title: _extends({
      margin: '1%',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    }, titleStyle),
    subtitle: _extends({
      margin: '1%',
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    }, subtitleStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');