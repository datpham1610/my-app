import uuid, { v4 as uuidv4 } from 'uuid'
var moment = require('moment');

const initState = [
    {id: 1, content: "first task", status: 1, dead: "22/03/2020", created: "17/03/2020"}
]
const todos = (state = initState, action = {}) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuidv4(),
                    content: action.content,
                    status:1,
                    created: moment().format('DD/MM/Y'),
                    dead: action.dead
                }
            ]
        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? { ...todo, status:2  } : todo )
        case 'DELETE_TODO':
            return state.map(todo => todo.id === action.id ? state.filter(item => item !== todo) : todo)
        case 'EDIT_TODO':
            return state.map(todo => todo.id === action.payload.id ? {...todo,content:action.payload.content} : todo)
        case 'TOGGLE_FILTER':
            console.log(state.map(todo => todo.status))
            return state.map(todo => todo.status === action.status ? {...todo} : {...todo})
        default:
            return state
    }
}

export default todos