/* eslint-disable react/prop-types */

import { useState } from 'react';

export default function TodoInput({handleAddTodos}) {

  const [todoValue, setTodoValue] = useState('')
  
  return (
    <header>
      <input type="text" value={todoValue} onChange={ (e) => { setTodoValue(e.target.value) }} placeholder="Enter todo..." />
      <button onClick={()=>{handleAddTodos(todoValue)}} >Add</button>
    </header>
  )
}
