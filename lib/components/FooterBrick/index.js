'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderIcon(icon, s) {
  if (!icon) return;
  return _react2.default.createElement(_reactFontawesome2.default, { style: s.icon, name: icon });
}

function renderItems(item, s) {
  if (item.icon) return _react2.default.createElement(
    'li',
    { key: item.key },
    renderIcon(item.icon, s),
    _react2.default.createElement(
      'a',
      { style: s.text, target: '_blank', href: item.link },
      item.text
    )
  );
  if (item.link) return _react2.default.createElement(
    'li',
    { key: item.key },
    _react2.default.createElement(
      'a',
      { style: s.text, target: '_blank', href: item.link },
      item.text
    )
  );
  if (item) return _react2.default.createElement(
    'li',
    { key: item.key },
    _react2.default.createElement(
      'a',
      { style: s.text },
      item.text
    )
  );
  return null;
};

function renderColumn1(props, s) {
  if (!props.itemsColumn1) return _react2.default.createElement('div', { style: s.textColumn2 });
  return _react2.default.createElement(
    'div',
    { style: s.textColumn1 },
    _react2.default.createElement(
      'ul',
      { style: s.noList },
      props.itemsColumn1.map(function (items) {
        return renderItems(items, s);
      })
    )
  );
};

function renderColumn2(props, s) {
  if (!props.itemsColumn2) return _react2.default.createElement('div', { style: s.textColumn2 });
  return _react2.default.createElement(
    'div',
    { style: s.textColumn2 },
    _react2.default.createElement(
      'ul',
      { style: s.noList },
      props.itemsColumn2.map(function (items) {
        return renderItems(items, s);
      })
    )
  );
};

function renderColumn3(props, s) {
  if (!props.itemsColumn3) return _react2.default.createElement('div', { style: s.textColumn2 });
  return _react2.default.createElement(
    'div',
    { style: s.textColumn3 },
    _react2.default.createElement(
      'ul',
      { style: s.noList },
      props.itemsColumn3.map(function (items) {
        return renderItems(items, s);
      })
    )
  );
};

function renderContent(props, s) {

  if (props.withColumns) {

    return renderColumns(props, s);
  }

  if (props.simple) {

    return renderSimple(props, s);
  }
}

function renderColumns(props, s) {

  return _react2.default.createElement(
    'div',
    null,
    renderColumn1(props, s),
    renderColumn2(props, s),
    renderColumn3(props, s)
  );
}

function renderSimple(props, s) {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      { style: s.simpleList },
      _react2.default.createElement(
        'li',
        { style: s.simpleListItem },
        'Terms'
      ),
      _react2.default.createElement(
        'li',
        { style: s.simpleListItem },
        'Imprint'
      ),
      _react2.default.createElement(
        'li',
        { style: s.simpleListItem },
        'Privacy Policy'
      )
    ),
    _react2.default.createElement(
      'p',
      { style: s.simpleCopy },
      _react2.default.createElement('img', { src: props.logo, style: s.simpleLogo }),
      'All Rights Reserved.'
    )
  );
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      _.ContextPropagator,
      { theme: props.theme },
      _react2.default.createElement(
        'div',
        { style: s.container },
        renderContent(props, s)
      )
    )
  );
};