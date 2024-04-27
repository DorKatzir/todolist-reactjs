
import TodoCard from './TodoCard'

export default function TodoList() {

  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from school'
  ]
 
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
