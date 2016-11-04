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
  var buttonStyle = _getBandStyle.buttonStyle;
  var inputStyle = _getBandStyle.inputStyle;
  var smallStyle = _getBandStyle.smallStyle;
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
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '4rem'
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'block',
      padding: '0 5%',
      marginBottom: '10px'
    },
    input: {
      flex: '1',
      minWidth: '45%',
      fontSize: '1.2rem',
      background: 'rgba(0,0,0,0)',
      border: '2px solid ' + (textColor || '#FFF'),
      color: textColor || '#FFF',
      padding: '.3rem .4rem .25rem'
    },
    button: {
      flex: '1',
      minWidth: '10%',
      fontSize: '1.2rem',
      background: activeColor,
      border: '2px solid rgba(0,0,0,0)',
      color: textColor,
      padding: '.3rem .8rem .25rem',
      cursor: 'pointer'
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
  (0, _lodash.assign)(styles.button, buttonStyle || {});
  (0, _lodash.assign)(styles.input, inputStyle || {});
  (0, _lodash.assign)(styles.small, smallStyle || {});

  (0, _lodash.assign)(styles.box, props.contentStyle || {});
  (0, _lodash.assign)(styles.h1, props.titleStyle || {});
  (0, _lodash.assign)(styles.h2, props.subtitleStyle || {});
  (0, _lodash.assign)(styles.button, props.buttonStyle || {});
  (0, _lodash.assign)(styles.input, props.inputStyle || {});
  (0, _lodash.assign)(styles.small, props.smallStyle || {});

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

var _lodash = require('lodash');