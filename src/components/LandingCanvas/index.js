import React from 'react';
import styles from './styles';
import { ThemePropagator } from '../../';


export default (props) => {

  const s = styles(props);

  return (
    <div style={ s.box }>
      <ThemePropagator theme={ props.theme }>{ props.children }</ThemePropagator>
    </div>
  );
}
