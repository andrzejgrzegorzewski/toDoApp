import React from 'react';

const Task= (props) => {

    const styleStrong = {
        color: 'red',
    }

    const {id, text, date, important, active, finishDate,} = props.task;

    if(active){
        return ( 
            <div>
                <p>
                    <strong style={important ? styleStrong : null}>{text}</strong> - to <span>{date} </span>
                    <button style={{margin:"0 10px 0 10px"}} onClick={() => props.change(id)}>It was don </button>
                    <button onClick={() => props.delete(id)}> X </button>
                </p>
            </div>
        );
    } else {

        const finish = new Date(finishDate).toLocaleString();
        return(
            <div>
                <p>
                    <strong>{text}</strong><em> (do it {date}) </em><br/>
                    - confirmation of implementation: <span>{finish}</span>

                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}
 
export default Task;