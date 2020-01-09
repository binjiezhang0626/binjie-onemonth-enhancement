import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../actions/actions';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './TodoItem.css';

const TodoItem = ({ todoItem, deleteTodo, toggleTodo }) => {
  const handleDelete = () => {
    deleteTodo(todoItem.id)
  }
  const handleToggle = () => {
    toggleTodo(todoItem.id)
  }
  console.log(todoItem)
  return (
    <div className="TodoItem">
      <span>{todoItem.text}</span>
      <div className="Icons">
        <DeleteIcon id="deleteIcon" onClick={handleDelete}></DeleteIcon>
        <CheckCircleOutlineIcon id="check" onClick={handleToggle}></CheckCircleOutlineIcon>
      </div>
    </div>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteTodoFunction: index => dispatch(deleteTodo(index)),
//     toggleTodoFunction: index => dispatch(toggleTodo(index))
//   }
// }

export default connect(null, { deleteTodo, toggleTodo })(TodoItem);