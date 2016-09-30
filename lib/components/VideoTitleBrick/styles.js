'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var logoHeight = _getBandStyle.logoHeight;
  var logoMargin = _getBandStyle.logoMargin;
  var videoWidth = _getBandStyle.videoWidth;
  var BImage = _getBandStyle.BImage;
  var viewport = props.viewport;


  var styles = {
    box: {
      display: 'flex',
      padding: '10% 0',
      background: BImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    textColumn: {
      flex: '1',
      padding: '0 5%',
      flexBasis: '500px'
    },
    videoColumn: {
      flex: '1',
      padding: '0 5%',
      textAlign: 'center',
      flexBasis: '500px'
    },
    title: {
      fontSize: '3rem',
      margin: '0'
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: '0',
      padding: '0 20% 0 0'
    },
    logo: {
      height: logoHeight || '80px',
      margin: logoMargin || '0'
    },
    video: {
      width: videoWidth || '100%',
      height: "auto"
    }
  };

  /*switch (viewport) {
    case 'xs':
      styles.textColumn.width = '90%';
      styles.imageColumn.width = '100%';
      styles.imageColumn.textAlign = 'center';
      styles.h4.fontSize = '1.5rem';
      styles.h4.lineHeight = 1;
      styles.h2.padding = 0;
      styles.buttons.textAlign = 'center';
      styles.image.maxWidth = '90%';
      break;
    case 'sm':
    case 'md':
    case 'lg': 
      styles.textColumn.width = '90%';
      styles.imageColumn.width = '100%';
      styles.imageColumn.textAlign = 'center';
      break;
    case 'xl': break;
  }*/

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');