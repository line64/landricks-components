'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var backgroundColor = _getBandStyle.backgroundColor;
  var textColor = _getBandStyle.textColor;
  var contentStyle = _getBandStyle.contentStyle;
  var titleStyle = _getBandStyle.titleStyle;
  var subtitleStyle = _getBandStyle.subtitleStyle;
  var viewport = props.viewport;
  var mode = props.mode;


  var styles = {
    box: _extends({
      background: backgroundColor,
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    }, contentStyle, props.contentStyle),
    h1: _extends({
      fontSize: '3rem',
      fontWeight: 'bold'
    }, titleStyle, props.titleStyle),
    h2: _extends({
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    }, subtitleStyle, props.subtitleStyle)
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');