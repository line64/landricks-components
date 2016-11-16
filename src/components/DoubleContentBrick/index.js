import React, { Component } from 'react';
import styles from './styles';
import { ContextPropagator, GenericBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';

class DoubleContentBrick extends Component {

  renderFirstContent(firstChild, parentStyles, parentProps) {

    if (parentProps.renderFirstContent) {
      return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
    }

    return (
      <ContextPropagator {...parentProps} wrapperStyle={{ flex: 1 }}>
        { firstChild }
      </ContextPropagator>
    );

  }

  renderSecondContent(secondChild, parentStyles, parentProps) {

    if (parentProps.renderSecondContent) {
      return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
    }

    return (
      <ContextPropagator {...parentProps} wrapperStyle={{ flex: 1 }}>
        { secondChild }
      </ContextPropagator>
    );

  }

  render() {

    let s = styles(this.props);

    let [
      firstChild,
      secondChild
    ] = React.Children.toArray(this.props.children);

    return (
      <GenericBrick {...this.props}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        { this.renderFirstContent(firstChild, s, this.props) }
        { this.renderSecondContent(secondChild, s, this.props) }
        </div>
      </GenericBrick>
    );

  }

}

DoubleContentBrick.propTypes = {
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

export default DoubleContentBrick;
