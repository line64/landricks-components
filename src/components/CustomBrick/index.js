import React from 'react';
import styles from './styles';

export default (props) => {

  let s = styles(props);

  return (

    <section style={ s.box }>

      <h1 style={ s.h1 }>{ props.title }</h1>

      <h2 style={ s.h2 }>{ props.subtitle }</h2>

      { props.children }

    </section>

  );

}