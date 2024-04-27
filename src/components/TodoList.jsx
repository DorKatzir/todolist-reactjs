/* eslint-disable react/prop-types */

import TodoCard from './TodoCard'

export default function TodoList({ todos }) {
 
  return (
    <ul className="main">
      { todos.map( 
        (todo, i) => 
          <TodoCard key={i}>
            <p>{todo}</p>
          </TodoCard>
      )}
    </ul>
  )
}
