import React from 'react';

export const LandricksPropTypes = {
  brickTheme: React.PropTypes.shape({
    fontFamily: React.PropTypes.string,
    baseFontSize: React.PropTypes.string,
    baseFontSize: React.PropTypes.string,
    backgroundImage: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    textColor: React.PropTypes.string,
    primaryColor: React.PropTypes.string,
    primaryContrastColor: React.PropTypes.string,
    objectDesign: React.PropTypes.oneOf(['square-solid', 'square-outline', 'rounded-solid', 'rounded-outline', 'bump'])
  })
}
