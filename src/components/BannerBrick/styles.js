import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, textColor, padding } = getBandStyle(theme, props.bandStyle);

  return {
    box: {
      backgroundImage: 'url('+props.image+')',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      backgroundColor: background,
      backgroundRepeat: 'no-repeat',
      color: textColor,
      padding: padding || '10%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bolder',
      maring: 0,
      marginBottom: '3%',
      textAlign: 'right'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '3%',
      textAlign: 'right'
    }
  };

}
