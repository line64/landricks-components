import React from 'react';
import Helmet from 'react-helmet';

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
  return React.Children.map(props.children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, { viewport: props.viewport });
  });
}

const LandingCanvas = (props) => {

  let { viewport } = props;

  viewport = viewport || calculateViewportFromWindow();

  return (
    <div style={ props.wrapperStyle }>
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
