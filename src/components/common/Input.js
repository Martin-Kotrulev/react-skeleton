import React from 'react'

const Input = (props) => {
  let type = props.type || 'text'

  return (
    <div className="container">
      {props.label ? 
      <label
        htmlFor={props.name}
        className='from-control'>{props.label}:</label>
        : null }
      <input
        className={props.className}
        type={type}
        name={props.name}
        placeholder={props.label}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        />
    </div>
  )
}

export default Input
