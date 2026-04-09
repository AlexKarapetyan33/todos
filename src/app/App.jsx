import { useReducer, useEffect} from "react"
import { TodoContainer } from "../components/organisms/TodoContainer/TodoContainer"
import { reducer, initState } from "../store/store"
import { todosApi } from "../api/api"




export const App = () => {

  const [state, dispatch] = useReducer(reducer, initState)
  
    useEffect(() =>{
      todosApi.getAllTodos(dispatch)
    }, [])
  
  const addTodo = () => {
    todosApi.addOneTodo(dispatch, state.text)
  }

  return (
    <>
      <input value={state.text} onChange={(e) => dispatch({type : 'change-text', payload : e.target.value})}/>
      <button onClick={addTodo}>Add</button>
        <TodoContainer todos={state.todos} dispatch={dispatch}/>
    </>
  )
}
