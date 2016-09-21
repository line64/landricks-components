import Color from 'color';

export const DEFAULT_THEME = {
  canvasBgColor: '#ffffff',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleDefault: {
    primaryColor: '#4db6ac',
    textColor: '#ffffff'
  }
};

export function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

export function getBandStyle(theme, bandStyleKey) {
  return theme[`bandStyle${bandStyleKey}`] || DEFAULT_THEME.bandStyleDefault;
}

export function lightenColor(color, amount) {
  return Color(color).lighten(amount).rgbString();
}

export function darkenColor(color, amount) {
  return Color(color).darken(amount).rgbString();
}
