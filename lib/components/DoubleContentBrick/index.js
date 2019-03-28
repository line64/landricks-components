'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _conventions = require('../../conventions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoubleContentBrick = function (_Component) {
  _inherits(DoubleContentBrick, _Component);

  function DoubleContentBrick() {
    _classCallCheck(this, DoubleContentBrick);

    return _possibleConstructorReturn(this, (DoubleContentBrick.__proto__ || Object.getPrototypeOf(DoubleContentBrick)).apply(this, arguments));
  }

  _createClass(DoubleContentBrick, [{
    key: 'renderFirstContent',
    value: function renderFirstContent(firstChild, parentStyles, parentProps) {

      if (parentProps.renderFirstContent) {
        return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
      }

      return _react2.default.createElement(
        _.ThemePropagator,
        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
        firstChild
      );
    }
  }, {
    key: 'renderSecondContent',
    value: function renderSecondContent(secondChild, parentStyles, parentProps) {

      if (parentProps.renderSecondContent) {
        return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
      }

      return _react2.default.createElement(
        _.ThemePropagator,
        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
        secondChild
      );
    }
  }, {
    key: 'render',
    value: function render() {

      var s = (0, _styles2.default)(this.props);

      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children),
          _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
          firstChild = _React$Children$toArr2[0],
          secondChild = _React$Children$toArr2[1];

      return _react2.default.createElement(
        _.GenericBrick,
        this.props,
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
          this.renderFirstContent(firstChild, s, this.props),
          this.renderSecondContent(secondChild, s, this.props)
        )
      );
    }
  }]);

  return DoubleContentBrick;
}(_react.Component);

DoubleContentBrick.propTypes = {
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

exports.default = DoubleContentBrick;