import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

function getWrapperForDesign(props) {

  let {
    textColor,
    primaryColor,
    primaryContrastColor,
    objectDesign
  } = safeThemeFromProps(props);

  switch (objectDesign) {
    case 'rounded-solid':
      return {
        backgroundColor: primaryColor,
        color: primaryContrastColor,
        borderStyle: 'none',
        borderRadius: '30px'
      };
    case 'rounded-outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: primaryColor,
        color: primaryColor,
        borderStyle: 'solid',
        borderRadius: '30px'
      };
    case 'square-outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: primaryColor,
        color: primaryColor,
        borderStyle: 'solid',
        borderRadius: 0
      };
    default: //square-solid
      return {
        backgroundColor: primaryColor,
        color: primaryContrastColor,
        borderStyle: 'none',
        borderRadius: 0
      };
  }

}

export default function (props) {

  let {
    textColor,
    primaryColor,
  } = safeThemeFromProps(props);

  let {
    wrapperStyle,
    iconStyle,
    labelStyle
  } = props;

  let styles = {
    wrapper: {
      ...getWrapperForDesign(props),
      padding: '1.7%',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '1%',
      fontSize: 'inherit',
      ...wrapperStyle,
    },
    icon: {
      fontSize: '1em',
      ...iconStyle
    },
    label: {
      fontSize: '1em',
      fontWeight: 'bold',
      ...labelStyle
    }
  };

  return styles;

}
