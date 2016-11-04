import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {

    backgroundColor,
    textColor,

    contentStyle,
    titleStyle,
    subtitleStyle

  } = getBandStyle(theme, props.bandStyle);

  let {

    viewport,
    mode

  } = props;

  let styles = {
    box: {
      background: backgroundColor,
      color: textColor,
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

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  assign(styles.box, contentStyle || {});
  assign(styles.h1, titleStyle || {});
  assign(styles.h2, subtitleStyle || {});

  assign(styles.box, props.contentStyle || {});
  assign(styles.h1, props.titleStyle || {});
  assign(styles.h2, props.subtitleStyle || {});

  return styles;

}
