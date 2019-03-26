import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
import { GenericBrick } from '../../';
import PropTypes from 'prop-types';
import styles from './styles';

class GalleryBrick extends Component {
  constructor(props){
    super(props);
    this.state = { currentPage: 1 }
  }

  calculatePages(){
    let { children, itemsPerPage } = this.props;
    
    let pages = parseInt(children.length / itemsPerPage);

    return (children.length % itemsPerPage > 0) ? pages + 1 : pages;
  }

  renderItem(item, key, style){
    return item 
  }

  renderPageOfItems(items, style){
    if (!items) return null;

    let initial = (this.state.currentPage - 1) * this.props.itemsPerPage;

    let boxItems = items.slice(initial, initial  + this.props.itemsPerPage );

    return boxItems.map((item, key) => this.renderItem(item, key, style));
  }

  renderPrevBtn(style){
    let styleCustom = {};
    if(this.state.currentPage === 1) styleCustom = { opacity : '0', pointerEvents : 'none' }
    return (
      <a style={{ ...style.controls, ...styleCustom }} onClick={ () => this.setState({ currentPage : this.state.currentPage - 1 }) } >
        {'<'}
      </a>
    )
  }

  renderNextBtn(style){
    let styleCustom = {};
    if(this.state.currentPage >= this.calculatePages()) styleCustom = { opacity : '0', pointerEvents : 'none' }
    return (
      <a 
        style={{ ...style.controls, ...styleCustom }} 
        onClick={ () => this.setState({ currentPage : this.state.currentPage + 1 }) } >
        {'>'}
      </a>
    )
  }

  renderIndicators(style){
    let {currentPage}  = this.state; 
    let count = [...Array(this.calculatePages()).keys()];

    if(this.calculatePages() < 2) return null;

    return count.map((item) =>{
      return null
    });
  }

  render() {
    let style = styles(this.props);

    let items = this.props.children;
    
    return (
      <GenericBrick {...this.props} contentStyle={ style.container }>
        <div style={ style.wrapper }>
          { this.renderPrevBtn(style) }
          <div style={ style.pageWrapper } > 
            { this.renderPageOfItems(items, style) } 
          </div>
           { this.renderNextBtn(style) }
        </div>
        { this.renderIndicators(style) }
      </GenericBrick>
    );

  }

}


GalleryBrick.propTypes = {
  title : PropTypes.string, 
  subtitle : PropTypes.string, 
  items: PropTypes.array,
  itemsPerPage : PropTypes.number
};

export default GalleryBrick;
