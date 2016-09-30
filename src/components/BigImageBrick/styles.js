import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background,
        textColor, 
        padding, 
        imageWidth, 
        imageHeight, 
        title_margin, 
        title_padding,
        title_fontSize,
        subtitle_fontSize,
        fontWeight 

  } = getBandStyle(theme, props.bandStyle);

  return {
    box: {
      background: background,
      color: textColor,
      padding: padding || '4%',
      textAlign: 'center'
    },
    flexbox: {
      background: background,
      color: textColor,
      padding: padding || '4%',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center'
    },
    h1: {
      fontSize: title_fontSize ||'2.5rem',
      fontWeight: fontWeight || 'bolder',
      margin: title_margin || '0 0 3%',
      padding: title_padding || '0'
    },
    h2: {
      fontSize: subtitle_fontSize  || '1.1rem',
      fontWeight: 'normal',
      maring: 0,
      marginBottom: '5%'
    },
    imageContainer: {
      textAlign: 'center'
    },
    flex: {
      display: 'flex'
    },
    imageContainerOnLeft: {
      textAlign: 'center',
      display: 'inline-block',
      flex: 1
    },
    contentOnRight: {
      display: 'inline-block',
      textAlign: 'center',
      flex: 1,
      padding: '0 5%'
    },
    image: {
      width: imageWidth || '90%',
      maxHeight: imageHeight || '60vh'
    },
    divider: {
      width: '10%',
      background: 'rgb(0, 182, 189)',
      height: '2px',
      border: 'none'
    }
  };

}
