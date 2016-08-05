import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, textColor } = getBandStyle(theme, props.bandStyle)

  return {
    box: {
      background: background,
      color: textColor,
      padding: '7%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    phoneColumn: {
      flex: 2,
    },
    phoneImg: {
      width: '300px'
    },
    textColumn: {
      padding: '5%',
      textAlign: 'left',
      flex: 3
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
