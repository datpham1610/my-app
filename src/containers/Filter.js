import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'
import {completeTodo, showTask} from '../actions'
import TodoList from '../components/TodoList'
import {Row, Col} from 'antd'
import "antd/dist/antd.css";  

const ToggleFilter = () =>{
    return(
        <Row>
        <Col md={{span:12}} className={classnames(' text-center task-filter')}>Incomplete Tasks</Col>
        <Col md={{span:12}} className={classnames(' text-center task-filter')}>Completed Tasks </Col>
      </Row>
    )
}

export default ToggleFilter