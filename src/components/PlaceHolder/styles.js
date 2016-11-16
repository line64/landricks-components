import { safeThemeFromProps } from '../../utils/styleHelpers';

export default (props) => {

  let {
    primaryColor
  } = safeThemeFromProps(props);

  let {
    wrapperStyle
  } = props;

  return {
    wrapper: {
      borderStyle: 'dashed',
      borderWidth: 3,
      borderColor: primaryColor,
      display:'flex',
      width: '100%',
      height: '100%',
      minHeight: '200px',
      justifyContent: 'center',
      alignItems: 'center',
      ...wrapperStyle
    }
  };

};
