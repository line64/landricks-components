import React from 'react';
import styles from './styles';
import FontAwesome from 'react-fontawesome';

function renderIcon(icon, s) {
  if (!icon) return;
  return (<FontAwesome name={icon} size="4x" />);
}

function renderImg(img, s) {
  if (!img) return null;
  return <img src={ img } styles={ s.image } />
}

function renderFeature(feature, s) {
  return (
    <article key={feature.key} style={s.feature}>
      { renderIcon(feature.icon) }
      { renderImg(feature.img, s) }
      <h5 style={s.featureTitle}>{feature.title}</h5>
      <p style={s.featureDescription}>{feature.description}</p>
    </article>
  );
};

function renderTitle(title, s) {
  if (title) return <h3 style={ s.title }>{ title }</h3>

  return null; 
};

function renderSubTitle(subtitle, s) {
  if (subtitle) return <h4 style={ s.subtitle }>{ subtitle }</h4>

  return null;
};

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      { renderTitle(props.title, s) }
      { props.divider ? (<hr style={ s.divider } />) : null }
      { renderSubTitle(props.subtitle, s) }
      <div style={ s.featureContainer }>
        { props.features.map((f) => renderFeature(f, s)) }
      </div>
    </section>
  );

}
