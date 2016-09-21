import React from 'react';
import styles from './styles';
import FontAwesome from 'react-fontawesome';

function getReviewIcon(icon) {
  return icon || DEFAULT_ICON_IMG;
}

function renderReview(review, s) {
  return (
    <article key={review.key} style={s.review}>
      <div style={ s.reviewContent }>
        <style scoped>{`root:before ${JSON.stringify(s.reviewBefore)}`}</style>
        <FontAwesome name="quote-left" style={ s.quoteLeft } />
        <p style={s.reviewText}>"{review.text}"</p>
        <style scoped>{`root:after ${JSON.stringify(s.reviewAfter)}`}</style>      
        <div style={ s.details }>  
          <img style={s.image} src={ getReviewIcon(review.icon) } />
          <span style={s.reviewAuthor}>{review.author}</span>
        </div>
        <p style={s.reviewCountry}>{review.country}</p>  
      </div>
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
    </section>
  );

}
