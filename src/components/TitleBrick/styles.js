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
      height: 'auto',
      textAlign: 'center',
      ...contentStyle,
      ...props.contentStyle
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem',
      ...titleStyle,
      ...props.titleStyle
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0',
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
