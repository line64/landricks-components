import React from 'react';
import styles from './styles';
import { ContextPropagator, CallToAction } from '../../';

function renderImage(img, s) {
  if (!img) return null;
  return <img src={ img } style={ s.image } />
};

function renderLogo(props, s) {
  if (props.logoUrl) {
    return (
      <img src={ props.logoUrl } style={ s.logo } />
    );
  }
  if (props.logo) return props.logo;
  return null;
}

function renderTitle(props, s) {
  if (props.titleText) {
    return (
      <h1 style={ s.title }>{ props.titleText }</h1>
    );
  }
  if (props.title) return props.title;
  return null;
}

function renderSubtitle(props, s) {
  if (props.subtitleText) {
    return (
      <h1 style={ s.subtitle }>{ props.subtitleText }</h1>
    );
  }
  if (props.subtitle) return props.subtitle;
  return null;
}

function renderVideo(props, s) {
  if (props.videoUrl) {
    return (
      <div>
        <h2>{ props.videoTitle }</h2>
        <video style={ s.video } src={ props.videoUrl } controls={ true }></video>
      </div>
    );
  }
  if (props.video) return props.video;
  return null;
}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <div style={ s.textColumn }>
        { renderLogo(props, s) }
        { renderTitle(props, s) }
        { renderSubtitle(props, s) }
        { props.content }
      </div>
      <div style={ s.videoColumn }>
        { renderImage(props.image, s) }
        { renderVideo(props, s) }
      </div>
    </section>
  );

}