'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      backgroundColor = _safeThemeFromProps.backgroundColor,
      fontFamily = _safeThemeFromProps.fontFamily,
      baseFontSize = _safeThemeFromProps.baseFontSize;

  return {
    wrapper: {
      backgroundColor: backgroundColor,
      fontFamily: fontFamily,
      fontSize: baseFontSize
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');