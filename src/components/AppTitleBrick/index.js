import React from 'react';
import styles from './styles';
import { CallToAction, ThemePropagator } from '../../';
import PhoneCanvas from './PhoneCanvas';

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <div style={ s.phoneColumn }>
        <PhoneCanvas screenshotUrl={ props.screenshotUrl } />
      </div>
      <div style={ s.textColumn }>
        <h1 style={ s.h1 }>{ props.title }</h1>
        <h2 style={ s.h2 }>{ props.subtitle }</h2>
        <ThemePropagator theme={ props.theme }>
          <CallToAction icon="android" text="Play Store" bandStyle={props.bandStyle} />
          <CallToAction icon="apple" text="Apple Store" bandStyle={props.bandStyle} />
        </ThemePropagator>
      </div>
    </section>
  );

}
