import React from 'react';
import styles from './styles';
import { ThemePropagator } from '../../';
import DEFAULT_ICON_IMG from '../../images/default-review-icon.png';

function getReviewIcon(icon) {
  return icon || DEFAULT_ICON_IMG;
}

function renderReview(review, s) {
  return (
    <article key={review.key} style={s.review}>
      <style scoped>{`root:before ${JSON.stringify(s.reviewBefore)}`}</style>
      <h5 style={s.reviewAuthor}>{review.author}</h5>
      <p style={s.reviewText}>"{review.text}"</p>
      <style scoped>{`root:after ${JSON.stringify(s.reviewAfter)}`}</style>
    </article>
  );
};

function renderSubtitle(subtitle) {
  if (!subtitle) return null;
  return <h4 style={ s.subtitle }>{ subtitle }</h4>;
}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <h3 style={ s.title }>{ props.title }</h3>
      { renderSubtitle(props.subtitle) }
      <div style={ s.reviewContainer }>
        { props.reviews.map((f) => renderReview(f, s)) }
      </div>
      <img style={s.image} src={ getReviewIcon(props.icon) } />
    </section>
  );

}
