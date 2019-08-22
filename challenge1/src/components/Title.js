import React from 'react'
import PropTypes from 'prop-types';

const style = {
  fontSize: '3em',
  // fontFamily: 'Dancing Script, cursive'
}

function Title(props) {
  switch(props.size){
    case 6:
      return (
        <h6 style={style} className={props.customClass}>{props.text}</h6>
      )
      
    case 5:
      return (
        <h5 style={style} className={props.customClass}>{props.text}</h5>
      )
      
    case 4:
      return (
        <h4 style={style} className={props.customClass}>{props.text}</h4>
      )
      
    case 3:
      return (
        <h3 style={style} className={props.customClass}>{props.text}</h3>
      )
      
    case 2:
      return (
        <h2 style={style} className={props.customClass}>{props.text}</h2>
      )
      
    default:
      return (
        <h1 style={style} className={props.customClass}>{props.text}</h1>
      )
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  customClass: PropTypes.string
}

export default Title
