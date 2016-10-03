import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {

    primaryColor,
    secondaryColor,
    primaryTextColor,
    secondaryTextColor,
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
    secondaryBrick,
    imageOnRight,
    imageOnBottom

  } = props;

  let styles = {
    box: {
      background: primaryColor,
      color: primaryTextColor,
      display: 'flex',
      padding: '7% 0 8%',
      height: 'auto'
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
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    },
    image: {
      maxHeight: '50vh'
    },
    button: {
      display: 'inline-block',
      color: primaryTextColor,
      background: activeColor,
      padding: '.8rem 2rem',
      margin: '0 1.5rem 0 0',
      textDecoration: 'none',
      fontSize: '1rem'
    }
  };

  if (secondaryBrick) {
    styles.box.background = secondaryColor;
    styles.box.color = secondaryTextColor;
  }

  if (imageOnRight) {
    styles.box.flexDirection = 'row-reverse';
  }

  if (imageOnBottom) {
    styles.box.flexDirection = 'column';
    styles.box.padding = '0';
    styles.box.textAlign = 'center';
    styles.textColumn.padding = '5% 5% 1%';
    styles.imageColumn.padding = '1% 5% 5%';
  }

  assign(styles.box, contentStyle || {});
  assign(styles.h1, titleStyle || {});
  assign(styles.h2, subtitleStyle || {});
  assign(styles.image, imageStyle || {});
  assign(styles.button, buttonStyle || {});
  assign(styles.textColumn, textColumnStyle || {});
  assign(styles.imageColumn, imageColumnStyle || {});

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
