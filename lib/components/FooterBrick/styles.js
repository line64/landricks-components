'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var background = _getBandStyle.background;
  var textColor = _getBandStyle.textColor;
  var primaryColor = _getBandStyle.primaryColor;


  return {
    box: {
      background: background,
      color: textColor,
      padding: '10%',
      paddingTop: '2%',
      paddingBottom: '2%',
      textAlign: 'center'
    },
    container: {
      display: 'flex'
    },
    noList: {
      listStyle: 'none'
    },
    text: {
      textDecoration: 'none',
      fontSize: '1rem',
      color: textColor
    },
    textColumn1: {
      flex: 1,
      textAlign: 'left'
    },
    textColumn2: {
      flex: 1,
      textAlign: 'justify'
    },
    textColumn3: {
      flex: 1,
      textAlign: 'right'
    },
    icon: {
      fontSize: '1.5rem',
      margin: '5px',
      width: 45,
      textAlign: 'left'
    },
    simpleList: {
      margin: 0,
      listStyle: 'none',
      textAlign: 'left'
    },
    simpleListItem: {
      display: 'inline-block',
      textAlign: 'left',
      fontSize: '1rem',
      padding: '0 12px',
      borderRight: '2px solid #FFF',
      lineHeight: '1rem'
    },
    simpleCopy: {
      textAlign: 'left',
      fontSize: '1rem',
      marginTop: '-4px'
    },
    simpleLogo: {
      position: 'relative',
      marginLeft: '50px',
      marginRight: '2px',
      top: '10px',
      height: '40px'
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');