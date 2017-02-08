import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles';

class FooterBrick extends Component {

  renderSimpleFooter(s) {
    let { title, description, image } = this.props;

    return(
      <div style={ s.center }>
        { (title) ? <h1>{ title }</h1> : null }
        { (description) ? <p>{ description }</p> : null }
        { (image) ? <img src={ image } height="50" alt="logo" /> : null }
      </div>
    )
  }

  renderExpandFooter(s) {
    let { itemsLeft, itemsRight, enterprise } = this.props;

    return(
      <div style={ s.center }>

        <ul style={ s.leftContainter }>
          { itemsLeft.map((item)=> this.renderItem(item, s) ) }
        </ul>

        <ul style={ s.rightContainter }>
          <div style={{ flexDirection: 'row', display: 'flex', margin: 0 }}>
            { itemsRight.map((item)=> this.renderItem(item, s) ) }
          </div>
            { ( enterprise ) ? this.renderEnterprise(s, enterprise) : null }
        </ul>

      </div>
    )
  }


  renderItem(item, s) {
    return(
      <li style={ s.item }>
    { (item.text || item.icon) ? <a href={ (item.link) ? item.link : null } style={ ( item.icon ) ? s.icon : s.noLink } target="_blank">{ (item.icon) ?  <FontAwesome style={ s.Faicon } name={ item.icon } />  : item.text }</a> : '' }
      </li>
    )
  }

  renderEnterprise(s, enterprise) {
    return (
      <p style={ s.enterprise }>
        { (enterprise.text) ? `${enterprise.text} ` : '' }
        { (enterprise.icon) ? <FontAwesome name={ enterprise.icon } /> : '' }
        { (enterprise.otherText) ? ` ${enterprise.otherText} ` : '' }
        { (enterprise.logo) ? <img src={ enterprise.logo } style={ s.logo } /> : '' }
      </p>
    )
  }

  render() {

    let s = styles(this.props);

    let {
      icon,
      title,
      description,
      type,
      itemsLeft,
      itemsRight
    } = this.props;

    

    return (
      <div {...this.props} style={ s.wrapper }>
        { ( type === 'simple' ) ? this.renderSimpleFooter(s) : null }
        { ( type === 'expand' && itemsLeft || itemsRight ) ? this.renderExpandFooter(s) : null }
      </div>
    );

  }

}

FooterBrick.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,
  image: React.PropTypes.string,
  itemsRight: React.PropTypes.array,
  itemsLeft: React.PropTypes.array,
  enterprise: React.PropTypes.object,
  description: React.PropTypes.string
};

export default FooterBrick;


// { icon ? <FontAwesome name={ icon } style={ s.icon } /> : null }