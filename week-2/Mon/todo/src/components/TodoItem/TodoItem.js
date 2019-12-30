import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import './TodoItem.css';

const TodoItem = ({ todoItem }) => {
  console.log(todoItem)
  return (
    <div className="TodoItem">
      <span>{todoItem.text}</span>
      <div className="Icons">
        <DeleteIcon id="deleteIcon"></DeleteIcon>
        <CheckCircleOutlineIcon id="check"></CheckCircleOutlineIcon>
      </div>
    </div>
  )
}

export default TodoItem;