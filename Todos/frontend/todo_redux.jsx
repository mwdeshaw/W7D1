import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

// const tester = <h1>Todos App</h1>;
let store = configureStore();

document.addEventListener('DOMContentLoaded',
  () => {
  const rootEle = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEle);
});

// window.store = store;
// window.store.getState();