import { assign } from 'lodash';

export const DEFAULT_THEME = {
  canvasBgColor: '#FAFAFA',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleDefault: {
    backgroundColor: '#4051B5',
    textColor: '#FFFFFF',
    activeColor: '#E91C63'
  }
};

export function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

export function getBandStyle(theme, bandStyleKey) {
  return assign({}, DEFAULT_THEME.bandStyleDefault, theme[`bandStyle${bandStyleKey}`] || {});
}
