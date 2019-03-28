'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      backgroundColor = _safeThemeFromProps.backgroundColor,
      textColor = _safeThemeFromProps.textColor;

  var contentStyle = props.contentStyle,
      titleStyle = props.titleStyle,
      subtitleStyle = props.subtitleStyle,
      itemStyle = props.itemStyle,
      itemTextStyle = props.itemTextStyle,
      itemIconStyle = props.itemIconStyle,
      itemImageStyle = props.itemImageStyle;


  var styles = {
    container: _extends({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap'
    }, contentStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');