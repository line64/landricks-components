import React, { Component } from 'react';
import { ThemePropagator, GenericBrick, TripleContentBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';

class FooterBrick extends Component {

  render() {

    let [ firstChild, secondChild, thirdChild ] = React.Children.toArray(this.props.children);

    return (  
      <TripleContentBrick { ...this.props } theme={ this.props.theme } hasHeader={false}>
        { firstChild }
        { secondChild }
        { thirdChild }
      </TripleContentBrick>
    );

  }

}

FooterBrick.propTypes = {
  theme: LandricksPropTypes.brickTheme,
  children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default FooterBrick;
