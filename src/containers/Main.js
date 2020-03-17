import React, { Component, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classnames from 'classnames'
import DateTime from '../components/Date'

const Input =({
  id,
  content,
  handleChangeEidt,
}) => {
  const [showedit, _changeEdit] = useState(false);

  const _editValue = () => {
    _changeEdit(true);
  }

  const focusInput = (component) => {
    if (component) {
      component.focus();
    }
  };

  const _editDone = event => {
    if(event.keyCode === 13 || event.type==='mouseout') {
      _changeEdit(false);
    }
  }

  return (
  <>
  <div className={classnames(" col-md-6 task-edit", showedit === false ? 'd-static' :'d-none')} 
    onClick={_editValue}>{content}</div>
    <div className={classnames('col-md-6 task-edit',showedit === true ? 'd-static' :'d-none')} >
      <input 
        ref={focusInput} 
        className='form-control'
        type='text' 
        onMouseOut={_editDone}
        onKeyDown={_editDone}
        onChange={event => handleChangeEidt(event,id)}
        defaultValue={content}
      />
    </div>
    </>
)
  }

  function TasksActive(props){
    return (
      <div className="count-active-tasks">{props.arr.length} Active Tasks</div>
    )
  }

  function ToggleFilter({
    filter,
    Toggle,
  }){
    return(
      <div className="row">
        <div className={classnames('col-md-6 text-center task-filter', filter === 0 && "active")} onClick={() => Toggle(0)}>Incomplete Tasks</div>
        <div className={classnames('col-md-6 text-center task-filter', filter === 1 && "active")} onClick={() => Toggle(1)}>Completed Tasks </div>
      </div>
    )
  }

  function AddTask({
    Change,
    Title,
    ChangeDeadline,
    Deadline,
    Add
  }){
    return(
      <div className="col-lg-7">
        <form className="form-custom" onSubmit={Add}>
          <input className="input-task" placeholder="Enter a task..." type="text" 
            onChange={Change}
            value={Title}
          />
          <input className="input-task ml-10px" placeholder="Enter a deadline..." type="text" 
            onChange={ChangeDeadline}
            value={Deadline}
          />
          <button type="submit" className="btn-add" >Add Tasks</button>
        </form>
      </div>
    )
  }

  function ShowTasks({
    tasks,
    status,
    changeStatus,
    Remove,
    ChangeEidt
  }){
    return(
      <div className="col-lg-12 mt-lg-4" >
      {
        tasks.map(value => {
          if(value.status === status){
            return(
            <div className= "row taskk" key={value.id}>
              <div className="col-md-1">
                <a href="#" className="i-check" onClick={() => changeStatus(value.id)} ><i className="fa fa-check" aria-hidden="true"></i></a>
              </div>
              <Input 
              {...value}
              handleChangeEidt={ChangeEidt}
              />
              <div className=" col-md-2 text-center" > {value.created } 
              </div>
              <div className=" col-md-2 text-center" > {value.dead } 
              </div>
              <div className="col-md-1 text-right">
                <a href="#" className={classnames('i-trash mr-md-3',value.status === 1 && 'd-lg-none')}><i className="fa fa-pencil " aria-hidden="true"></i></a>
                <a href="#" className={classnames('i-trash',value.status === 1 && 'd-lg-none')} onClick={() => Remove(value.id)}><i className="fa fa-trash-o " aria-hidden="true"></i></a>
              </div>
            </div>
          )}
          return null
        })
      }
    </div>
    )
  }

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

        this.setState({deadline:''});

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
    
    handleEditting(id){
      
      this.setState({showedit:true})
    }

    handleChangeEidt(e, id){
      let tasks = [...this.state.tasks];

      let newTasks = tasks.map(task => {
        if(task.id === id) {
          return {
            ...task,
            content: e.target.value,
          }
        }
        return task;
      });

      this.setState({tasks: newTasks});
    }

    // handleEditDone(event,uid){
    //  if(event.keyCode == 13) {
    //   for(const item of this.state.tasks){
    //     if(item.id  === uid ){
    //       item.content = this.state.textedit;
    //     }
    //   }
    //   // this.setState({showedit:false})
    //  }
    // }

    render(){
      return (
          <div className='col-md-10 col-10 offset-1 offset-md-1 bg-black'>
            <div className="row">
              <div className="col-lg-7 col-md-6 ">
                <div className="heading-left text-md-left text-center">
                  <DateTime/>
                  <TasksActive arr={this.state.tasks} />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 ">
                  <ToggleFilter filter = {this.state.filterStatus}
                                Toggle = {this.toggleFilter}
                  />
              </div>
            </div>
            <div className="row">
              <AddTask 
                Change={this.handleChange}
                Title={this.state.text}
                ChangeDeadline={this.inputDeadline}
                Deadline={this.state.deadline}
                Add={this.handleAdd}
               />
              <div className="col-lg-5"></div>
              <ShowTasks
                  tasks = {this.state.tasks}
                  status = {this.state.filterStatus}
                  changeStatus = {this.changeStatus}
                  Remove = {this.handleRemove}
                  ChangeEidt = {this.handleChangeEidt}
              />
          </div>
        </div>
      )
    }
  }

export default MainTasks