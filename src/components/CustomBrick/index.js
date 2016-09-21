import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      { props.title ? (<h1 style={ s.h1 }>{ props.title }</h1>) : null }
      { props.subtitle ? (<h2 style={ s.h2 }>{ props.subtitle }</h2>) : null }
      <div style={ s.content }>
      	{ props.children }
      </div>
    </section>
  );

}
