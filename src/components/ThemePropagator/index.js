import React from 'react';

function renderThemedChildren(props) {

  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { theme: props.theme });
  });

}

export default (props) => {
  return (<div>{renderThemedChildren(props)}</div>);
}
