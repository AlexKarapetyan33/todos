import { useContext} from "react"
import { MyContext } from "../../organisms/TodoContainer/TodoContainer"
import { todosApi } from "../../../api/api"


export const Todo = () => {

  const {todo, dispatch} = useContext(MyContext)

const removeTodo = (id) => {
  todosApi.delOneTodo(dispatch, id)
}

const changeTodo = (id, completed) => {
  todosApi.changeOneTodo(dispatch, id, completed)
}

  return (
    <>
        <li>
          <b>{todo.id}</b>
          <input type={"checkbox"} checked={todo.completed} onChange={() => changeTodo(todo.id, todo.completed)}/>
          <span>{todo.title}</span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    </>
  )
}
