import React from 'react';
import styles from './styles';
import { GenericBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';
import PropTypes from 'prop-types';

const EnumerationBrick = (props) => {

  let s = styles(props);

  return (
    <GenericBrick {...props} contentStyle={s.container}>
      { props.children }
    </GenericBrick>
  );

}

EnumerationBrick.propTypes = {
  hasHeader: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: LandricksPropTypes.brickTheme,
  wrapperStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  renderHeader: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default EnumerationBrick;
