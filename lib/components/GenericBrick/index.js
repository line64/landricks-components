'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

var _conventions = require('../../conventions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBrick = function (_Component) {
  _inherits(GenericBrick, _Component);

  function GenericBrick() {
    _classCallCheck(this, GenericBrick);

    return _possibleConstructorReturn(this, (GenericBrick.__proto__ || Object.getPrototypeOf(GenericBrick)).apply(this, arguments));
  }

  _createClass(GenericBrick, [{
    key: 'renderHeader',
    value: function renderHeader(styles, props) {

      if (!props.hasHeader) {
        return null;
      }

      if (props.renderHeader) {
        return props.renderHeader(styles, props);
      }

      return _react2.default.createElement(
        'div',
        { style: styles.header },
        _react2.default.createElement(
          'h3',
          { style: styles.title },
          props.title
        ),
        _react2.default.createElement(
          'p',
          { style: styles.subtitle },
          props.subtitle
        )
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent(styles, props) {

      if (props.renderContent) {
        return props.renderContent(styles, props);
      }

      return _react2.default.createElement(
        _.ThemePropagator,
        _extends({}, props, { wrapperStyle: styles.content }),
        props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var s = (0, _styles2.default)(this.props);

      return _react2.default.createElement(
        'section',
        _extends({}, this.props, { style: s.wrapper }),
        _react2.default.createElement(
          'div',
          { style: s.canvas },
          this.renderHeader(s, this.props),
          this.renderContent(s, this.props)
        )
      );
    }
  }]);

  return GenericBrick;
}(_react.Component);

GenericBrick.propTypes = {
  hasHeader: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  theme: _conventions.LandricksPropTypes.brickTheme,
  wrapperStyle: _propTypes2.default.object,
  contentStyle: _propTypes2.default.object,
  headerStyle: _propTypes2.default.object,
  titleStyle: _propTypes2.default.object,
  subtitleStyle: _propTypes2.default.object,
  renderContent: _propTypes2.default.func,
  renderHeader: _propTypes2.default.func
};

GenericBrick.defaultProps = {
  hasHeader: true
};

exports.default = GenericBrick;