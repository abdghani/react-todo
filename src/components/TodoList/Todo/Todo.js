import React from 'react';

import classes from './Todo.css';

const Todo = (props) => {

    let todo_class = [classes.todo_task] ;
    if (props.todo.completed == true){
        todo_class.push(classes.done_task);
    }
    
    return (
        <div className={classes.Todo}>
            <input 
                type="checkbox" 
                value = {props.todo.completed}
                defaultChecked={props.todo.completed}
                className={classes.my_check}
                onChange = {() => props.changeStatus(props.unique_key)}
                />
            <span className={todo_class.join(" ")}>
                {props.todo.task}  
            </span>
            <span style={{float:'right'}}>
                <button  
                    className={classes.my_button}
                    onClick = {() => props.deleteTodo(props.unique_key)}>-</button>
            </span>
        </div>
    )
}

export default Todo;