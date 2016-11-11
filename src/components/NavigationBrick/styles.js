import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {
    backgroundColor,
    textColor,
    activeColor,
    contentStyle,
    itemStyle,
    itemHighlightStyle,
    logoStyle,
    brandStyle
  } = getBandStyle(theme, props.bandStyle);

  let {
    viewport,
    mode
  } = props;

  let styles = {
    box: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      zIndex: 1000,
      ...contentStyle,
      ...props.contentStyle
    },
    boxContent: {
      background: backgroundColor || 'rgba(0,0,0,0)',
      color: textColor,
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
      fontSize: '16px',
      ...itemStyle,
      ...props.itemStyle
    },
    itemHighlight: {
      display: 'inline-block',
      padding: '7px 12px',
      fontSize: '16px',
      margin: '8px',
      background: activeColor,
      borderRadius: '2px',
      ...itemHighlightStyle,
      ...props.itemHighlightStyle
    },
    itemLink: {
      color: textColor,
      textDecoration: 'none'
    },
    logo: {
      height: '50px',
      width: 'auto',
      float: 'left',
      ...logoStyle,
      ...props.logoStyle
    },
    brand: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '50px',
      display: 'inline-block',
      marginLeft: '10px',
      ...brandStyle,
      ...props.brandStyle
    }
  };

  if (mode === 'FIXED') {
    styles.box.position = 'fixed';
  }

  return styles;

}
