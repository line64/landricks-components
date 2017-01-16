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
    logoHeight
  } = safeThemeFromProps(props);

  let {
    wrapperStyle,
    iconStyle,
    titleStyle,
    descriptionStyle,
    imageStyle
  } = props;

  let styles = {
    wrapper: {
      ...getWrapperForDesign(props),
      textAlign: 'center',
      minHeight: '50px',
      padding : '2% 8%',
      marginTop: '-10px',
      flex: 1,
      ...wrapperStyle,
    },
    icon: {
      fontSize: '2em',
      ...iconStyle
    },
    image: {
      width: '6em',
      ...imageStyle
    },
    title: {
      fontSize: '1em',
      fontWeight: 'bold',
      margin: '0.5%',
      color: textColor,
      ...titleStyle
    },
    description: {
      fontSize: '0.8em',
      fontWeight: 'normal',
      margin: '0.5%',
      color: textColor,
      ...descriptionStyle
    },
    center: {
      textAlign: 'center',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center'

    },
    noLink: {
      textDecoration: 'none',
      color: textColor,
      fontSize: fontSize
    },
    item: {
      flex : 1,
      color: textColor,
      fontSize: fontSize
    },
    leftContainter: {
      flex: 4,
      textAlign: 'left',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      margin: 0
    },
    rightContainter: {
      flex: 1,
      paddingRight: 25,
      textAlign: 'right',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: "center",
      margin: 0
    },
    enterprise: {
      color: textColor,
      fontSize: '1.2rem',
      margin: 0,
      fontWeight: '300',
      marginTop: 5
    },
    icon: {
      borderRadius: '50%',
      border: '2px solid' + textColor,
      color: textColor,
      padding: 4,
      textDecoration: 'none'
    },
    Faicon: {
      height: 30,
      width: 25,
      textAlign: 'center'
    },
    logo: {
      height: logoHeight || '25px',
      verticalAlign : 'middle'
    }
  };

  return styles;

}
