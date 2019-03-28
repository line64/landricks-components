'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props),
      backgroundColor = _safeThemeFromProps.backgroundColor,
      textColor = _safeThemeFromProps.textColor,
      activeColor = _safeThemeFromProps.activeColor,
      contentStyle = _safeThemeFromProps.contentStyle,
      titleStyle = _safeThemeFromProps.titleStyle,
      subtitleStyle = _safeThemeFromProps.subtitleStyle,
      buttonStyle = _safeThemeFromProps.buttonStyle,
      inputStyle = _safeThemeFromProps.inputStyle,
      smallStyle = _safeThemeFromProps.smallStyle;

  var mode = props.mode;


  var styles = {
    box: _extends({
      background: backgroundColor,
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    }, contentStyle, props.contentStyle),
    h1: _extends({
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    }, titleStyle, props.titleStyle),
    h2: _extends({
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '4rem'
    }, subtitleStyle, props.subtitleStyle),
    form: {
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'inline-flex',
      padding: '0 5%',
      marginBottom: '10px'
    },
    input: _extends({
      flex: '1',
      minWidth: '45%',
      fontSize: '1.2rem',
      background: 'rgba(0,0,0,0)',
      border: '2px solid ' + (textColor || '#FFF'),
      color: textColor || '#FFF',
      padding: '.3rem .4rem .25rem'
    }, inputStyle, props.inputStyle),
    button: _extends({
      flex: '1',
      minWidth: '10%',
      fontSize: '1.2rem',
      background: activeColor,
      border: '2px solid rgba(0,0,0,0)',
      color: textColor,
      padding: '.3rem .8rem .25rem',
      cursor: 'pointer'
    }, buttonStyle, props.buttonStyle),
    small: _extends({}, smallStyle, props.smallStyle)
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');