import React from 'react';
import './InputField.css';

const InputField = () => {
  return (
    <div className="InputField">
      <input className="input" type="text"></input>
      <button className="button" type="submit">Add</button>
    </div>
  )
}

export default InputField;