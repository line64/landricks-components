'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {

  var theme = (0, _styleHelpers.safeThemeFromProps)(props);

  var _getBandStyle = (0, _styleHelpers.getBandStyle)(theme, props.bandStyle);

  var backgroundColor = _getBandStyle.backgroundColor;
  var textColor = _getBandStyle.textColor;
  var contentStyle = _getBandStyle.contentStyle;
  var titleStyle = _getBandStyle.titleStyle;
  var subtitleStyle = _getBandStyle.subtitleStyle;
  var itemStyle = _getBandStyle.itemStyle;
  var itemTextStyle = _getBandStyle.itemTextStyle;
  var itemIconStyle = _getBandStyle.itemIconStyle;
  var itemImageStyle = _getBandStyle.itemImageStyle;
  var viewport = props.viewport;
  var mode = props.mode;


  var styles = {
    box: _extends({
      background: backgroundColor,
      color: textColor,
      padding: '5%',
      height: 'auto',
      textAlign: 'center'
    }, contentStyle, props.contentStyle),
    h1: _extends({
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem'
    }, titleStyle, props.titleStyle),
    h2: _extends({
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0'
    }, subtitleStyle, props.subtitleStyle),
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '3rem 0 2rem'
    },
    itemContainer: {
      flex: '1',
      minWidth: '20%',
      display: 'inline-block',
      padding: '.8rem'
    },
    item: _extends({
      backgroundColor: 'rgba(0,0,0,.25)',
      padding: '4rem',
      textAlign: 'center',
      color: textColor,
      borderRadius: '2px'
    }, itemStyle, props.itemStyle),
    itemText: _extends({
      margin: '2rem 0 0',
      fontSize: '1.25rem'
    }, itemTextStyle, props.itemTextStyle),
    itemIcon: _extends({
      fontSize: '5rem'
    }, itemIconStyle, props.itemIconStyle),
    itemImage: _extends({
      height: '8rem',
      width: 'auto',
      pointerEvents: 'none'
    }, itemImageStyle, props.itemImageStyle)
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