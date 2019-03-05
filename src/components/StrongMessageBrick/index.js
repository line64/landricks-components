import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { ThemePropagator, GenericBrick } from '../../';

class StrongMessageBrick extends Component {

  renderMessageLevel1(styles, props) {

    if (props.renderMessageLevel1) {
      return props.renderMessageLevel1(styles, props);
    }

    return (
      <h1 style={ styles.messageLevel1 }>{ props.messageLevel1 }</h1>
    );

  }

  renderMessageLevel2(styles, props) {

    if (!props.messageLevel2) {
      return null;
    }

    if (props.renderMessageLevel2) {
      return props.renderMessageLevel2(styles, props);
    }

    return (
      <h2 style={ styles.messageLevel2 }>{ props.messageLevel2 }</h2>
    );

  }

  renderCTAs(styles, props) {

    if (props.renderCTAs) {
      return props.renderCTAs(styles, props);
    }

    if (!props.CTAs) {
      return null;
    }

    return (<ThemePropagator>{props.CTAs}</ThemePropagator>);

  }

  render() {

    let s = styles(this.props);

    return (
      <GenericBrick {...this.props} contentStyle={ s.content } hasHeader={false}>
        { this.renderMessageLevel1(s, this.props) }
        { this.renderMessageLevel2(s, this.props) }
        { this.renderCTAs(s, this.props) }
      </GenericBrick>
    );

  }

}

StrongMessageBrick.propTypes = {
  messageLevel1: PropTypes.string.isRequired,
  messageLevel2: PropTypes.string
}

StrongMessageBrick.defaultProps = {
  messageLevel1: 'This is my Strong Message'
};

export default StrongMessageBrick;
