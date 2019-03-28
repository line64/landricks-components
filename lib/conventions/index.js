'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandricksPropTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandricksPropTypes = exports.LandricksPropTypes = {
  brickTheme: _propTypes2.default.shape({
    fontFamily: _propTypes2.default.string,
    baseFontSize: _propTypes2.default.string,
    backgroundImage: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string,
    primaryColor: _propTypes2.default.string,
    primaryContrastColor: _propTypes2.default.string,
    objectDesign: _propTypes2.default.oneOf(['square-solid', 'square-outline', 'rounded-solid', 'rounded-outline', 'bump'])
  })
};