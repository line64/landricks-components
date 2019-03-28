'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

var _conventions = require('../../conventions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterBrick = function (_Component) {
  _inherits(FooterBrick, _Component);

  function FooterBrick() {
    _classCallCheck(this, FooterBrick);

    return _possibleConstructorReturn(this, (FooterBrick.__proto__ || Object.getPrototypeOf(FooterBrick)).apply(this, arguments));
  }

  _createClass(FooterBrick, [{
    key: 'render',
    value: function render() {
      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children),
          _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 3),
          firstChild = _React$Children$toArr2[0],
          secondChild = _React$Children$toArr2[1],
          thirdChild = _React$Children$toArr2[2];

      return _react2.default.createElement(
        _.TripleContentBrick,
        _extends({}, this.props, { theme: this.props.theme, hasHeader: false }),
        firstChild,
        secondChild,
        thirdChild
      );
    }
  }]);

  return FooterBrick;
}(_react.Component);

FooterBrick.propTypes = {
  theme: _conventions.LandricksPropTypes.brickTheme,
  children: _propTypes2.default.arrayOf(_propTypes2.default.element)
};

exports.default = FooterBrick;