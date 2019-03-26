import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const PlaceHolder = (props) => {

  let s = styles(props);

  if (props.useLoremIpsum) {
    return (
      <p style={{padding: '10%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue ex. Donec tortor erat, placerat non dolor quis, porta vestibulum massa. Suspendisse potenti. Etiam bibendum vel magna ac molestie. In lacinia dui vitae sem suscipit, ut fermentum nulla scelerisque. In sollicitudin placerat purus sit amet porttitor. Aenean id quam augue. In maximus ultrices pretium. Aliquam erat volutpat.
      </p>
    );
  }

  return (
    <div style={ s.wrapper }>
      <div>{props.label}</div>
    </div>
  );

}

PlaceHolder.propTypes = {
  wrapperStyle: PropTypes.object,
  label: PropTypes.string,
  useLoremIpsum: PropTypes.bool
}

PlaceHolder.defaultProps = {
  label: 'content placeholder',
  useLoremIpsum: false
};

export default PlaceHolder;
