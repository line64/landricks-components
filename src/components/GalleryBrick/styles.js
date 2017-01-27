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
    fontSize,
    indicatorColor,
    controlsColor
  } = safeThemeFromProps(props);

  let {
    wrapperStyle,
    iconStyle,
    titleStyle,
    descriptionStyle,
    itemStyle
  } = props;

  let styles = {
    wrapper: {
      ...getWrapperForDesign(props),
      textAlign: 'center',
      minHeigh: '200px',
      display: 'flex',
      padding: '2%',
      flexDirection: 'row',
      flex: 1,
      ...wrapperStyle,
    },
    container: {
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: primaryColor || '#fff'
    },
    slider: {
      flex: 5,
      display: 'flex'
    },
    controls : {
      alignSelf: 'center',
      margin: '0 15px',
      fontSize: '2.5rem',
      color : controlsColor || '#000'
    },
    itemWrapper: {
      flex: 1,
      margin: '20px',
      flexGrow: 1,
      flexBasis : 'auto',
      alignSelf: 'center'
    },
    item: {
      maxWidth: '100%',
      maxHeight: '100%',
      minHeight: 100,
      minWidth: 100,
      ...itemStyle
    },
    center: {
      textAlign: 'center',
      alignSelf: 'center',
      padding: '25px',
      backgroundColor: primaryColor || '#fff',
      padding: 0
    },
    indicator: {
      margin: '0 5px',
      color: indicatorColor || "#000"
    }
  };

  return styles;

}
