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
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '400',
      color: '#000',
      maring: 0,
      marginBottom: '1%'
    },
    subtitle: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0
    },
    featureContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 50
    },
    feature: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '200px',
      margin: '1%',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: (0, _styleHelpers.lightenColor)(baseColor, 0.1),
      padding: '2%',
      borderRadius: 4
    },
    featureTitle: {
      fontSize: '1rem',
      fontWeight: '300',
      margin: 0,
      marginBottom: 10,
      marginTop: 10
    },
    featureDescription: {
      fontSize: '0.6rem'
    },
    divider: {
      width: '10%',
      background: 'rgb(0, 182, 189)',
      height: '2px',
      border: 'none'
    }
  };
};

var _styleHelpers = require('../../utils/styleHelpers');