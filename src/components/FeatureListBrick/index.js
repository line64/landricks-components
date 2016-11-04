import React from 'react';
import styles from './styles';
import FontAwesome from 'react-fontawesome';
import { ContextPropagator, CallToAction } from '../../';

function renderItems(s, items) {
  return items.map((item, index) => {
    return (
      <div style={ s.itemContainer }>
        <div style={ s.item } key={ index }>
          <FontAwesome name={ item.icon } style={ s.itemIcon } />
          <p style={ s.itemText }>{ item.text }</p>
        </div>
      </div>
    );
  });
}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <h1 style={ s.h1 }>{ props.title }</h1>
      <h2 style={ s.h2 }>{ props.subtitle }</h2>
      <div style={ s.container }>
        { renderItems(s, props.items) }
      </div>
    </section>
  );

}
