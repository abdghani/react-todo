import React from 'react';

import classes from './TodoList.css';
import Todo from './Todo/Todo';

const TodoList = (props) => {
    // console.log(props.todos);
    
    let todo_list = props.todos.map( (_todo,_key) => {
       return  (
                <Todo 
                key = {_key}
                unique_key = {_key}
                todo={_todo}
                changeStatus = {() => props.changeStatus(_key)}
                deleteTodo = {(event) => props.deleteTodo(event,_key)}
                > {_todo} </Todo>)
    })
    
    return (
        <div className={classes.TodoList}>
            <h4>
                Todo List
            </h4>
            <ul>
                {todo_list}
            </ul>
        </div>
    )
}

export default TodoList;