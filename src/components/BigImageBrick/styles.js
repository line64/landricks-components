import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {
    backgroundColor,
    textColor,
    activeColor,
    contentStyle,
    titleStyle,
    subtitleStyle,
    imageStyle,
    buttonStyle,
    textColumnStyle,
    imageColumnStyle
  } = getBandStyle(theme, props.bandStyle);

  let {
    viewport,
    mode
  } = props;

  let styles = {
    box: {
      background: backgroundColor,
      color: textColor,
      display: 'flex',
      padding: '7% 0 8%',
      height: 'auto',
      ...contentStyle,
      ...props.contentStyle
    },
    imageColumn: {
      flex: '1',
      padding: '0 5%'
    },
    textColumn: {
      flex: '1',
      padding: '0 5%'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      ...titleStyle,
      ...props.titleStyle
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem',
      ...subtitleStyle,
      ...props.subtitleStyle
    },
    image: {
      maxHeight: '50vh',
      ...imageStyle,
      ...props.imageStyle
    },
    button: {
      display: 'inline-block',
      color: textColor,
      background: activeColor,
      padding: '.8rem 2rem',
      margin: '0 1.5rem 0 0',
      textDecoration: 'none',
      fontSize: '1rem',
      ...buttonStyle,
      ...props.buttonStyle
    },
    textColumn: {
      ...textColumnStyle,
      ...props.textColumnStyle
    },
    imageColumn: {
      ...imageColumnStyle,
      ...props.imageColumnStyle
    }
  };

  if (mode === 'IMAGE_ON_LEFT') {
    styles.box.flexDirection = 'row-reverse';
  }

  if (mode === 'IMAGE_ON_BOTTOM') {
    styles.box.flexDirection = 'column';
    styles.box.padding = '0';
    styles.box.textAlign = 'center';
    styles.textColumn.padding = '5% 5% 1%';
    styles.imageColumn.padding = '1% 5% 5%';
  }

  switch (viewport) {
    case 'xs':
    case 'sm':
      styles.box.flexDirection = 'column';
    case 'md':
    case 'lg':
    case 'xl': break;
  }

  return styles;

}
