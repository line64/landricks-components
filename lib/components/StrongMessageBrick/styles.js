'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      textColor = _safeThemeFromProps.textColor;

  var messageLevel1Style = props.messageLevel1Style,
      messageLevel2Style = props.messageLevel2Style,
      contentStyle = props.contentStyle;


  var styles = {
    messageLevel1: _extends({
      fontSize: '2.25em',
      fontWeight: 'bold',
      margin: '1.5%',
      color: textColor
    }, messageLevel1Style),
    messageLevel2: _extends({
      fontSize: '1.2em',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '1.5%',
      color: textColor
    }, messageLevel2Style),
    content: _extends({
      textAlign: 'center'
    }, contentStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');