'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var background = _getBandStyle.background;
  var baseColor = _getBandStyle.baseColor;
  var textColor = _getBandStyle.textColor;


  return {
    box: {
      background: background,
      backgroundColor: baseColor,
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      maring: 0,
      marginBottom: '1%'
    },
    subtitle: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0
    },
    reviewContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    image: {
      width: '50px',
      height: 50,
      marginRight: 20
    },
    review: {
      flexGrow: 0,
      flex: 1,
      flexShrink: 0,
      flexBasis: '250px',
      margin: '1%'
    },
    reviewContent: {
      backgroundColor: (0, _styleHelpers.lightenColor)(baseColor, 0.2),
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: (0, _styleHelpers.lightenColor)(baseColor, 0.1),
      padding: '5%',
      borderRadius: 4
    },
    reviewBefore: {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: " ",
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(207, 207, 207, 0)',
      borderTopColor: '#cfcfcf',
      borderWidth: '21px',
      marginLeft: '-21px'
    },
    reviewAfter: {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: " ",
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(255, 255, 255, 0)',
      borderTopColor: '#ffffff',
      borderWidth: '15px',
      marginLeft: '-15px'
    },
    reviewAuthor: {
      fontSize: '0.8rem',
      fontWeight: 600,
      margin: 0,
      flex: 1,
      verticalAlign: 'middle',
      lineHeight: '50px'
    },
    reviewCountry: {
      fontSize: '0.5rem',
      margin: 0,
      marginTop: '-20px',
      paddingLeft: '50'
    },
    reviewText: {
      fontSize: 16,
      fontStyle: 'italic'
    },
    quoteLeft: {
      color: '#cecede',
      display: 'flex',
      fontSize: '2em',
      marginRight: 10
    },
    details: {
      display: 'inline-flex',
      height: 50,
      marginBottom: 20
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');