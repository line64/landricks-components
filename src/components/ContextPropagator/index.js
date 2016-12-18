import React from 'react';

function renderThemedChildren(props) {
  return React.Children.map(props.children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, { theme: props.theme });
  });
}

const ContextPropagator = (props) => {
  return (
    <div style={props.wrapperStyle}>
      { renderThemedChildren(props) }
    </div>
  );
}

ContextPropagator.propTypes = {
  wrapperStyle: React.PropTypes.object,
  children: React.PropTypes.node
};

export default ContextPropagator;
