import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

class FeatureItem extends Component {

  renderLabel(style, props) {

    if (props.renderLabel) {
      return props.renderLabel(style, props);
    }

    if (!props.label) {
      return null;
    }

    return (<span style={ style.label }>{ props.label }</span>);

  }

  renderIcon(style, props) {

    if (props.renderIcon) {
      return props.renderIcon(style, props);
    }

    if (!props.icon) {
      return null;
    }

    // return (<FontAwesome name={ props.icon } style={ style.icon } />);

  }

  render() {

    let s = styles(this.props);

    let {
      icon,
      image,
      title,
      description
    } = this.props;

    return (
      <div {...this.props} style={ s.wrapper }>
        { image ? <img src={ image } style={ s.image } /> : null }
        <h5 style={ s.title }>{ title }</h5>
        <p style={ s.description }>{ description }</p>
      </div>
    );

  }

}

FeatureItem.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default FeatureItem;
