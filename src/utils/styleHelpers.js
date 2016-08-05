import Color from 'color';

export const DEFAULT_THEME = {
  canvasBgColor: '#ff0000',
  defaultFontSize: '62.5%',
  defaultFontFamily: 'Times',
  bandStyleA: {
    background: 'black',
    primaryColor: 'red',
    textColor: 'white'
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
