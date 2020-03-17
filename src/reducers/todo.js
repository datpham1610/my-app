const initState = [
    {id: 1, content: "first task", status: false, dead: "03/22/2020", created: "3/17/2020"}
]
const todos = (state = initState, action = {}) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    content: action.content,
                    status:false,
                    created: new Date().toLocaleDateString(),
                    dead: action.dead
                }
            ]
        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? { ...todo, status:!todo.status  } : todo )
        case 'DELETE_TODO':
            return state.map(todo => todo.id === action.id ? state.filter(item => item !== todo) : todo)
        case 'EDIT_TODO':
            return state.map(todo => todo.id === action.payload.id ? {...todo,content:action.payload.content} : todo)
        default:
            return state
    }
}

export default todos