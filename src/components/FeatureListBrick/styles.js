import { safeThemeFromProps, getBandStyle, lightenColor } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, baseColor, textColor } = getBandStyle(theme, props.bandStyle)

  return {
    box: {
      background: background,
      color: textColor,
      padding: '5%',
      textAlign: 'center'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      maring: 0,
      marginBottom: '1%'
    },
    subtitle: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0
    },
    featureContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    feature: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '250px',
      margin: '1%',
      backgroundColor: lightenColor(baseColor, 0.2),
      borderStyle: 'solid',
      borderWidth: '0px',
      borderColor: lightenColor(baseColor, 0.1),
      padding: '2%',
      borderRadius: 4
    },
    featureTitle: {
      fontSize: '1.2rem',
      margin: 0,
      marginBottom: 10,
      marginTop: 10
    },
    featureDescription: {
      fontSize: '0.6rem'
    }
  };

}
