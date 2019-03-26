import PropTypes from 'prop-types';


export const LandricksPropTypes = {
  brickTheme: PropTypes.shape({
    fontFamily: PropTypes.string,
    baseFontSize: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    primaryColor: PropTypes.string,
    primaryContrastColor: PropTypes.string,
    objectDesign: PropTypes.oneOf(['square-solid', 'square-outline', 'rounded-solid', 'rounded-outline', 'bump'])
  })
}
