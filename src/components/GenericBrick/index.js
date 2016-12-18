import React, { Component } from 'react';
import { ThemePropagator } from '../../';
import { LandricksPropTypes } from '../../conventions';

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
      <section style={ s.wrapper }>
        <div style={ s.canvas }>
          { this.renderHeader(s, this.props) }
          { this.renderContent(s, this.props) }
        </div>
      </section>
    );

  }

}

GenericBrick.propTypes = {
  hasHeader: React.PropTypes.bool,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  theme: LandricksPropTypes.brickTheme,
  wrapperStyle: React.PropTypes.object,
  contentStyle: React.PropTypes.object,
  headerStyle: React.PropTypes.object,
  titleStyle: React.PropTypes.object,
  subtitleStyle: React.PropTypes.object,
  renderContent: React.PropTypes.func,
  renderHeader: React.PropTypes.func
}

GenericBrick.defaultProps = {
  hasHeader: true
};

export default GenericBrick;
