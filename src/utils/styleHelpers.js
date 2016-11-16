
export const DEFAULT_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '20px',
  backgroundColor: '#4051B5',
  primaryColor: '#E91C63',
  textColor: '#FFFFFF'
};

export function safeThemeFromProps(props) {
  return props.theme || DEFAULT_THEME;
}
