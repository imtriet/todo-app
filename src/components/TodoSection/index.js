import React from 'react';
import './index.css'

const TodoSection = ({ todo, toggleTodo }) => {

  const handleCloseBtnClick = () => {
    const el = document.getElementById(`todo-${todo.id}`);
    el.remove();
  };

  const strikethroughTodo = (e) => {
    const isComplete = toggleTodo(todo.id);

    document.getElementById(todo.id).style.textDecoration = isComplete ? 'line-through' : '';
  };

  return (
    <div className='todo' id={`todo-${todo.id}`}>
      <span onClick={strikethroughTodo} id={todo.id}>{todo.value}</span>
      <button className='closeBtn' onClick={handleCloseBtnClick}>x</button>
    </div>
  )
}

export default TodoSection;
