import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {

    primaryColor,
    secondaryColor,
    primaryTextColor,
    secondaryTextColor,
    activeColor

  } = getBandStyle(theme, props.bandStyle);

  let {

    viewport

  } = props;

  let styles = {
    box: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
    },
    boxContent: {
      background: 'rgba(0,0,0,0)',
      color: primaryTextColor,
      padding: '0 5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logoContainer: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      flex: '0 1 auto'
    },
    navigationContainer: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      flex: '0 1 auto',
      textAlign: 'right'
    },
    item: {
      display: 'inline-block',
      padding: '15px',
      fontSize: '16px'
    },
    itemHighlight: {
      display: 'inline-block',
      padding: '7px 12px',
      fontSize: '16px',
      margin: '8px',
      background: activeColor,
      borderRadius: '2px'
    },
    itemLink: {
      color: primaryTextColor,
      textDecoration: 'none'
    },
    logo: {
      height: '50px',
      width: 'auto',
      float: 'left'
    },
    brand: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '50px',
      display: 'inline-block',
      marginLeft: '10px'
    }
  };

  return styles;

}
