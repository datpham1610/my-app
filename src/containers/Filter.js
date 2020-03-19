import React from 'react'
import { Col, Row } from 'antd';
import "antd/dist/antd.css"; 
import classnames from 'classnames'
import { toggleFilter } from '../actions';
import { connect } from 'react-redux';

const ToggleFilter = (props) =>{
    return(
        <Row>
        <Col md={{span:12}} className={classnames(' text-center task-filter')}
            onClick={() => props.toggleFilter(1)}
        >Incomplete Tasks</Col>
        <Col md={{span:12}} className={classnames(' text-center task-filter')} 
            onClick={() => props.toggleFilter(2)}
        >Completed Tasks </Col>
      </Row>
    )
}


const mapDispatchToProps = (dispatch) =>{
    return{
        toggleFilter : (status) => dispatch(toggleFilter(status))
    }
}

export default connect(null,mapDispatchToProps)(ToggleFilter)