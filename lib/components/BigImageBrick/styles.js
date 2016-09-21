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
      background: background,
      color: textColor,
      padding: padding || '4%',
      textAlign: 'center'
    },
    flexbox: {
      background: background,
      color: textColor,
      padding: padding || '4%',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bolder',
      maring: 0,
      marginBottom: '3%'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '5%'
    },
    imageContainer: {
      textAlign: 'center'
    },
    imageContainerOnLeft: {
      textAlign: 'center',
      display: 'inline-block',
      flex: 1
    },
    contentOnRight: {
      display: 'inline-block',
      textAlign: 'right',
      flex: 1
    },
    image: {
      width: '90%',
      maxHeight: '60vh'
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');