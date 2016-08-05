import { safeThemeFromProps } from '../../utils/styleHelpers';

export default function(props) {

  let theme = safeThemeFromProps(props);

  return {
    box: {
      backgroundColor: theme.canvasBgColor,
      fontFamily: theme.defaultFontFamily,
      fontSize: theme.defaultFontSize
    }
  };

}
