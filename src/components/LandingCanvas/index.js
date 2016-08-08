import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles';
import { ThemePropagator } from '../../';

export default (props) => {

  const s = styles(props);

  return (
    <div style={ s.box }>
      <Helmet
        htmlAttributes={ {style: 'font-size: 18px'} }
        link={[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }
        ]}
      />
      <ThemePropagator theme={ props.theme }>{ props.children }</ThemePropagator>
    </div>
  );
}
