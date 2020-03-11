import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'
import DateTime from '../components/Date'

class MainTasks extends React.Component{
    constructor(props){
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.changeStatus = this.changeStatus.bind(this);
      this.toggleFilter = this.toggleFilter.bind(this);
      this.inputDeadline = this. inputDeadline.bind(this);
      this.handleEditting = this.handleEditting.bind(this);
      this.handleEditDone = this.handleEditDone.bind(this);
      this.handleChangeEidt = this.handleChangeEidt.bind(this);
      this.state={
        tasks: [
          {id: 1, status:0 , content: 'Client meeting @ 2:30pm ', created:'2/3/2020', dead:'10/3/2020'},
        ],
        text: '',
        deadline:'',
        filterStatus:0,
        showedit:false,  
        textedit:''
      }
  }
    toggleFilter(status){
      this.setState({filterStatus:status*1});
    }
  
    inputDeadline(e){
      this.setState({deadline:e.target.value});
    }

    handleChange(e){
      this.setState({
        text: e.target.value
      })
    }
  
    handleAdd(e){
      e.preventDefault();
      if(this.state.text.trim() !== '' && isNaN(Date.parse(this.state.deadline)) == false ){
        const task = {
          id: uuidv4(),
          content: this.state.text,
          status:0,
          created: new Date().toLocaleDateString(),
          dead:this.state.deadline,
        }
        console.log(!isNaN(Date.parse(this.state.deadline)));
        let tasks = [...this.state.tasks];
        tasks.push(task);
    
        this.setState({tasks: tasks});
    
        this.setState({text:''});

        this.setState({deadLine:''});
      } else {alert('Please fill in the input')}
    }
    handleRemove(uid){
      let tasks =[...this.state.tasks];
      for (const task of tasks){
        if(task.id === uid){
          let removeitem = tasks.map((item) => item.id).indexOf(task.id);
          tasks.splice(removeitem,1);
          this.setState({tasks: tasks});
        }
      }
    }
    changeStatus(id){
      let tasks =[...this.state.tasks];
      for (const task of tasks){
        if(task.id === id){
          task.status = 1;
        }
      }
      this.setState({tasks:tasks})
    }
    
    handleEditting(e){
      this.setState({showedit:true})
    }

    handleChangeEidt(e){
      this.setState({
        textedit: e.target.value
      }) 
      
    }

    handleEditDone(event,uid){
     if(event.keyCode == 13) {
      for(const item of this.state.tasks){
        if(item.id  === uid ){
          item.content = this.state.textedit;
        }
      }
      this.setState({showedit:false})
     }
    }

    render(){
      return (
        <div className='row'>
          <div className='col-md-10 col-10 offset-1 offset-md-1 bg-black'>
            <div className="row">
              <div className="col-lg-7 col-md-6 ">
                <div className="heading-left text-md-left text-center">
                  <DateTime/>
                  <div className="count-active-tasks">
                    {this.state.tasks.length} Active Tasks
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 ">
                <div className="row">
                    <div className={classnames('col-md-6 text-center task-filter', this.state.filterStatus === 0 && "active")} onClick={() => this.toggleFilter(0)}>Incomplete Tasks</div>
                    <div className={classnames('col-md-6 text-center task-filter', this.state.filterStatus === 1 && "active")} onClick={() => this.toggleFilter(1)}>Completed Tasks </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <form className="form-custom" onSubmit={this.handleAdd}>
                  <input className="input-task" placeholder="Enter a task..." type="text" 
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                  <input className="input-task ml-10px" placeholder="Enter a deadline..." type="text" 
                    onChange={this.inputDeadline}
                    value={this.state.deadline}
                  />
                  <button type="submit" className="btn-add" >Add Tasks</button>
                </form>
              </div>
              <div className="col-lg-5"></div>
              <div className="col-lg-12 mt-lg-4" >
                {
                  this.state.tasks.map(value => {
                    if(value.status === this.state.filterStatus){
                      return(
                      <div className= "row taskk" key={value.id}>
                        <div className="col-md-1">
                          <a href="#" className="i-check" onClick={this.changeStatus.bind(this,value.id)} ><i className="fa fa-check" aria-hidden="true"></i></a>
                        </div>
                        <div className={classnames(" col-md-6 task-edit",this.state.showedit === false ? 'd-static' :'d-none')} onClick={this.handleEditting}>{value.content}</div>
                        <div className={classnames('col-md-6 task-edit',this.state.showedit === true ? 'd-static' :'d-none')} >
                          <input 
                            className='form-control'
                            type='text' 
                            onKeyDown={(event) => this.handleEditDone(event,value.id)}
                            onChange={this.handleChangeEidt}
                            defaultValue={value.content}
                          />
                        </div>
                        <div className=" col-md-2 text-center" > {value.created } 
                        </div>
                        <div className=" col-md-2 text-center" > {value.dead } 
                        </div>
                        <div className="col-md-1 text-right">
                          <a href="#" className={classnames('i-trash mr-md-3',value.status === 1 && 'd-lg-none')}><i className="fa fa-pencil " aria-hidden="true"></i></a>
                          <a href="#" className={classnames('i-trash',value.status === 1 && 'd-lg-none')} onClick={this.handleRemove.bind(this,value.id)}><i className="fa fa-trash-o " aria-hidden="true"></i></a>
                        </div>
                      </div>
                    )}
                    return null
                  })
                }
              </div>
          </div>
        </div>
      </div>
      )
    }
  }

export default MainTasks