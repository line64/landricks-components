import { safeThemeFromProps, getBandStyle, lightenColor, darkenColor } from '../../utils/styleHelpers';

export default function(props) {

  let theme = safeThemeFromProps(props);
  let { primaryColor } = getBandStyle(theme, props.bandStyle);

  return {
    box: {
      color: lightenColor(primaryColor, 0.7),
      borderRadius: 3,
      backgroundColor: primaryColor,
      fontSize: '2em',
      padding: '15px',
      borderStyle: 'none',
      borderBottom: 'solid 4px',
      borderColor: darkenColor(primaryColor, 0.3)
    }
  };

}
