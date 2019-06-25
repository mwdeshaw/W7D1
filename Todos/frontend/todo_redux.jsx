import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import {allTodos} from './reducers/selectors.js';

// const tester = <h1>Todos App</h1>;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.store = store;
  // window.allTodos = allTodos;


  const rootEle = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEle);
});

// window.store.getState();