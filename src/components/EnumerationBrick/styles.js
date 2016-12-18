import { safeThemeFromProps } from '../../utils/styleHelpers';

export default function (props) {

  let {
    backgroundColor,
    textColor
  } = safeThemeFromProps(props);

  let {
    contentStyle,
    titleStyle,
    subtitleStyle,
    itemStyle,
    itemTextStyle,
    itemIconStyle,
    itemImageStyle
  } = props;

  let styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      ...contentStyle,
    }
  };

  return styles;

}
