import { receiveTodo, receiveTodos} from '../actions/todo_actions.js';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

// const newTodo = {
//   id: 3,
//   title: 'dry dog',
//   body: 'with towel',
//   done: false
//   };


const todosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });

      return nextState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, oldState, newTodo);

    default:
      return oldState;
      }
};

export default todosReducer;