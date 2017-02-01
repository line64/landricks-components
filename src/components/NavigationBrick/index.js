import React, { Component } from 'react';
import styles from './styles';
import { CallToAction } from '../../';
import Fontawesome from 'react-fontawesome';

export default class NavigationBrick extends Component {
	constructor(props){
		super(props);
		this.state = {
			open : false
		}
	}

	handleClick(onClick, args) {
		return (event) => {
			event.preventDefault();
			onClick(args);
		}
	}

	renderItems(s, items) {
		if (items && items.length > 0) {
			return items.map((item, index) => {
				return (
					<li onClick={ ()=> this.setState({ open : false })} style={ item.highlight ? s.itemHighlight : s.item } key={ index }>
						<a style={ s.itemLink } href="#" onClick={ this.handleClick(item.onClick) }>{ item.label }</a>
					</li>
				);
			});
		} else {
			return null;
		}
	}

	renderNavigation(s, items, isMobile) {
		return (
			<ul style={{ ...s.navigationContainer, ...(isMobile)?  s.mobileNavigationContainer  : {} }}>
				{ this.renderItems(s, items) }
			</ul>
		);
	}

	renderLogo(s, logo, brand) {
		return (
			<ul style={ s.logoContainer }>
				{ logo ? ( <img style={ s.logo } src={ logo } /> ) : null }
				{ brand ? ( <span style={ s.brand }>{ brand }</span> ) : null }
			</ul>
		);
	}

	renderFullWidth(s) {
		return(
			<nav style={ s.box }>
				<div style={ s.boxContent }>
					{ this.renderLogo(s, this.props.logo, this.props.brand) }
					{ this.renderNavigation(s, this.props.items, false) }
				</div>
			</nav>
		)
	}

	renderCollapsed(s) {
		return(
			<nav style={s.mobile.box}>

				<Fontawesome name={ (this.state.open) ? 'times' : 'bars' } style={ s.menuIcon } onClick={ ()=> this.setState({ open : !this.state.open }) } />

				{ (this.props.logo) ? ( <img style={{ ...s.logo, ...{margin: 'auto'} }} src={ this.props.logo } /> ) : null }
				{ (this.props.brand && !this.props.logo) ? ( <span style={ s.brand }>{ this.props.brand }</span> ) : null }

				{ this.renderCollapsedContent(s)  }

			</nav>
		)
	}

	renderCollapsedContent(s){
		let visible = { ...s.menuContent, ...(this.state.open) ? s.menuOpen : '' };
		return (
			<div style={ visible }>
				{ this.renderNavigation(s, this.props.items, true) }
			</div>
		);
			
	}


	render(){
		let s = styles(this.props);
		let { viewport } = this.props;
		return (viewport == 'xs' || viewport == 'sm') ? this.renderCollapsed(s) : this.renderFullWidth(s)
		
  		
	}

	

}




