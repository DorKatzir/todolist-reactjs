
export default function TodoList() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from school'
  ]
 
  return (
    <ul className="main">
      {
        todos.map( (todo, i) => <li className="todoItem" key={i}> {todo} </li> )
      }
    </ul>
  )
}
