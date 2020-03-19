import React from 'react'
import AddTodo from '../containers/AddTodo'
import Filter from '../containers/Filter'
import TodoList from './TodoList'
import DateTime from './Date'
import { Row, Col } from 'antd';
import "antd/dist/antd.css"; 

const App = () => (
  <Row>
  <Col span={24}>
    <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
      <Row>
      <Col span={20} offset={2} className='bg-black'>
            <Row>
              <Col lg={{span:14}} md={{span:12}}>
                <div className="heading-left text-md-left text-center">
                  <DateTime/>
                </div>
              </Col>
              <Col lg={{span:10}} md={{span:12}}>
                <Filter />
              </Col>
            </Row>
            <Row className="row">
              <AddTodo />
              <Col lg={{span:10}}></Col>
              <TodoList/>              
          </Row>
        </Col>
      </Row>
    </div>
  </Col>
</Row>
)

export default App