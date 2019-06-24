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


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case 'RECEIVE_TODOS':
      return action.todos;

    case 'RECEIVE_TODO':
      // let newObj = Object.assign({action.todo}, state);
      // action.todo
      // return newTodo.merge(state);

    default:
      return state;
      }
};

export default todosReducer;