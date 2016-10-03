import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {

    primaryColor,
    secondaryColor,
    primaryTextColor,
    secondaryTextColor,

    contentStyle,
    titleStyle,
    subtitleStyle

  } = getBandStyle(theme, props.bandStyle);

  let {

    viewport,
    secondaryBrick

  } = props;

  let styles = {
    box: {
      background: primaryColor,
      color: primaryTextColor,
      padding: '5%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem'
    }
  };

  if (secondaryBrick) {
    styles.box.background = secondaryColor;
    styles.box.color = secondaryTextColor;
  }

  assign(styles.box, contentStyle || {});
  assign(styles.h1, titleStyle || {});
  assign(styles.h2, subtitleStyle || {});

  return styles;

}
