import React, { Component } from 'react'
import MainTasks from './containers/Main.js'

class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
            <MainTasks/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
