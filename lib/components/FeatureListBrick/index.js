'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderItems(s, items) {
  return items.map(function (item, index) {
    return _react2.default.createElement(
      'div',
      { style: s.itemContainer },
      _react2.default.createElement(
        'div',
        { style: s.item, key: index },
        item.icon ? _react2.default.createElement(_reactFontawesome2.default, { name: item.icon, style: s.itemIcon }) : null,
        item.image ? _react2.default.createElement('img', { src: item.image, style: s.itemImage }) : null,
        _react2.default.createElement(
          'p',
          { style: s.itemText },
          item.text
        )
      )
    );
  });
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
      'div',
      { style: s.container },
      renderItems(s, props.items)
    )
  );
};