import axios from "axios"
import { getAllActionCreator, delOneActionCreator, changeOneActionCreator, addTodoActionCreator } from "../store/store"

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export const todosApi = {

   async getAllTodos(dispatch) {
    const response = await instance.get('/todos?_limit=10')
    dispatch(getAllActionCreator(response.data))
   },

   async delOneTodo(dispatch, id) {
    const response = await instance.delete(`/todos/${id}`)
    dispatch(delOneActionCreator(id))
   },

   async changeOneTodo(dispatch, id, completed) {
    const newStatus = !completed
    const response = await instance.patch(`/todos/${id}`, {completed : newStatus})
    dispatch(changeOneActionCreator(id, newStatus))
   },

   async addOneTodo(dispatch, text) {
    const response = await instance.post('/todos', {title : text, completed : false})
    dispatch(addTodoActionCreator(response.data))
   }
}