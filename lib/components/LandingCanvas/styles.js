'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);

  var backgroundColor = _safeThemeFromProps.backgroundColor;
  var fontFamily = _safeThemeFromProps.fontFamily;
  var baseFontSize = _safeThemeFromProps.baseFontSize;


  return {
    wrapper: {
      backgroundColor: backgroundColor,
      fontFamily: fontFamily,
      fontSize: baseFontSize
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');