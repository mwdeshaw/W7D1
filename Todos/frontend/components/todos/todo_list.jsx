import React from 'react';
import todosReducer from '../../reducers/todos_reducer';
import { receiveTodo } from '../../actions/todo_actions';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';
import uniqueId from '../../utils/util';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = [
    //   {
    //     id: 1,
    //     title: 'wash car',
    //     body: 'with soap',
    //     done: false
    //   },
    //   {
    //     id: 2,
    //     title: 'wash dog',
    //     body: 'with shampoo',
    //     done: true
    //   }
    // ];
  }

  
  render() {
    const listItems = this.props.todos.map((todo, idx) => 
      <TodoListItem 
      key={idx}
      todo={todo} />
    );

    return(
    <div className='todo-list'>
      <h1>To Do List...</h1>
      <ul>
          {listItems}   
      </ul>
        <TodoForm 
        key={uniqueId()}
        receiveTodo={receiveTodo} />
    </div>
    );
  }
}

export default TodoList;