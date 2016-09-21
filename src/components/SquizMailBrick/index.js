import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';
import FontAwesome from 'react-fontawesome';


function renderInput(props, s) {
  if (!props.placeholder) return null;
  return (
    <div>
      <input style={ s.inputField } placeholder={ props.placeholder } />
    </div>
  )
}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <h1 style={ s.h1 }>{ props.title }</h1>
      <ContextPropagator theme={ props.theme }>
        { renderInput(props, s) }
      </ContextPropagator>
      <h2 style={ s.h2 }>{ props.subtitle }</h2>
    </section>
  );

}
