import React, { Component } from 'react'
import MainTasks from './containers/Main.js'

//test changes bsq

class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
            <div className='row'>
              <MainTasks/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
