import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {editTodo} from '../actions'
import { Input } from 'antd';


const EditTodo = ({id,content, editTodo}) => {
    return (
        <Input 
            className='form-control'
            type='text' 
            // onMouseOut={}
            onKeyDown={e => {
                if(e.keyCode === 13){
                    editTodo({id, content: e.target.value})
                }
            }}
            defaultValue={content}
            disabled
        />
    )
}

const mapDispatch2Props = (dispatch) => {
    return {
        editTodo : (data) => dispatch(editTodo(data))
    }
}
export default connect(null, mapDispatch2Props)(EditTodo)