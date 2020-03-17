import React from 'react'
import { connect } from 'react-redux'
import {editTodo} from '../actions'
import { Input } from 'antd';

const EditTodo = ({id,content}) => {
    const UpdateContent = (e) => {
        if(e.keyCode === 13 || e.type === "mouseout"){
            editTodo({id,content:e.target.value})
        }
    }
    return (
        <Input 
            className='form-control'
            type='text' 
            // onMouseOut={}
            onKeyDown={UpdateContent(id)}
            defaultValue={content}
        />
    )
}

const mapDispatch2Props = (dispatch) => {
    return {
        editTodo : (data) => dispatch(editTodo(data))
    }
}
export default connect(null, mapDispatch2Props)(EditTodo)