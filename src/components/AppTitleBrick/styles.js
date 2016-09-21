import { safeThemeFromProps, getBandStyle, lightenColor } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, textColor } = getBandStyle(theme, props.bandStyle)
  let { viewport } = props;

  let styles = {
    box: {
      background: background,
      color: textColor,
      paddingBottom: '7%',
      paddingTop: '5%'
    },
    imageColumn: {
      width: '50%',
      display: 'inline-block'
    },
    textColumn: {
      padding: '5%',
      textAlign: 'left',
      width: '40%',
      display: 'inline-block',
      float: 'left'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '3%',
      paddingRight: '25%'
    },
    companyName: {
      textAlign : 'left',
      display: 'inline-flex'
    },
    h4: {
      verticalAlign: 'middle',
      margin: 'auto',
      fontSize: '1.7rem',
      marginLeft: '10px',
      lineHeight: '85px'
    },
    buttons: {
      marginTop: '6%'
    },
    image: {
      maxWidth: '100%',
      maxHeight: '80vh'
    },
    logo: {
      height: '80px'
    }
  };

  switch (viewport) {
    case 'xs':
      styles.textColumn.width = '90%';
      styles.imageColumn.width = '100%';
      styles.imageColumn.textAlign = 'center';
      styles.h4.fontSize = '1.5rem';
      styles.h4.lineHeight = 1;
      styles.h2.padding = 0;
      styles.buttons.textAlign = 'center';
      styles.image.maxWidth = '90%';
      break;
    case 'sm':
    case 'md':
    case 'lg': 
      styles.textColumn.width = '90%';
      styles.imageColumn.width = '100%';
      styles.imageColumn.textAlign = 'center';
      break;
    case 'xl': break;
  }

  return styles;

}
