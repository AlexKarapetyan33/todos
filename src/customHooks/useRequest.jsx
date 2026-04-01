import axios from "axios"
import { useState} from "react"

export const useRequest = () => {

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])

    const instanse = axios.create({
        baseURL: ' https://jsonplaceholder.typicode.com'
    })

    const getRequest = () => {
        instanse.get('/todos?_limit=20')
            .then((res) => setTodos(res.data))
    }

    return { todos, getRequest }
}
