import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../../components/TodoList/TodoList';
import AddTodos from '../../components/AddTodo/AddTodo';
import classes from './Todos.css';
import * as ACTION from '../../store/actions';

class Todos extends Component{
    render(){
        return (
            <div className={classes.Todos}>
                <AddTodos 
                    todoChangeHandler = {(event) => this.props.changeTodoContent(event.target.value)}
                    addATodo = {() => this.props.addATodoHandler()} 
                    todo = {this.props.newtodo}
                    />
                <TodoList 
                    todos = {this.props.todos}
                    changeStatus = {(key) => this.props.changeStatus(key)}
                    deleteTodo = {(key) => this.props.deleteTodo(key)}
                    /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todo_root.todos,
        newtodo: state.todo_root.newTodo,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeTodoContent: (new_val) => dispatch({type: ACTION.CHANGE_NEW_TODO, value: new_val }),
        addATodoHandler: () => dispatch({type: ACTION.ADD_TODO}),
        changeStatus: (key) => dispatch({type: ACTION.CHANGE_STATUS, key: key}),
        deleteTodo: (key) => dispatch({type: ACTION.DELETE_TODO, key: key})
    } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);