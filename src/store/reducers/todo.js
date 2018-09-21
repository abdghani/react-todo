import * as ACTION from '../actions';

const initialState = {
    todos : [
        {
            'task': 'learn react the easy way',
            'completed': true
        },
        {
            'task': 'Improved react code',
            'completed': true
        },
        {
            'task': 'Learn redux',
            'completed': true
        },
        {
            'task': 'Implement Redux',
            'completed': false
        }
    ],
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
            let _newsArray = [...state.todos];
            _newsArray.push({
                'task':state.newTodo,
                'completed':false
            });
            return {
                ...state,
                todos :_newsArray,
                newTodo : ''
            }
        }
    }
    return state;
}

export default reducer;