import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = { 
        text:'',
        checked: false,
        date: this.minDate,
     }     
     
     handleText = (e) => {

         this.setState({
             text: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
         })
     }
     
     handleCheckbox = (e) => {
         this.setState({
             checked: e.target.checked,
         })
     }

     handleDate = (e) => {
         this.setState({
             date: e.target.value,
         })
     }

     handleClick = () => {

         const {text, checked, date} = this.state;

         if(text.length > 2){
         const add = this.props.add(text, date, checked);
        
         if(add){
            this.setState({
                text:'',
                checked: false,
                date: this.minDate,
            })
         }
        } else {
            alert("The task name is too short !!!")
        }
     }

    render() { 

        let maxDate= this.minDate.slice(0,4) * 1 + 1;
        
        maxDate = "31.12." + maxDate;  //31.12.2020

        return ( 
            <div className="form">
            <h1>toDoApp</h1>
            <input type="text" placeholder="add task" value={this.state.text} onChange={this.handleText}/>
            <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
            <label htmlFor="important">Priority</label>
            <br/>
            <label htmlFor="date" >Until when to do it: </label>
            <input type="date" value={this.state.date} onChange={this.handleDate} min={this.minDate} max={maxDate}/>
            <br/>
            <button onClick={this.handleClick}>Add</button>
                
            
            </div>
         );
    }
}
 
export default AddTask;