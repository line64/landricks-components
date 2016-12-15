import { safeThemeFromProps } from '../../utils/styleHelpers';

export default function (props) {

  let {
    fontFamily,
    baseFontSize,
    backgroundColor,
    textColor
  } = safeThemeFromProps(props);

  let {
    backgroundImage,
    wrapperStyle,
    contentStyle,
    headerStyle,
    titleStyle,
    subtitleStyle
  } = props;

  let styles = {
    wrapper: {
      fontFamily,
      fontSize: baseFontSize,
      backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      color: textColor,
      padding: '5%',
      ...wrapperStyle
    },
    content: {
      ...contentStyle
    },
    header:{
      textAlign: 'center',
      ...headerStyle
    },
    title: {
      margin: '1%',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      ...titleStyle
    },
    subtitle: {
      margin: '1%',
      fontSize: '1rem',
      fontWeight: 'normal',
      marginBottom: '2rem',
      ...subtitleStyle
    }
  };

  return styles;

}
