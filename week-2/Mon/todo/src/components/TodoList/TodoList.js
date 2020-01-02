import React from 'react';
import { connect } from 'react-redux'
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todoItems }) => {

  return (
    <div className="TodoList">
      {todoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return { todoItems: state };
};

export default connect(mapStateToProps)(TodoList);