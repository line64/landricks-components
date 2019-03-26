import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

let inputValue = null;

function handleSubmit(onClick) {
  return (event) => {
    event.preventDefault();
    onClick({ email: inputValue });
  }
}

function handleInputChange(event) {
  inputValue = event.target.value;
}

const EmailSqueezeBrick = (props) => {

  let s = styles(props);

  return (

    <section style={ s.box }>

      <h1 style={ s.h1 }>{ props.title }</h1>

      <h2 style={ s.h2 }>{ props.subtitle }</h2>

      <form style={ s.form } onSubmit={ handleSubmit(props.onSubmit) }>

        <input type="email" style={ s.input } placeholder={ props.placeholder } required={ true } onChange={ handleInputChange }></input>

        <button type="submit" style={ s.button }>{ props.buttonLabel }</button>

      </form>

      <small style={ s.small }>{ props.smallText }</small>

    </section>

  );

}

EmailSqueezeBrick.propTypes = {
  buttonLabel: PropTypes.string,
  placeholder: PropTypes.string
};

export default EmailSqueezeBrick;
