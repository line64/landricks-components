import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

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
      textAlign: 'center',
      ...contentStyle,
      ...props.contentStyle
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
    }
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  return styles;

}
