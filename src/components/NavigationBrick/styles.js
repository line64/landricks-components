import { safeThemeFromProps} from '../../utils/styleHelpers';

export default function (props) {

  let {
    backgroundColor,
    textColor,
    activeColor,
    contentStyle,
    itemStyle,
    itemHighlightStyle,
    logoStyle,
    brandStyle
  } = safeThemeFromProps(props);

  let {
    mode
  } = props;

  let styles = {
    box: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      zIndex: 1000
    },
    boxContent: {
      background: backgroundColor || 'rgba(0,0,0,0)',
      color: textColor,
      padding: '0 5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...contentStyle,
      ...props.contentStyle
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
    },
    collapsed: {
      box: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '10vh',
        zIndex: 1000,
        background : backgroundColor || '#37474f',
        display: 'flex',
        ...props.contentStyle
      }
    },
    menuContent: {
      position : 'fixed',
      height: '90vh',
      top: '10vh',
      width: '60%',
      left: '-60%',
      transition: 'left .5s',
      backgroundColor: backgroundColor || '#37474f'
    },
    collapsedContainer : {
      display : 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      paddingTop: '5vh'
    },
    menuOpen: {
      left: 0
    },
    menuIcon: {
      color: textColor || '#fff', 
      fontSize: '1.8rem', 
      margin: 15,
      position: 'absolute',
      top: 0,
      ...props.iconStyle
    }
  };


  return styles;

}
