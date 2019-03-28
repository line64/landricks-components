'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import FontAwesome from 'react-fontawesome';


var GalleryBrick = function (_Component) {
  _inherits(GalleryBrick, _Component);

  function GalleryBrick(props) {
    _classCallCheck(this, GalleryBrick);

    var _this = _possibleConstructorReturn(this, (GalleryBrick.__proto__ || Object.getPrototypeOf(GalleryBrick)).call(this, props));

    _this.state = { currentPage: 1 };
    return _this;
  }

  _createClass(GalleryBrick, [{
    key: 'calculatePages',
    value: function calculatePages() {
      var _props = this.props,
          children = _props.children,
          itemsPerPage = _props.itemsPerPage;


      var pages = parseInt(children.length / itemsPerPage);

      return children.length % itemsPerPage > 0 ? pages + 1 : pages;
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item, key, style) {
      return item;
    }
  }, {
    key: 'renderPageOfItems',
    value: function renderPageOfItems(items, style) {
      var _this2 = this;

      if (!items) return null;

      var initial = (this.state.currentPage - 1) * this.props.itemsPerPage;

      var boxItems = items.slice(initial, initial + this.props.itemsPerPage);

      return boxItems.map(function (item, key) {
        return _this2.renderItem(item, key, style);
      });
    }
  }, {
    key: 'renderPrevBtn',
    value: function renderPrevBtn(style) {
      var _this3 = this;

      var styleCustom = {};
      if (this.state.currentPage === 1) styleCustom = { opacity: '0', pointerEvents: 'none' };
      return _react2.default.createElement(
        'a',
        { style: _extends({}, style.controls, styleCustom), onClick: function onClick() {
            return _this3.setState({ currentPage: _this3.state.currentPage - 1 });
          } },
        '<'
      );
    }
  }, {
    key: 'renderNextBtn',
    value: function renderNextBtn(style) {
      var _this4 = this;

      var styleCustom = {};
      if (this.state.currentPage >= this.calculatePages()) styleCustom = { opacity: '0', pointerEvents: 'none' };
      return _react2.default.createElement(
        'a',
        {
          style: _extends({}, style.controls, styleCustom),
          onClick: function onClick() {
            return _this4.setState({ currentPage: _this4.state.currentPage + 1 });
          } },
        '>'
      );
    }
  }, {
    key: 'renderIndicators',
    value: function renderIndicators(style) {
      var currentPage = this.state.currentPage;

      var count = [].concat(_toConsumableArray(Array(this.calculatePages()).keys()));

      if (this.calculatePages() < 2) return null;

      return count.map(function (item) {
        return null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = (0, _styles2.default)(this.props);

      var items = this.props.children;

      return _react2.default.createElement(
        _.GenericBrick,
        _extends({}, this.props, { contentStyle: style.container }),
        _react2.default.createElement(
          'div',
          { style: style.wrapper },
          this.renderPrevBtn(style),
          _react2.default.createElement(
            'div',
            { style: style.pageWrapper },
            this.renderPageOfItems(items, style)
          ),
          this.renderNextBtn(style)
        ),
        this.renderIndicators(style)
      );
    }
  }]);

  return GalleryBrick;
}(_react.Component);

GalleryBrick.propTypes = {
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  items: _propTypes2.default.array,
  itemsPerPage: _propTypes2.default.number
};

exports.default = GalleryBrick;