import React, { Component } from 'react';
import styles from './styles';
import { ThemePropagator, GenericBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';

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

export default TripleContentBrick;
