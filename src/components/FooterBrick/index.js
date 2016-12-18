import React from 'react';
import styles from './styles';
import { ThemePropagator, CallToAction } from '../../';
import FontAwesome from 'react-fontawesome';

function renderIcon(icon, s) {
  if (!icon) return;
  return (<FontAwesome style={ s.icon } name={icon} />);
}

function renderItems(item, s) {
  if (item.icon) return <li key={ item.key } >{ renderIcon(item.icon, s) }<a style={ s.text } target="_blank" href={ item.link } >{ item.text }</a></li>
  if (item.link) return <li key={ item.key } ><a style={ s.text } target="_blank" href={ item.link } >{ item.text }</a></li>
  if (item) return <li key={ item.key } ><a style={ s.text }>{ item.text }</a></li>
  return null;
};

function renderColumn1(props, s) {
  if (!props.itemsColumn1) return (<div style={ s.textColumn2 }></div>);
  return(
    <div style={ s.textColumn1 }>
      <ul style={ s.noList }>
        { props.itemsColumn1.map((items) => renderItems(items, s)) }
      </ul>
    </div>
  );
};

function renderColumn2(props, s) {
  if (!props.itemsColumn2) return (<div style={ s.textColumn2 }></div>);
  return(
    <div style={ s.textColumn2 }>
      <ul style={ s.noList }>
        { props.itemsColumn2.map((items) => renderItems(items, s)) }
      </ul>
    </div>
  );
};

function renderColumn3(props, s) {
  if (!props.itemsColumn3) return (<div style={ s.textColumn2 }></div>);
  return(
    <div style={ s.textColumn3 }>
      <ul style={ s.noList }>
        { props.itemsColumn3.map((items) => renderItems(items, s)) }
      </ul>
    </div>
  );
};

function renderContent(props, s) {

  if (props.withColumns) {

    return renderColumns(props, s);

  }

  if (props.simple) {

    return renderSimple(props, s);

  }

}

function renderColumns(props, s) {

  return (
    <div>
      { renderColumn1(props, s) }
      { renderColumn2(props, s) }
      { renderColumn3(props, s) }
    </div>
  );

}

function renderSimple(props, s) {

  return (
    <div>
      <ul style={ s.simpleList }>
        <li style={ s.simpleListItem }>Terms</li>
        <li style={ s.simpleListItem }>Imprint</li>
        <li style={ s.simpleListItem }>Privacy Policy</li>
      </ul>
      <p style={ s.simpleCopy }>
        <img src={ props.logo } style={ s.simpleLogo } />
        All Rights Reserved.
      </p>
    </div>
  );

}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <ThemePropagator theme={ props.theme }>
        <div style={ s.container }>
          { renderContent(props, s) }
        </div>
      </ThemePropagator>
    </section>
  );

}
