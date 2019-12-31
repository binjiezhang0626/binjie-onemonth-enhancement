import React from 'react';
import { connect } from 'react-redux'
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoItems }) => {

  return (
    <div className="TodoList">
      {todoItems.map((todoItem, index) => (
        <TodoItem todoItem={todoItem} key={index} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return { todoItems: state };
};

export default connect(mapStateToProps)(TodoList);