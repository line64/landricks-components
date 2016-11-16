import React from 'react';
import styles from './styles';
import FontAwesome from 'react-fontawesome';
import { ContextPropagator, GenericBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';

const EnumerationBrick = (props) => {

  let s = styles(props);

  return (
    <GenericBrick {...props} contentStyle={s.container}>
      { props.children }
    </GenericBrick>
  );

}

EnumerationBrick.propTypes = {
  hasHeader: React.PropTypes.bool,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  theme: LandricksPropTypes.brickTheme,
  wrapperStyle: React.PropTypes.object,
  contentStyle: React.PropTypes.object,
  headerStyle: React.PropTypes.object,
  titleStyle: React.PropTypes.object,
  subtitleStyle: React.PropTypes.object,
  renderHeader: React.PropTypes.func,
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default EnumerationBrick;
