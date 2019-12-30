import React from 'react';
import './TodoItems.css';
import TodoItem from '../TodoItem/TodoItem';

const todoItems = [
  {
    text: "Wake up",
    completed: false
  },
  {
    text: "Eat breakfast",
    completed: false
  },
  {
    text: "Do some work",
    completed: false
  },
  {
    text: "Eat lunch",
    completed: false
  },
  {
    text: "Do some work",
    completed: false
  },
  {
    text: "Eat lunch",
    completed: false
  },
  {
    text: "Do some work",
    completed: false
  },
  {
    text: "Eat lunch",
    completed: false
  },
];

const TodoItems = () => {

  return (
    <div className="TodoItems">
      {todoItems.map((todoItem, index) => (
        <TodoItem todoItem={todoItem} key={index} />
      ))}
    </div>
  )
}

export default TodoItems;