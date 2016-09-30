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
  var imageWidth = _getBandStyle.imageWidth;
  var imageHeight = _getBandStyle.imageHeight;
  var title_margin = _getBandStyle.title_margin;
  var title_padding = _getBandStyle.title_padding;
  var title_fontSize = _getBandStyle.title_fontSize;
  var subtitle_fontSize = _getBandStyle.subtitle_fontSize;
  var fontWeight = _getBandStyle.fontWeight;


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
      fontSize: title_fontSize || '2.5rem',
      fontWeight: fontWeight || 'bolder',
      margin: title_margin || '0 0 3%',
      padding: title_padding || '0'
    },
    h2: {
      fontSize: subtitle_fontSize || '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '5%'
    },
    imageContainer: {
      textAlign: 'center'
    },
    flex: {
      display: 'flex'
    },
    imageContainerOnLeft: {
      textAlign: 'center',
      display: 'inline-block',
      flex: 1
    },
    contentOnRight: {
      display: 'inline-block',
      textAlign: 'center',
      flex: 1,
      padding: '0 5%'
    },
    image: {
      width: imageWidth || '90%',
      maxHeight: imageHeight || '60vh'
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