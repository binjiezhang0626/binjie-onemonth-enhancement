import React from 'react';
import './Body.css';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';


const Body = () => {
  return (
    <div className="Body">
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default Body;