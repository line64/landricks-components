import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';

function renderContent(props, s) {

  if (props.imageOnLeft) {

    return renderImageOnLeft(props, s);

  }

  return renderImageBottom(props, s);

}

function renderTitle(props, s) {
  if (!props.title) return null;
  return <h1 style={ s.h1 }>{ props.title }</h1>
}


function renderSubtitle(props, s) {
  if (!props.subtitle) return null;
  return <h2 style={ s.h2 }>{ props.subtitle }</h2>
}

function renderImageBottom (props, s) {
  
  return (
    <section style={ s.box }>
      { renderTitle(props, s) }
      { renderSubtitle(props, s) }
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
      { renderContentRight(props, s) }
    </section>
  );

}

function renderContentRight(props, s) {
  return(
    <div style={ s.contentOnRight }>
      <h1 style={ s.h1 }>{ props.title }</h1>
      { props.divider ? (<hr style={ s.divider } />) : null }
      <h2 style={ s.h2 }>{ props.subtitle }</h2>
      <div style={ s.flex } >
        { props.items.map((item) => renderItems(item, s)) }
      </div>  
    </div>
  )
}

function renderItems(item, s) {
  return(
    <div key={ item.key }>
      <img src={ item.src } />
      <h2>{ item.title }</h2>
      <p>{ item.subtitle }</p>
    </div>
  )
}

export default (props) => {

  let s = styles(props);

  return renderContent(props, s);

}
