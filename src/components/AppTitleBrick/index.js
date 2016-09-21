import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';

function renderLogo(props, s) {
  if (props.title){
   return (
      <div style={ s.companyName }>
          <img src={ props.logo } style={ s.logo } />
          <h4 style={ s.h4 }>{ props.title }</h4>
      </div>    
    )
  } 
  return null;
};

function renderImage(img, s) {
  if (!img) return null;
  return <img src={ img } style={ s.image } />
};

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <div style={ s.textColumn }>
        { renderLogo(props, s) }
        <h2 style={ s.h2 }>{ props.subtitle }</h2>
        <ContextPropagator >
          <div style={ s.buttons }>
            { props.buttons }
          </div>  
        </ContextPropagator>
      </div>
      <div style={ s.imageColumn }>
        { renderImage(props.image, s) }
      </div>
    </section>
  );

}