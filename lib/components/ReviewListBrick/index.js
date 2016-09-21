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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReviewIcon(icon) {
  return icon || DEFAULT_ICON_IMG;
}

function renderReview(review, s) {
  return _react2.default.createElement(
    'article',
    { key: review.key, style: s.review },
    _react2.default.createElement(
      'div',
      { style: s.reviewContent },
      _react2.default.createElement(
        'style',
        { scoped: true },
        'root:before ' + JSON.stringify(s.reviewBefore)
      ),
      _react2.default.createElement(_reactFontawesome2.default, { name: 'quote-left', style: s.quoteLeft }),
      _react2.default.createElement(
        'p',
        { style: s.reviewText },
        '"',
        review.text,
        '"'
      ),
      _react2.default.createElement(
        'style',
        { scoped: true },
        'root:after ' + JSON.stringify(s.reviewAfter)
      ),
      _react2.default.createElement(
        'div',
        { style: s.details },
        _react2.default.createElement('img', { style: s.image, src: getReviewIcon(review.icon) }),
        _react2.default.createElement(
          'span',
          { style: s.reviewAuthor },
          review.author
        )
      ),
      _react2.default.createElement(
        'p',
        { style: s.reviewCountry },
        review.country
      )
    )
  );
};

function renderSubtitle(subtitle) {
  if (!subtitle) return null;
  return _react2.default.createElement(
    'h4',
    { style: s.subtitle },
    subtitle
  );
}

exports.default = function (props) {

  var s = (0, _styles2.default)(props);

  return _react2.default.createElement(
    'section',
    { style: s.box },
    _react2.default.createElement(
      'h3',
      { style: s.title },
      props.title
    ),
    renderSubtitle(props.subtitle),
    _react2.default.createElement(
      'div',
      { style: s.reviewContainer },
      props.reviews.map(function (f) {
        return renderReview(f, s);
      })
    )
  );
};