'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  return {
    box: {
      backgroundColor: theme.canvasBgColor,
      fontFamily: theme.defaultFontFamily,
      fontSize: theme.defaultFontSize
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');