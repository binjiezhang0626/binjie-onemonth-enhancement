import React from 'react';
import './Body.css';
import InputField from './InputField/InputField';
import TodoItems from './TodoItems/TodoItems';


const Body = () => {
  return (
    <div className="Body">
      <InputField />
      <TodoItems />
    </div>
  )
}

export default Body;