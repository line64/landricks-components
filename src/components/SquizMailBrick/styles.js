import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {
    backgroundColor,
    textColor,
    activeColor,
    contentStyle,
    titleStyle,
    subtitleStyle,
    buttonStyle,
    inputStyle,
    smallStyle
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
      marginBottom: '1.5rem',
      ...titleStyle,
      ...props.titleStyle
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '4rem',
      ...subtitleStyle,
      ...props.subtitleStyle
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'block',
      padding: '0 5%',
      marginBottom: '10px'
    },
    input: {
      flex: '1',
      minWidth: '45%',
      fontSize: '1.2rem',
      background: 'rgba(0,0,0,0)',
      border: `2px solid ${ textColor || '#FFF' }`,
      color: textColor || '#FFF',
      padding: '.3rem .4rem .25rem',
      ...inputStyle,
      ...props.inputStyle
    },
    button: {
      flex: '1',
      minWidth: '10%',
      fontSize: '1.2rem',
      background: activeColor,
      border: `2px solid rgba(0,0,0,0)`,
      color: textColor,
      padding: '.3rem .8rem .25rem',
      cursor: 'pointer',
      ...buttonStyle,
      ...props.buttonStyle
    },
    small: {
      ...smallStyle,
      ...props.smallStyle
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
