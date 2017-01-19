import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles';

function calculateViewportFromWindow() {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 544) return 'sm';
    if (window.innerWidth >= 768) return 'md';
    if (window.innerWidth >= 992) return 'lg';
    if (window.innerWidth >= 1200) return 'xl';
    return'xs';
  } else {
    return null;
  }
}

function renderAugmentedChildren(props) {

  let {
    viewport
  } = props;

  viewport = viewport || calculateViewportFromWindow();

  return React.Children.map(props.children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, { viewport });
  });

}

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
      { renderAugmentedChildren(props) }
    </div>
  );
}

export default LandingCanvas;
