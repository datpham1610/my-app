import { v4 as uuidv4 } from 'uuid'

export const addTodo = (content,dead) => ({
    type:'ADD_TODO',
    // payload: {
    //     id: uuidv4(),
    //     content,
    //     dead,
    //     status: false,
    //     created: new Date().toLocaleDateString()
    // }
    id: uuidv4(),
    content,
    dead,
    status: false,
    created: new Date().toLocaleDateString()
})

export const completeTodo = id => ({
    type:"COMPLETE_TODO",
    id
})

export const deleteTodo = id  => ({
    type:"DELETE_TODO",
    id
})

export const editTodo = (action) => ({
    type:"EDIT_TODO",
    payload: action
})

export const toggleFilter = status => ({
    type:"TOGGLE_FILTER",
    status
})

export const showTask = {
    
}