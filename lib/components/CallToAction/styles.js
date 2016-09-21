'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var primaryColor = _getBandStyle.primaryColor;


  return {
    box: {
      color: (0, _styleHelpers.lightenColor)(primaryColor, 0.7),
      borderRadius: 3,
      backgroundColor: primaryColor,
      fontSize: '2em',
      padding: '15px',
      margin: '5px',
      borderStyle: 'none',
      borderBottom: 'solid 4px',
      borderColor: (0, _styleHelpers.darkenColor)(primaryColor, 0.3),
      textDecoration: 'none'
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');