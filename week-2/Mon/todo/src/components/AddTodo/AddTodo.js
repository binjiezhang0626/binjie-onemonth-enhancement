import React, { useState } from 'react';
import './AddTodo.css';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';

const AddTodo = ({ addTodo }) => {

  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    if (!input.trim()) {
      return
    }
    addTodo(input)
    setInput('')
  }
  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <form className="AddTodo" onSubmit={handleSubmit}>
      <input className="input" type="text" value={input} onChange={handleChange}></input>
      <button className="button" type="submit">Add</button>
    </form>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodoFunction: text => dispatch(addTodo(text))
//   }
// }

export default connect(null, { addTodo })(AddTodo);