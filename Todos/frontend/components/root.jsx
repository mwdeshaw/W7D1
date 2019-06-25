import React from 'react';
import {Provider} from 'react-redux';
import TodoList from './app.jsx';

const Root = ({ store }) => (
  <Provider store={ store }>
    <TodoList />
  </Provider>
);


export default Root;