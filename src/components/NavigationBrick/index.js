import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import styler from './styler';


export default class NavigationBrick extends Component {
	constructor(props){
		super(props);
		this.state = {
			open : false
		}
	}

	renderItem(item, index, style){
		return(
			<li onClick={ ()=> this.setState({ open : false })} style={ item.highlight ? style.itemHighlight : style.item } key={ index }>
				{ (item.href) ? <a style={ style.itemLink } href={ item.href } >{ item.label }</a> : null }
				{ (item.onClick) ? <button style={ style.itemLink } onClick={ () => item.onClick() } >{ item.label }</button> : null }
			</li>
		)
	}

	renderItems(style, items) {
		if (!items) return null;
		return items.map((item, index) => {
			return this.renderItem(item, index, style)
		});
	}


	renderNavigation(style, items, isCollapsed) {
		return (
            <ul style={{ ...style.navigationContainer, ...(isCollapsed ? style.collapsedContainer : {}) }}>
				{ this.renderItems(style, items) }
			</ul>
        );
	}

	renderLogo(style) {
		let { logo, brand } = this.props;
		return (
			<span style={ style.collapsedHeader }>	
				{ logo ? ( <img style={ style.logo } src={ logo } /> ) : null }
				{ brand ? ( <span style={ style.brand }>{ brand }</span> ) : null }
			</span>
		);
	}

	renderFullWidth(style) {
		return(
			<nav style={ style.box }>
				<div style={ style.boxContent }>
					<ul style={ style.logoContainer }>
						{ this.renderLogo(style) }
					</ul>
					{ this.renderNavigation(style, this.props.items, false) }
				</div>
			</nav>
		)
	}

	renderCollapsed(style) {
		return(
			<nav style={style.collapsed.box}>

				<Fontawesome name={ (this.state.open) ? 'times' : 'bars' } style={ style.menuIcon } onClick={ ()=> this.setState({ open : !this.state.open }) } />

				{ this.renderLogo(style) }

				{ this.renderCollapsedContent(style)  }

			</nav>
		)
	}

	renderCollapsedContent(style){
		let visible = { ...style.menuContent, ...(this.state.open ? style.menuOpen : '') };
		return (
			<div style={ visible }>
				{ this.renderNavigation(style, this.props.items, true) }
			</div>
		);
			
	}


	render(){
		let style = styler(this.props);
		let { viewport } = this.props;

		return (viewport == 'xs' || viewport == 'sm') ? this.renderCollapsed(style) : this.renderFullWidth(style);
	}

	

}




