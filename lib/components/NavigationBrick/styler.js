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
      itemStyle = _safeThemeFromProps.itemStyle,
      itemHighlightStyle = _safeThemeFromProps.itemHighlightStyle,
      logoStyle = _safeThemeFromProps.logoStyle,
      brandStyle = _safeThemeFromProps.brandStyle;

  var mode = props.mode,
      barContentStyle = props.barContentStyle;


  var styles = {
    box: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      zIndex: 1000
    },
    boxContent: _extends({
      background: backgroundColor || 'rgba(0,0,0,0)',
      color: textColor,
      padding: '0 5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }, contentStyle, props.contentStyle),
    logoContainer: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      flex: '0 1 auto'
    },
    navigationContainer: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      flex: '0 1 auto',
      textAlign: 'right'
    },
    item: _extends({
      display: 'inline-block',
      padding: '15px',
      fontSize: '16px'
    }, itemStyle, props.itemStyle),
    itemHighlight: _extends({
      display: 'inline-block',
      padding: '7px 12px',
      fontSize: '16px',
      margin: '8px',
      background: activeColor,
      borderRadius: '2px'
    }, itemHighlightStyle, props.itemHighlightStyle),
    itemLink: {
      color: textColor,
      textDecoration: 'none',
      border: 'none',
      background: 'transparent'
    },
    logo: _extends({
      height: '50px',
      width: 'auto',
      float: 'left'
    }, logoStyle, props.logoStyle),
    brand: _extends({
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '50px',
      display: 'inline-block',
      marginLeft: '10px'
    }, brandStyle, props.brandStyle),
    collapsed: {
      box: _extends({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '10vh',
        zIndex: 1000,
        background: backgroundColor || '#37474f',
        display: 'flex'
      }, props.contentStyle)
    },
    menuContent: {
      position: 'fixed',
      height: '90vh',
      top: '10vh',
      width: '60%',
      left: '-60%',
      transition: 'left .5s',
      backgroundColor: backgroundColor || '#37474f'
    },
    collapsedContainer: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      paddingTop: '5vh'
    },
    menuOpen: {
      left: 0
    },
    menuIcon: _extends({
      color: textColor || '#fff',
      fontSize: '1.8rem',
      margin: 15,
      position: 'absolute',
      top: 0
    }, props.iconStyle),
    collapsedHeader: _extends({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }, barContentStyle)
  };

  return styles;
};

var _styleHelpers = require('../../utils/styleHelpers');