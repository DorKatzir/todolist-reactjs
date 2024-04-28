import { useState, useEffect } from 'react';
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistData (newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos (newTodo){
    const newTodoList = [...todos,  newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos (id){
    const newTodoList = todos.filter((todo, index) => {
      return index !== id
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos (id){
    const valueToEdit = todos[id]
    setTodoValue(valueToEdit)
    handleDeleteTodos(id)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])

  

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} onAddTodo={handleAddTodos} />
      <TodoList todos={todos} onDelete={handleDeleteTodos} onEdit={handleEditTodos} />
    </>
  )
}

