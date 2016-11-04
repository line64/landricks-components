'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var backgroundColor = _getBandStyle.backgroundColor;
  var textColor = _getBandStyle.textColor;
  var activeColor = _getBandStyle.activeColor;
  var contentStyle = _getBandStyle.contentStyle;
  var titleStyle = _getBandStyle.titleStyle;
  var subtitleStyle = _getBandStyle.subtitleStyle;
  var imageStyle = _getBandStyle.imageStyle;
  var buttonStyle = _getBandStyle.buttonStyle;
  var textColumnStyle = _getBandStyle.textColumnStyle;
  var imageColumnStyle = _getBandStyle.imageColumnStyle;
  var viewport = props.viewport;
  var mode = props.mode;


  var styles = {
    box: {
      background: backgroundColor,
      color: textColor,
      display: 'flex',
      padding: '7% 0 8%',
      height: 'auto'
    },
    imageColumn: {
      flex: '1',
      padding: '0 5%'
    },
    textColumn: {
      flex: '1',
      padding: '0 5%'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    },
    image: {
      maxHeight: '50vh'
    },
    button: {
      display: 'inline-block',
      color: textColor,
      background: activeColor,
      padding: '.8rem 2rem',
      margin: '0 1.5rem 0 0',
      textDecoration: 'none',
      fontSize: '1rem'
    }
  };

  if (mode === 'IMAGE_ON_LEFT') {
    styles.box.flexDirection = 'row-reverse';
  }

  if (mode === 'IMAGE_ON_BOTTOM') {
    styles.box.flexDirection = 'column';
    styles.box.padding = '0';
    styles.box.textAlign = 'center';
    styles.textColumn.padding = '5% 5% 1%';
    styles.imageColumn.padding = '1% 5% 5%';
  }

  (0, _lodash.assign)(styles.box, contentStyle || {});
  (0, _lodash.assign)(styles.h1, titleStyle || {});
  (0, _lodash.assign)(styles.h2, subtitleStyle || {});
  (0, _lodash.assign)(styles.image, imageStyle || {});
  (0, _lodash.assign)(styles.button, buttonStyle || {});
  (0, _lodash.assign)(styles.textColumn, textColumnStyle || {});
  (0, _lodash.assign)(styles.imageColumn, imageColumnStyle || {});

  switch (viewport) {
    case 'xs':
    case 'sm':
      styles.box.flexDirection = 'column';
    case 'md':
    case 'lg':
    case 'xl':
      break;
  }

  (0, _lodash.assign)(styles.box, props.contentStyle || {});
  (0, _lodash.assign)(styles.h1, props.titleStyle || {});
  (0, _lodash.assign)(styles.h2, props.subtitleStyle || {});
  (0, _lodash.assign)(styles.image, props.imageStyle || {});
  (0, _lodash.assign)(styles.button, props.buttonStyle || {});
  (0, _lodash.assign)(styles.textColumn, props.textColumnStyle || {});
  (0, _lodash.assign)(styles.imageColumn, props.imageColumnStyle || {});

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

var _lodash = require('lodash');