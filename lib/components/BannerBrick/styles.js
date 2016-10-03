'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var primaryColor = _getBandStyle.primaryColor;
  var secondaryColor = _getBandStyle.secondaryColor;
  var primaryTextColor = _getBandStyle.primaryTextColor;
  var secondaryTextColor = _getBandStyle.secondaryTextColor;
  var activeColor = _getBandStyle.activeColor;
  var contentStyle = _getBandStyle.contentStyle;
  var titleStyle = _getBandStyle.titleStyle;
  var subtitleStyle = _getBandStyle.subtitleStyle;
  var imageStyle = _getBandStyle.imageStyle;
  var buttonStyle = _getBandStyle.buttonStyle;
  var viewport = props.viewport;
  var textOnLeft = props.textOnLeft;
  var textOnRight = props.textOnRight;
  var secondaryBrick = props.secondaryBrick;


  var styles = {
    box: {
      background: primaryColor,
      color: primaryTextColor,
      padding: '5%',
      height: 'auto',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0'
    }
  };

  if (secondaryBrick) {
    styles.box.background = secondaryColor;
    styles.box.color = secondaryTextColor;
  }

  if (textOnLeft) {
    styles.box.textAlign = 'left';
  }

  if (textOnRight) {
    styles.box.textAlign = 'right';
  }

  (0, _lodash.assign)(styles.box, contentStyle || {});
  (0, _lodash.assign)(styles.h1, titleStyle || {});
  (0, _lodash.assign)(styles.h2, subtitleStyle || {});

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

var _lodash = require('lodash');