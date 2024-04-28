/* eslint-disable react/prop-types */

export default function TodoCard( props ) {

const { children, itemID, onDelete, onEdit } = props

  return (
    <li className="todoItem"> 

      { children }

      <div className="actionsContainer">

        <button onClick={ ()=> onEdit(itemID) }>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={ ()=> onDelete(itemID) }>
          <i className="fa-solid fa-trash-can"></i>
        </button>

      </div> 
    </li> 
  )
}
