import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, textColor, padding } = getBandStyle(theme, props.bandStyle)

  return {
    box: {
      background: background,
      color: textColor,
      padding: padding || '4%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bolder',
      maring: 0,
      marginBottom: '3%'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '3%'
    }
  };

}
