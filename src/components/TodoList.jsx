/* eslint-disable react/prop-types */

import TodoCard from './TodoCard'

export default function TodoList( props ) {

  const { todos } = props
 
  return (
    <ul className="main">
      { todos.map( 
        (todo, i) => 
          <TodoCard {...props} itemID={i} key={i}>
            <p>{ todo }</p>
          </TodoCard>
      )}
    </ul>
  )
}
