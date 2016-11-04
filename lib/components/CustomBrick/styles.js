'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var backgroundColor = _getBandStyle.backgroundColor;
  var textColor = _getBandStyle.textColor;
  var contentStyle = _getBandStyle.contentStyle;
  var titleStyle = _getBandStyle.titleStyle;
  var subtitleStyle = _getBandStyle.subtitleStyle;
  var viewport = props.viewport;
  var mode = props.mode;


  var styles = {
    box: {
      background: backgroundColor,
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    }
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  (0, _lodash.assign)(styles.box, contentStyle || {});
  (0, _lodash.assign)(styles.h1, titleStyle || {});
  (0, _lodash.assign)(styles.h2, subtitleStyle || {});

  (0, _lodash.assign)(styles.box, props.contentStyle || {});
  (0, _lodash.assign)(styles.h1, props.titleStyle || {});
  (0, _lodash.assign)(styles.h2, props.subtitleStyle || {});

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

var _lodash = require('lodash');