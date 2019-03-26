import React, { Component } from 'react';
import { ThemePropagator } from '../../';
import { LandricksPropTypes } from '../../conventions';
import PropTypes from 'prop-types';

import styles from './styles';

class GenericBrick extends Component {

  renderHeader(styles, props) {

    if (!props.hasHeader) {
      return null;
    }

    if (props.renderHeader) {
      return props.renderHeader(styles, props);
    }

    return (
      <div style={ styles.header }>
        <h3 style={ styles.title }>{ props.title }</h3>
        <p style={ styles.subtitle }>{ props.subtitle }</p>
      </div>
    );

  }

  renderContent(styles, props) {

    if (props.renderContent) {
      return props.renderContent(styles, props);
    }

    return (
      <ThemePropagator {...props} wrapperStyle={ styles.content }>
        { props.children }
      </ThemePropagator>
    );

  }

  render() {

    let s = styles(this.props);

    return (
      <section {...this.props} style={ s.wrapper }>
        <div style={ s.canvas }>
          { this.renderHeader(s, this.props) }
          { this.renderContent(s, this.props) }
        </div>
      </section>
    );

  }

}

GenericBrick.propTypes = {
  hasHeader: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: LandricksPropTypes.brickTheme,
  wrapperStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  renderContent: PropTypes.func,
  renderHeader: PropTypes.func
}

GenericBrick.defaultProps = {
  hasHeader: true
};

export default GenericBrick;
