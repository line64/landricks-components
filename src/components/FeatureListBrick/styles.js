import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';
import { assign } from 'lodash';

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
    itemIconStyle

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
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: '0 0 1rem'
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
      margin: '0'
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
      borderRadius: '2px'
    },
    itemText: {
      margin: '2rem 0 0',
      fontSize: '1.25rem'
    },
    itemIcon: {
      fontSize: '5rem'
    }
  };

  if (mode === 'TEXT_ON_LEFT') {
    styles.box.textAlign = 'left';
  }

  if (mode === 'TEXT_ON_RIGHT') {
    styles.box.textAlign = 'right';
  }

  assign(styles.box, contentStyle || {});
  assign(styles.h1, titleStyle || {});
  assign(styles.h2, subtitleStyle || {});
  assign(styles.item, itemStyle || {});
  assign(styles.itemText, itemTextStyle || {});
  assign(styles.itemIcon, itemIconStyle || {});

  assign(styles.box, props.contentStyle || {});
  assign(styles.h1, props.titleStyle || {});
  assign(styles.h2, props.subtitleStyle || {});
  assign(styles.item, props.itemStyle || {});
  assign(styles.itemText, props.itemTextStyle || {});
  assign(styles.itemIcon, props.itemIconStyle || {});

  return styles;

}
