import { useState } from 'react';
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

export default function App() {

  const [todos, setTodos] = useState([
                              'Go to the gym',
                              'Eat more fruits and vege',
                              'Pick up the kids from school'
                            ])

  function handleAddTodos (newTodo){
    const newTodoList = [...todos,  newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

