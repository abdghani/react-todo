import React, { Component } from 'react';

import TodoList from '../../components/TodoList/TodoList';
import AddTodos from '../../components/AddTodo/AddTodo';
import classes from './Todos.css';

class Todos extends Component{
    state = {
        todos : [
            {
                'task': 'learn react the easy way',
                'completed': true
            },
            {
                'task': 'Improved react code',
                'completed': false
            },
            {
                'task': 'Learn react harder',
                'completed': false
            },
            {
                'task': 'Forget react, learn redux',
                'completed': false
            }
        ],
        newTodo : ""
    }
    changeTodoContent (event){
        this.setState({newTodo:event.target.value});
    }
    addATodoHandler (){
        if (this.state.newTodo.length == 0){
            alert("Black todo");
        }else{
            const _new_todo_list = [...this.state.todos];
            _new_todo_list.push({
                        'task':this.state.newTodo,
                        'completed': false
            });
            this.setState({todos:_new_todo_list, newTodo:""});
        }
    }

    changeStatus (event,id){
        let todo_list = [...this.state.todos].map((item,_idx) => {
            if (_idx == id){
                item.completed = !item.completed
            }
            return item;
        });
        this.setState({todo:todo_list});
    }

    render(){
        return (
            <div className={classes.Todos}>
                <AddTodos 
                    todoChangeHandler = {(event) => this.changeTodoContent(event)}
                    addATodo = {() => this.addATodoHandler()} 
                    todo = {this.state.newTodo}
                    />
                <TodoList 
                    todos = {this.state.todos}
                    changeStatus = {(event,unique_key) => this.changeStatus(event,unique_key)}
                    />
            </div>
        )
    }
}

export default Todos;