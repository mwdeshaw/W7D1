import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';


const tester = <h1>Todos App</h1>;

document.addEventListener('DOMContentLoaded',
  () => {
  const root= document.getElementById('root');
  ReactDOM.render(tester, root);
});

let store = configureStore();
window.store = store;
// window.store.getState();