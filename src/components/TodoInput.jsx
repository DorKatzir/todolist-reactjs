/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function TodoInput(props) {
  
  const { onAddTodo, todoValue, setTodoValue} = props

  function onAddItem (todoValue) {
    todoValue && onAddTodo(todoValue)
    setTodoValue('')
  }

  return (
    <header>
      <input type="text" value={todoValue} onChange={ (e) => { setTodoValue(e.target.value) }} placeholder="Enter todo..." />
      <button onClick={() => onAddItem(todoValue)} >Add</button>
    </header>
  )
}
