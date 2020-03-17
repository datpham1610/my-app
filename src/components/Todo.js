import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {completeTodo, deleteTodo} from '../actions'
import { connect } from 'react-redux'
import EditTodo from './EditTodo'
import { Row, Col } from 'antd';
import "antd/dist/antd.css"; 

const Todo = ({status,content,id,created,dead,dispatch}) => { 
    return (
        <Row className= " taskk" >
            <Col md={{span:1}} className="text-center">
                <i className="fa fa-check i-check" aria-hidden="true" onClick={() => dispatch(completeTodo(id))}></i>
            </Col>
            <Col  md={{span:12}} className={classnames(" task-edit")}>
                <EditTodo 
                    content = {content} 
                    id={id} 
                />
            </Col>
            <Col md={{span:4}} className=" text-center" > {created} </Col>
            <Col md={{span:4}} className=" text-center" > {dead} </Col>
            <Col md={{span:2}} className=" text-right">
                {/* <a href="#"  className={classnames('i-trash mr-md-3')}><i className="fa fa-pencil " aria-hidden="true"></i></a> */}
                <a href="#" className={classnames('i-trash',status === true && 'd-lg-none')} onClick={() => dispatch(deleteTodo(id))}><i className="fa fa-trash-o " aria-hidden="true"></i></a>
            </Col>
        </Row>
    )
}


export default connect() (Todo)