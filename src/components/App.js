import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css';

class App extends Component {

  counter = 6;

  state = {

    tasks: [
      {
        id: 0,
        text: 'Shopping',
        date: '2019-08-22',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Cleaning',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Buying new car',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Spend time with friends.',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'Playing with kids.',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'My first Triathlon',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);

    // tasks.splice(index,1);

    // this.setState({
    //   tasks
    // })
    // or delete with filter


    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({tasks});
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);

    tasks.forEach(task => {
      if(task.id === id){
      task.active = false;
      task.finishDate = new Date().getTime();
      }
    })

    this.setState({tasks})
  }

  addTask = (text, date, important) => {

    const task ={
          id: this.counter,
          text,
          date,
          important,
          active: true,
          finishDate: null,
    }

    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      // basename={process.env.PUBLIC_URL}
      <div className="App" >
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
