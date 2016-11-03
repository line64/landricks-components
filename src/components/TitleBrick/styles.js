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
    buttonStyle

  } = getBandStyle(theme, props.bandStyle);

  let {

    viewport,
    textOnLeft,
    textOnRight,
    secondaryBrick

  } = props;

  let styles = {
    box: {
      background: primaryColor,
      color: primaryTextColor,
      padding: '5%',
      height: 'auto',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0'
    }
  };

  if (secondaryBrick) {
    styles.box.background = secondaryColor;
    styles.box.color = secondaryTextColor;
  }

  if (textOnLeft) {
    styles.box.textAlign = 'left';
  }

  if (textOnRight) {
    styles.box.textAlign = 'right';
  }

  assign(styles.box, contentStyle || {});
  assign(styles.h1, titleStyle || {});
  assign(styles.h2, subtitleStyle || {});

  return styles;

}
