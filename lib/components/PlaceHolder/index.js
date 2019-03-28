'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceHolder = function PlaceHolder(props) {

  var s = (0, _styles2.default)(props);

  if (props.useLoremIpsum) {
    return _react2.default.createElement(
      'p',
      { style: { padding: '10%' } },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue ex. Donec tortor erat, placerat non dolor quis, porta vestibulum massa. Suspendisse potenti. Etiam bibendum vel magna ac molestie. In lacinia dui vitae sem suscipit, ut fermentum nulla scelerisque. In sollicitudin placerat purus sit amet porttitor. Aenean id quam augue. In maximus ultrices pretium. Aliquam erat volutpat.'
    );
  }

  return _react2.default.createElement(
    'div',
    { style: s.wrapper },
    _react2.default.createElement(
      'div',
      null,
      props.label
    )
  );
};

PlaceHolder.propTypes = {
  wrapperStyle: _propTypes2.default.object,
  label: _propTypes2.default.string,
  useLoremIpsum: _propTypes2.default.bool
};

PlaceHolder.defaultProps = {
  label: 'content placeholder',
  useLoremIpsum: false
};

exports.default = PlaceHolder;