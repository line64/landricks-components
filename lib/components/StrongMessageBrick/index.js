'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StrongMessageBrick = function (_Component) {
  _inherits(StrongMessageBrick, _Component);

  function StrongMessageBrick() {
    _classCallCheck(this, StrongMessageBrick);

    return _possibleConstructorReturn(this, (StrongMessageBrick.__proto__ || Object.getPrototypeOf(StrongMessageBrick)).apply(this, arguments));
  }

  _createClass(StrongMessageBrick, [{
    key: 'renderMessageLevel1',
    value: function renderMessageLevel1(styles, props) {

      if (props.renderMessageLevel1) {
        return props.renderMessageLevel1(styles, props);
      }

      return _react2.default.createElement(
        'h1',
        { className: props.classNameMsg1, style: styles.messageLevel1 },
        props.messageLevel1
      );
    }
  }, {
    key: 'renderMessageLevel2',
    value: function renderMessageLevel2(styles, props) {

      if (!props.messageLevel2) {
        return null;
      }

      if (props.renderMessageLevel2) {
        return props.renderMessageLevel2(styles, props);
      }

      return _react2.default.createElement(
        'h2',
        { className: props.classNameMsg2, style: styles.messageLevel2 },
        props.messageLevel2
      );
    }
  }, {
    key: 'renderCTAs',
    value: function renderCTAs(styles, props) {

      if (props.renderCTAs) {
        return props.renderCTAs(styles, props);
      }

      if (!props.CTAs) {
        return null;
      }

      return _react2.default.createElement(
        _.ThemePropagator,
        null,
        props.CTAs
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var s = (0, _styles2.default)(this.props);

      return _react2.default.createElement(
        _.GenericBrick,
        _extends({}, this.props, { contentStyle: s.content, hasHeader: false }),
        this.renderMessageLevel1(s, this.props),
        this.renderMessageLevel2(s, this.props),
        this.renderCTAs(s, this.props)
      );
    }
  }]);

  return StrongMessageBrick;
}(_react.Component);

StrongMessageBrick.propTypes = {
  messageLevel1: _propTypes2.default.string.isRequired,
  messageLevel2: _propTypes2.default.string
};

StrongMessageBrick.defaultProps = {
  messageLevel1: 'This is my Strong Message'
};

exports.default = StrongMessageBrick;