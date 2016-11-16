import { safeThemeFromProps } from '../../utils/styleHelpers';

export default function (props) {

  let {
    textColor
  } = safeThemeFromProps(props);

  let {
    messageLevel1Style,
    messageLevel2Style,
    contentStyle
  } = props;

  let styles = {
    messageLevel1: {
      fontSize: '2.25em',
      fontWeight: 'bold',
      margin: '1.5%',
      color: textColor,
      ...messageLevel1Style
    },
    messageLevel2: {
      fontSize: '1.2em',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '1.5%',
      color: textColor,
      ...messageLevel2Style
    },
    content: {
      textAlign: 'center',
      ...contentStyle
    }
  };

  return styles;

}
