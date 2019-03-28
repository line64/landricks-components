import React from 'react';
import PropTypes from 'prop-types';

function renderThemedChildren(props) {
  return React.Children.map(props.children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, { theme: props.theme });
  });
}

const ThemePropagator = (props) => {
  return (
    <div className={props.className} style={props.wrapperStyle}>
      { renderThemedChildren(props) }
    </div>
  );
}

ThemePropagator.propTypes = {
  wrapperStyle: PropTypes.object,
  children: PropTypes.node
};

export default ThemePropagator;
