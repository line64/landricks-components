import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { GenericBrick } from '../../';
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
    return (
      <div style={ style.itemWrapper }>
        { item }
      </div>
    )
  }

  renderPageOfItems(items, style){
    if (!items) return null;

    let initial = (this.state.currentPage - 1) * this.props.itemsPerPage;

    let boxItems = items.slice(initial, initial  + this.props.itemsPerPage );

    return boxItems.map((item, key) => this.renderItem(item, key, style));
  }

  renderPrevBtn(style){
    if(this.state.currentPage === 1) return null;
    return (
      <a 
        style={ style.controls } 
        onClick={ () => this.setState({ currentPage : this.state.currentPage - 1 }) } >
        <FontAwesome name="chevron-left" />
      </a>
    )
  }

  renderNextBtn(style){
    if(this.state.currentPage >= this.calculatePages()) return null;
    return (
      <a 
        style={ style.controls } 
        onClick={ () => this.setState({ currentPage : this.state.currentPage + 1 }) } >
        <FontAwesome name="chevron-right" />
      </a>
    )
  }

  renderIndicators(style){
    let {currentPage}  = this.state; 
    let count = [...Array(this.calculatePages()).keys()];

    if(this.calculatePages() < 2) return null;

    return count.map((item) =>{
      return (
        <FontAwesome 
          style={ style.indicator } 
          onClick={ ()=> this.setState({ currentPage : item + 1 }) } 
          name={ (currentPage === item + 1) ? 'circle' : 'circle-o' } 
        />
      )
    });
  }

  render() {
    let style = styles(this.props);

    let items = this.props.children;
    
    return (
      <GenericBrick {...this.props} contentStyle={ style.container }>
        <div style={ style.wrapper }>
          { this.renderPrevBtn(style) }
          <div style={ style.slider } > 
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
  title : React.PropTypes.string, 
  subtitle : React.PropTypes.string, 
  items: React.PropTypes.array,
  itemsPerPage : React.PropTypes.number
};

export default GalleryBrick;
