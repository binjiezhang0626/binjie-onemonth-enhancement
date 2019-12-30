import React from 'react';
import './Body.css';
import AddTodo from '../AddTodo/AddTodo';
import TodoItems from '../TodoItems/TodoItems';


const Body = () => {
  return (
    <div className="Body">
      <AddTodo />
      <TodoItems />
    </div>
  )
}

export default Body;