import { safeThemeFromProps, getBandStyle, lightenColor } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, baseColor, textColor } = getBandStyle(theme, props.bandStyle)

  return {
    box: {
      background: background,
      backgroundColor: baseColor,
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
    reviewContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    image: {
      width: '100px'
    },
    review: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '750px',
      margin: '1%',
      backgroundColor: lightenColor(baseColor, 0.2),
      borderStyle: 'solid',
      borderWidth: '4px',
      borderColor: lightenColor(baseColor, 0.1),
      padding: '2%',
      borderRadius: 4
    },
    'reviewBefore': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: " ",
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(207, 207, 207, 0)',
      borderTopColor: '#cfcfcf',
      borderWidth: '21px',
      marginLeft: '-21px'
    },
    'reviewAfter': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: " ",
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(255, 255, 255, 0)',
      borderTopColor: '#ffffff',
      borderWidth: '15px',
      marginLeft: '-15px'
    },
    reviewAuthor: {
      fontSize: '1.1rem',
      margin: 0,
      textAlign: 'left'
    },
    reviewText: {
      fontSize: 16,
      fontStyle: 'italic'
    }
  };

}
