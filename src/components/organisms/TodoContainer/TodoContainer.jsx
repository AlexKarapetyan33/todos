import { createContext } from "react"
import { Todo } from "../../molecules/Todo/Todo"

export const MyContext = createContext(null)

export const TodoContainer = ({todos, dispatch}) => {


  return (
    <>
        {
          todos.map((todo) => {
            return <MyContext.Provider value={{todo, dispatch}}>
              <Todo />
              </MyContext.Provider>
          })
        }
    </>
  )
}
