import { assign } from 'lodash';

export const DEFAULT_THEME = {
  canvasBgColor: '#FAFAFA',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleDefault: {
    primaryColor: '#4051B5',
    primaryTextColor: '#FFFFFF',
    secondaryColor: '#FAFAFA',
    secondaryTextColor: '#747474',
    activeColor: '#E91C63'
  }
};

export function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

export function getBandStyle(theme, bandStyleKey) {
  return assign(DEFAULT_THEME.bandStyleDefault, theme[`bandStyle${bandStyleKey}`] || {});
}
