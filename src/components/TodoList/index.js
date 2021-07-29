import React, { Fragment, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoSection from '../TodoSection';

const TodoList = () => {

  const [todoList, setTodoList] = useState([]);
  const inputTextRef = useRef(null);

  const handleBtnClick = (e) => {
    e.preventDefault();
    const text = inputTextRef.current.value;

    if (!text) return;

    setTodoList([...todoList, { id: uuidv4(), value: text, isCompleted: false }]);

    inputTextRef.current.value = '';
  }

  const toggleTodo = (id) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find(todo => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
    setTodoList(newTodoList);

    return todo.isCompleted;
  }

  return (
    <Fragment>
      <h3>
        Your goals today
      </h3>
      <form onSubmit={handleBtnClick}>
        <input ref={inputTextRef} type='text' />
        <button type="submit">Add</button>
      </form>
      {
        todoList.map((todo, index) => {
          return <TodoSection key={index} todo={todo} toggleTodo={toggleTodo} />
        })
      }
    </Fragment>
  )
}

export default TodoList
