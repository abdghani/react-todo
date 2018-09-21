

import React from 'react';
import classes from './AddTodo.css';

const AddTodo = (props) => {
    // console.log(props.todo);
    
    return (
        <div className={classes.AddTodo}>
            <p className={classes.head}>
                todos
            </p>
            <input 
                type="text" 
                placeholder="Add a todo " 
                name="todo"  
                className={classes.todo_input}
                onChange={props.todoChangeHandler} 
                value={props.todo}/>

            <button type="button" onClick={props.addATodo} className={classes.my_button}> 
                +
            </button>

        </div>
    )
}

export default AddTodo;