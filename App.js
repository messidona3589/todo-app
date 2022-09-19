import { useReducer, useCallback, useRef } from 'react';
import "./App.css";
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i<= 2500; i++) {
    array.push({
      id: i,
      text: `Todo Item ${i}`,
      checked: false
    });
  }
  return array;
};

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT' :
      return todos.concat(action.todo);
    case 'REMOVE' :
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' :
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);  
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback(text=>{
    dispatch({type: 'INSERT', todo: {id: nextId.current, text, checked: false}});
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id=>{
    dispatch({type: 'REMOVE', id});
  }, []);

  const onToggle = useCallback(id=>{
    dispatch({type: 'TOGGLE', id})
  }, [])

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;