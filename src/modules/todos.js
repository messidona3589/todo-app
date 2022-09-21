import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 0;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  checked: false,
}));
export const remove = createAction(REMOVE, id => id);
export const toggle = createAction(TOGGLE, id => id);

export const changeInputAsync = input => dispatch => {
  setTimeout(()=>{
    dispatch(changeInput(input));
  }, 1000);
};

export const insertAsync = text => dispatch => {
  setTimeout(()=>{
    dispatch(insert(text));
  }, 1000);
};

export const removeAsync = id => dispatch => {
  setTimeout(()=>{
    dispatch(remove(id));
  }, 1000);
};

export const toggleAsync = id => dispatch => {
  setTimeout(()=>{
    dispatch(toggle(id));
  }, 1000);
};

const initialState = {
  input: '',
  todos: [],
};

const todos = handleActions(
  {
    [CHANGE_INPUT] : (state, {payload : input}) => 
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT] : (state, {payload : todo}) => 
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [REMOVE] : (state, {payload : id}) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    [TOGGLE] : (state, {payload : id}) => 
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.checked = !todo.checked;
      })
  },
  initialState
);

export default todos;