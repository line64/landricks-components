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
  var itemStyle = _getBandStyle.itemStyle;
  var itemTextStyle = _getBandStyle.itemTextStyle;
  var itemIconStyle = _getBandStyle.itemIconStyle;
  var viewport = props.viewport;
  var mode = props.mode;


  var styles = {
    box: {
      background: backgroundColor,
      color: textColor,
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
    },
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
    item: {
      backgroundColor: 'rgba(0,0,0,.25)',
      padding: '4rem',
      textAlign: 'center',
      color: textColor,
      borderRadius: '2px'
    },
    itemText: {
      margin: '2rem 0 0',
      fontSize: '1.25rem'
    },
    itemIcon: {
      fontSize: '5rem'
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
  (0, _lodash.assign)(styles.item, itemStyle || {});
  (0, _lodash.assign)(styles.itemText, itemTextStyle || {});
  (0, _lodash.assign)(styles.itemIcon, itemIconStyle || {});

  (0, _lodash.assign)(styles.box, props.contentStyle || {});
  (0, _lodash.assign)(styles.h1, props.titleStyle || {});
  (0, _lodash.assign)(styles.h2, props.subtitleStyle || {});
  (0, _lodash.assign)(styles.item, props.itemStyle || {});
  (0, _lodash.assign)(styles.itemText, props.itemTextStyle || {});
  (0, _lodash.assign)(styles.itemIcon, props.itemIconStyle || {});

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');

var _lodash = require('lodash');