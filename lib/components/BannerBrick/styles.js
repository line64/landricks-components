'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var background = _getBandStyle.background;
  var textColor = _getBandStyle.textColor;
  var padding = _getBandStyle.padding;


  return {
    box: {
      backgroundImage: 'url(' + props.image + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      backgroundColor: background,
      backgroundRepeat: 'no-repeat',
      color: textColor,
      padding: padding || '10%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bolder',
      maring: 0,
      marginBottom: '3%',
      textAlign: 'right'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '3%',
      textAlign: 'right'
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');