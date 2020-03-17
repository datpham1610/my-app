import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import {completeTodo, showTask} from '../actions'
import TodoList from '../components/TodoList'

const ToggleFilter = () =>{
    return(
        <div className="row">
        <div className={classnames('col-md-6 text-center task-filter')}>Incomplete Tasks</div>
        <div className={classnames('col-md-6 text-center task-filter')}>Completed Tasks </div>
      </div>
    )
}

export default ToggleFilter