import React, { Component } from 'react';
import styles from './styles';
import { ThemePropagator, GenericBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';
import PropTypes from 'prop-types';

class TripleContentBrick extends Component {

  renderFirstContent(firstChild, parentStyles, parentProps) {

    if (parentProps.renderFirstContent) {
      return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
    }

    return (
      <ThemePropagator {...parentProps} wrapperStyle={{ flex: 1 }}>
        { firstChild }
      </ThemePropagator>
    );

  }

  renderSecondContent(secondChild, parentStyles, parentProps) {

    if (parentProps.renderSecondContent) {
      return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
    }

    return (
      <ThemePropagator {...parentProps} wrapperStyle={{ flex: 1 }}>
        { secondChild }
      </ThemePropagator>
    );

  }

   renderThirdContent(thirdChild, parentStyles, parentProps) {

    if (parentProps.renderSecondContent) {
      return parentProps.renderSecondContent(thirdChild, parentStyles, parentProps);
    }

    return (
      <ThemePropagator {...parentProps} wrapperStyle={{ flex: 1 }}>
        { thirdChild }
      </ThemePropagator>
    );

  }

  render() {

    let s = styles(this.props);

    let [
      firstChild,
      secondChild,
      thirdChild
    ] = React.Children.toArray(this.props.children);

    return (
      <GenericBrick {...this.props}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        { this.renderFirstContent(firstChild, s, this.props) }
        { this.renderSecondContent(secondChild, s, this.props) }
        { this.renderThirdContent(thirdChild, s, this.props) }
        </div>
      </GenericBrick>
    );

  }

}

TripleContentBrick.propTypes = {
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

export default TripleContentBrick;
