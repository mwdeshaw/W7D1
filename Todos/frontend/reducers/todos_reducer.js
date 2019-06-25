import { receiveTodo, receiveTodos} from '../actions/todo_actions.js';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions.js';

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


const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let newState = {};
  switch(action.type) {
    case 'RECEIVE_TODOS':
      action.todos.map((todo) => {newState[todo.id] = todo});
      return newState;
    case 'RECEIVE_TODO':
      // let newObj = Object.assign({action.todo}, state);
      // action.todo
      // return newTodo.merge(state);

    default:
      return oldState;
      }
};

export default todosReducer;