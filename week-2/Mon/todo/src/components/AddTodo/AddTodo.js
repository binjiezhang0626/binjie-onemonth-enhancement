import React from 'react';
import './AddTodo.css';

const AddTodo = () => {
  return (
    <div className="AddTodo">
      <input className="input" type="text"></input>
      <button className="button" type="submit">Add</button>
    </div>
  )
}

export default AddTodo;