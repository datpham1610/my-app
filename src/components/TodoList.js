import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import { Col } from 'antd';
import "antd/dist/antd.css"; 

const TodoList = ({todos}) => {
  console.log('Task',todos)
  return(
    <Col lg={{span:24}} className=" mt-lg-4" >
    {
      todos.map(value => {
        if(value.status===false){
          return(
            <Todo
                key = {value.id}
                {...value}
            />

        )}
        return null
      })
    }
  </Col>
)}

const mapState2Props = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapState2Props)(TodoList)