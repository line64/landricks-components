import React from 'react';
import styles from './styles';
import FontAwesome from 'react-fontawesome';

function renderIcon(icon, s) {
  if (!icon) return;
  return (<FontAwesome name={icon} />);
}

export default (props) => {

  const s = styles(props);

  return (
	<a key={ props.key } href={ props.link } target="_blank" style={ s.box }>
  		{renderIcon(props.icon)} {props.text}
	</a>
  );

}
