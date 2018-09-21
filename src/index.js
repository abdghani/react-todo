import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import todoReducer from './store/reducers/todo';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    todo_root: todoReducer
})

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
