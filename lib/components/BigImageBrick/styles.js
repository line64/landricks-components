'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _styles;

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


  var styles = (_styles = {
    box: _extends({
      background: backgroundColor,
      color: textColor,
      display: 'flex',
      padding: '7% 0 8%',
      height: 'auto'
    }, contentStyle, props.contentStyle),
    imageColumn: {
      flex: '1',
      padding: '0 5%'
    },
    textColumn: {
      flex: '1',
      padding: '0 5%'
    },
    h1: _extends({
      fontSize: '3rem',
      fontWeight: 'bold'
    }, titleStyle, props.titleStyle),
    h2: _extends({
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    }, subtitleStyle, props.subtitleStyle),
    image: _extends({
      maxHeight: '50vh'
    }, imageStyle, props.imageStyle),
    button: _extends({
      display: 'inline-block',
      color: textColor,
      background: activeColor,
      padding: '.8rem 2rem',
      margin: '0 1.5rem 0 0',
      textDecoration: 'none',
      fontSize: '1rem'
    }, buttonStyle, props.buttonStyle)
  }, _defineProperty(_styles, 'textColumn', _extends({}, textColumnStyle, props.textColumnStyle)), _defineProperty(_styles, 'imageColumn', _extends({}, imageColumnStyle, props.imageColumnStyle)), _styles);

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

  switch (viewport) {
    case 'xs':
    case 'sm':
      styles.box.flexDirection = 'column';
    case 'md':
    case 'lg':
    case 'xl':
      break;
  }

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }