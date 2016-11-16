import { safeThemeFromProps } from '../../utils/styleHelpers';

export default function(props) {

  let {
    backgroundColor,
    fontFamily,
    baseFontSize
  } = safeThemeFromProps(props);

  return {
    wrapper: {
      backgroundColor,
      fontFamily,
      fontSize: baseFontSize
    }
  };

}
