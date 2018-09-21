import * as ACTION from '../actions';

const setTodoLocalStorage = (todos) =>  {
    localStorage.setItem('todos' ,JSON.stringify(todos))
}
const getTodoLocalStorage = () => {
    let items = localStorage.getItem('todos');
    if (items == null){
        return []
    }else{
        return JSON.parse(items) 
    }
}
// console.log();


const initialState = {
    todos :getTodoLocalStorage(),
    newTodo : ""
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case ACTION.CHANGE_STATUS:{
            let newArr = state.todos.filter((item,idx) => {
                if (idx == action.key){
                    item.completed = !item.completed
                }
                return item;
            })
            setTodoLocalStorage(newArr);
            return {
                ...state,
                todos: newArr
            }
            break;
        }
        case ACTION.CHANGE_NEW_TODO:{
            return {
                ...state,
                newTodo: action.value
            }
        }
        case ACTION.ADD_TODO:{
            let _newArray = [...state.todos];
            _newArray.push({
                'task':state.newTodo,
                'completed':false
            });
            setTodoLocalStorage(_newArray)
            return {
                ...state,
                todos :_newArray,
                newTodo : ''
            }
        }
    }
    return state;
}

export default reducer;