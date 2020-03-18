export const addTodo = (content,dead) => ({
    type:'ADD_TODO',
    content,
    dead
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