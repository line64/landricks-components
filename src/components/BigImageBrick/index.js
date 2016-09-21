import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';

function renderContent(props, s) {

  if (props.imageOnLeft) {

    return renderImageOnLeft(props, s);

  }

  return renderImageBottom(props, s);

}

function renderImageBottom (props, s) {
  
  return (
    <section style={ s.box }>
      <h1 style={ s.h1 }>{ props.title }</h1>
      <h2 style={ s.h2 }>{ props.subtitle }</h2>
      <div style={ s.imageContainer }>
        <img style={ s.image } src={ props.image } />
      </div>
    </section>
  );

}

function renderImageOnLeft (props, s) {
  
  return (
    <section style={ s.flexbox }>
      <div style={ s.imageContainerOnLeft }>
        <img style={ s.image } src={ props.image } />
      </div>
      <div style={ s.contentOnRight }>
        <h1 style={ s.h1 }>{ props.title }</h1>
        <h2 style={ s.h2 }>{ props.subtitle }</h2>
      </div>
    </section>
  );

}

export default (props) => {

  let s = styles(props);

  return renderContent(props, s);

}
