import React from 'react';
import styles from './styles';

function handleClick(onClick, args) {
  return (event) => {
    event.preventDefault();
    onClick(args);
  }
}

function renderImage(s, props) {
  let src = props.imageUrl || props.image;
  return (<img style={ s.image } src={ src } />);
}

function renderContent(s, props) {
  if (props.buttons) {
    return props.buttons.map(button => {
      return (<a href="#" onClick={ handleClick(button.onClick) } style={ s.button }>{ button.label }</a>);
    });
  }
  return props.content;
}

export default (props) => {

  let s = styles(props);

  return (

    <section style={ s.box }>

      <div style={ s.textColumn }>

        <h1 style={ s.h1 }>{ props.title }</h1>

        <h2 style={ s.h2 }>{ props.subtitle }</h2>

        { renderContent(s, props) }

      </div>

      <div style={ s.imageColumn }>

        { renderImage(s, props) }

      </div>

    </section>

  );

}