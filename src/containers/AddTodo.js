import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { DatePicker, Form, Input, Button, Col } from 'antd';
import "antd/dist/antd.css";  

// const onFinish = (values,props) => {
//   props.addTodo(values.content,values.deadline.format("MM/DD/Y"))
// };

const AddTodo = (props) => {
  const formRef = React.createRef()
  return (
      <Col lg={{span:14}}>
        <Form className="form-custom"
          onFinish = {values => {
            props.addTodo(values.content,values.deadline.format("DD/MM/Y"))
            formRef.current.resetFields();
          }}
          ref = {formRef}
          name="control-ref"
          layout = "inline"
        >
        <Form.Item 
          name='content' 
          rules={[
            {
              required: true,
              message: 'Please input task!',
            },
          ]}
        >
          <Input 
            className=" form-control" 
            placeholder="Enter a task..." 
            type="text" 
          />
        </Form.Item>
        <Form.Item 
          name="deadline"
          rules={[
            {
              required: true,
              message: 'Please choose deadline!',
            },
          ]}
        >
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
    addTodo : (content,deadline) => dispatch(addTodo(content,deadline))
  }
}

export default connect(null,mapDispatchToProps)(AddTodo)