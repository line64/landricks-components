import React from 'react';

function calculateViewportFromWindow() {
  if (typeof window !== 'undefined') {
    let size = window.innerWidth;
    if (size < 544) return 'xs';
    if (size >= 544 && size < 768) return 'sm';
    if (size >= 768 && size < 992) return 'md';
    if (size >= 992 && size < 1200) return 'lg';
    if (size >= 1200) return 'xl';
  } else {
    return null;
  }
}

function renderAugmentedChildren(props) {
  return React.Children.map(props.children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, { viewport: calculateViewportFromWindow() });
  });
}

const LandingCanvas = (props) => {
  return (
    <div style={ props.wrapperStyle }>
      { renderAugmentedChildren(props) }
    </div>
  );
}

export default LandingCanvas;
