import React from 'react';
import styles from './styles';
import { CallToAction, ThemePropagator } from '../../';

import phoneOverlay from '../../images/phoneoverlay.png';

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <div style={ s.phoneColumn }>
        <img style={ s.phoneImg } src={ phoneOverlay } />
      </div>
      <div style={ s.textColumn }>
        <h1 style={ s.h1 }>{ props.title }</h1>
        <h2 style={ s.h2 }>{ props.subtitle }</h2>
        <ThemePropagator theme={ props.theme }>
          <CallToAction text="Play Store" bandStyle={props.bandStyle} />
          <CallToAction text="Apple Store" bandStyle={props.bandStyle} />
        </ThemePropagator>
      </div>
    </section>
  );

}
