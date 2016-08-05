import React from 'react';
import styles from './styles';

export default (props) => {

  const s = styles(props);

  return (
    <button style={ s.box }>
      {props.text}
    </button>
  );
  
}
