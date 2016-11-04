'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputValue = null;

function handleSubmit(onClick) {
  return function (event) {
    event.preventDefault();
    onClick({ email: inputValue });
  };
}

function handleInputChange(event) {
  inputValue = event.target.value;
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'h1',
      { style: s.h1 },
      props.title
    ),
    _react2.default.createElement(
      'h2',
      { style: s.h2 },
      props.subtitle
    ),
    _react2.default.createElement(
      'form',
      { style: s.form, onSubmit: handleSubmit(props.onSubmit) },
      _react2.default.createElement('input', { type: 'email', style: s.input, placeholder: props.placeholder, required: true, onChange: handleInputChange }),
      _react2.default.createElement(
        'button',
        { type: 'submit', style: s.button },
        props.buttonLabel
      )
    ),
    _react2.default.createElement(
      'small',
      { style: s.small },
      props.smallText
    )
  );
};