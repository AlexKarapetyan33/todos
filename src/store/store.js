const GET_ALL = 'get-all'
const DEL_ONE = 'del-one'
const CHANGE_ONE = 'change-one'
const ADD_TODO = 'add-todo'


const initState = {
    text : '',
    todos : []
}


const reducer = (state, action) => {
    switch(action.type) {
        case GET_ALL :
            return {
                ...state,
                todos : action.payload
            }
            case 'change-text':
            return {
                ...state,
                text : action.payload
            }
            case DEL_ONE :
                return {
                    ...state,
                    todos : state.todos.filter(todo => todo.id !== action.payload)
            }
            case CHANGE_ONE :
                return {
                    ...state, 
                    todos : state.todos.map((todo) => {
                        if(todo.id === action.payload.id){
                            return{...todo, completed : action.payload.newStatus}
                        }else{
                            return todo
                        }
                    })
                }
                case ADD_TODO :
                    return {
                        ...state,
                        todos : [...state.todos, action.payload],
                        text : ''
                    }
        default : 
            return state
    }
}

const getAllActionCreator = (data) => {
    return {type : GET_ALL, payload : data}
}

const delOneActionCreator = (id) => {
    return {type : DEL_ONE, payload : id}
}

const changeOneActionCreator = (id, newStatus) => {
    return {type : CHANGE_ONE, payload : {id, newStatus}}
}

const addTodoActionCreator = (data) => {
    return {type : ADD_TODO, payload : data}
}

export {initState, reducer, getAllActionCreator, delOneActionCreator, changeOneActionCreator, addTodoActionCreator}