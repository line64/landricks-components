import { safeThemeFromProps } from '../../utils/styleHelpers';

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
    titleStyle,
    descriptionStyle
  } = props;

  let styles = {
    wrapper: {
      ...getWrapperForDesign(props),
      padding: '1.7%',
      margin: '1%',
      textAlign: 'center',
      minWidth: '200px',
      flex: 1,
      ...wrapperStyle,
    },
    icon: {
      fontSize: '3em',
      ...iconStyle
    },
    title: {
      fontSize: '1em',
      fontWeight: 'bold',
      margin: '0.5%',
      ...titleStyle
    },
    description: {
      fontSize: '0.8em',
      fontWeight: 'normal',
      margin: '0.5%',
      ...descriptionStyle
    }
  };

  return styles;

}
