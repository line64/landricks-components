import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);

  let {
    backgroundColor,
    textColor,
    contentStyle,
    titleStyle,
    subtitleStyle,
    itemStyle,
    itemTextStyle,
    itemIconStyle,
    itemImageStyle
  } = getBandStyle(theme, props.bandStyle);

  let {
    viewport,
    mode
  } = props;

  let styles = {
    box: {
      background: backgroundColor,
      color: textColor,
      padding: '5%',
      height: 'auto',
      textAlign: 'center',
      ...contentStyle,
      ...props.contentStyle
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem',
      ...titleStyle,
      ...props.titleStyle
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0',
      ...subtitleStyle,
      ...props.subtitleStyle
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '3rem 0 2rem'
    },
    itemContainer: {
      flex: '1',
      minWidth: '20%',
      display: 'inline-block',
      padding: '.8rem'
    },
    item: {
      backgroundColor: 'rgba(0,0,0,.25)',
      padding: '4rem',
      textAlign: 'center',
      color: textColor,
      borderRadius: '2px',
      ...itemStyle,
      ...props.itemStyle
    },
    itemText: {
      margin: '2rem 0 0',
      fontSize: '1.25rem',
      ...itemTextStyle,
      ...props.itemTextStyle
    },
    itemIcon: {
      fontSize: '5rem',
      ...itemIconStyle,
      ...props.itemIconStyle
    },
    itemImage: {
      height: '8rem',
      width: 'auto',
      pointerEvents: 'none',
      ...itemImageStyle,
      ...props.itemImageStyle
    }
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  return styles;

}
