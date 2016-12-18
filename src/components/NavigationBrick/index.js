import React from 'react';
import styles from './styles';
import { CallToAction } from '../../';

function handleClick(onClick, args) {
  return (event) => {
    event.preventDefault();
    onClick(args);
  }
}

function renderItems(s, items) {
	if (items && items.length > 0) {
		return items.map((item, index) => {
			return (
				<li style={ item.highlight ? s.itemHighlight : s.item } key={ index }>
					<a style={ s.itemLink } href="#" onClick={ handleClick(item.onClick) }>{ item.label }</a>
				</li>
			);
		});
	} else {
		return null;
	}
}

function renderNavigation(s, items) {
	return (
		<ul style={ s.navigationContainer }>
			{ renderItems(s, items) }
		</ul>
	);
}

function renderLogo(s, logo, brand) {
	return (
		<ul style={ s.logoContainer }>
			{ logo ? ( <img style={ s.logo } src={ logo } /> ) : null }
			{ brand ? ( <span style={ s.brand }>{ brand }</span> ) : null }
		</ul>
	);
}

export default (props) => {

  let s = styles(props);

  return (
    <nav style={ s.box }>
    	<div style={ s.boxContent }>
	    	{ renderLogo(s, props.logo, props.brand) }
	    	{ renderNavigation(s, props.items) }
	    </div>
    </nav>
  );

}
