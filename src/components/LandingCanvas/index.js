import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles';
import { ContextPropagator } from '../../';

const LandingCanvas = (props) => {

  const s = styles(props);

  return (
    <div style={ s.wrapper }>
      <Helmet
        link={[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }
        ]}
      />
      { props.children }
    </div>
  );
}

export default LandingCanvas;
