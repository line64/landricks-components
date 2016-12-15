import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles';

class CallToAction extends Component {

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

    return (<FontAwesome name={ props.icon } style={ style.icon } />);

  }

  renderButton(style, props) {

    if (props.renderButton) {
      return props.renderButton(style, props);
    }

    return (
      <button onClick={ props.onClick } style={ style.wrapper }>
        { this.renderIcon(style, props) }&nbsp;{ this.renderLabel(style, props) }
      </button>
    );

  }

  renderAnchor(style, props) {

    if (props.renderAnchor) {
      return props.renderAnchor(style, props);
    }

    return (
      <a href={ props.href } target={ props.target | '_self' } style={ style.wrapper }>
        { this.renderIcon(style, props) }&nbsp;{ this.renderLabel(style, props) }
      </a>
    );

  }

  render() {

    let s = styles(this.props);

    if (this.props.href) {
      return this.renderAnchor(s, this.props);
    } else {
      return this.renderButton(s, this.props);
    }

  }

}

CallToAction.propTypes = {
  href: React.PropTypes.string,
  target: React.PropTypes.string,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default CallToAction;
