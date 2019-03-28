'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

var _conventions = require('../../conventions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnumerationBrick = function EnumerationBrick(props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    _.GenericBrick,
    _extends({}, props, { contentStyle: s.container }),
    props.children
  );
};

EnumerationBrick.propTypes = {
  hasHeader: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  theme: _conventions.LandricksPropTypes.brickTheme,
  wrapperStyle: _propTypes2.default.object,
  contentStyle: _propTypes2.default.object,
  headerStyle: _propTypes2.default.object,
  titleStyle: _propTypes2.default.object,
  subtitleStyle: _propTypes2.default.object,
  renderHeader: _propTypes2.default.func,
  children: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

exports.default = EnumerationBrick;