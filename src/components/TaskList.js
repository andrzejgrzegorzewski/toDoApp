import React from 'react';
import Task from './Task';

const TaskList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    
    if(done.length >= 2)
    done.sort((a,b) => b.finishDate - a.finishDate);

    if(active.length >= 2){
        active.sort((a,b) => {
            
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        })
    }

    const activeTasks = active.map(task => 
    <Task 
    key={task.id} 
    task={task} 
    delete={props.delete} 
    change={props.change}
    />);

    const doneTasks = done.map(task => 
    <Task 
    key={task.id} 
    task={task} 
    delete={props.delete} 
    change={props.change}
    />);

    return ( 
        <>
        <hr/>
        <div className="active">
        <h1>Tasks to do!</h1>
        {activeTasks.length > 0 ? activeTasks:<p>No tasks to do - You are lucky MAN!</p>}
        </div>

        <hr/>

        <div className="done">
        <h3>Tasks completed <em>({doneTasks.length})</em></h3>
        {done.length > 3 && <span style={{fontSize: 10}}>Only 3 objects are displayed !!!</span>}
        {doneTasks.slice(0,3)}
        </div>
        </>
     );
}
 
export default TaskList;