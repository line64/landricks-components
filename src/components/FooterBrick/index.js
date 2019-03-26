import React, { Component } from 'react';
import { ThemePropagator, GenericBrick, TripleContentBrick } from '../../';
import { LandricksPropTypes } from '../../conventions';
import PropTypes from 'prop-types';

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
  children: PropTypes.arrayOf(PropTypes.element)
};

export default FooterBrick;
