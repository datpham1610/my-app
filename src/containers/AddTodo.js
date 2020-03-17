import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { DatePicker, Form, Input, Button, Col } from 'antd';
import "antd/dist/antd.css";
import "antd/dist/antd.js";


const AddTodo = () => {
  const onFinish = values =>{
      console.log('All',values)
  }
  return (
      <Col lg={{span:14}}>
        <Form className="form-custom"
          onFinish = {onFinish}
          layout = "inline"
        >
        <Form.Item>
          <Input 
            className=" form-control" 
            placeholder="Enter a task..." 
            type="text" 
          />
        </Form.Item>
        <Form.Item>
          <DatePicker className="form-control" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          <Button htmlType="submit" type="primary" className="form-control btn-add" >Add Tasks</Button>
        </Form.Item>
        </Form>
      </Col>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo : (id,content) => dispatch(addTodo(id,content))
  }
}

export default connect(null,mapDispatchToProps)(AddTodo)