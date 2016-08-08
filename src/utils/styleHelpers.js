import Color from 'color';

export const DEFAULT_THEME = {
  canvasBgColor: '#ffffff',
  defaultFontFamily: "'Open Sans', sans-serif",
  defaultFontSize: '60%',
  bandStyleA: {
    background: 'url('+require('../images/default-theme-bandA-background.png')+') repeat',
    primaryColor: '#dd7554',
    textColor: '#ffffff'
  },
  bandStyleB: {
    background: 'url('+require('../images/default-theme-bandC-background.jpg')+') repeat',
    baseColor: '#cccccc',
    primaryColor: '#dd7554',
    textColor: '#666666'
  },
  bandStyleC: {
    baseColor: '#dd7554',
    primaryColor: '#000000',
    textColor: '#ffffff'
  }
};

export function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}

export function getBandStyle(theme, bandStyleKey) {
  return theme[`bandStyle${bandStyleKey}`] || DEFAULT_THEME.bandStyleA;
}

export function lightenColor(color, amount) {
  return Color(color).lighten(amount).rgbString();
}

export function darkenColor(color, amount) {
  return Color(color).darken(amount).rgbString();
}
