import "./App.css";
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { useSelector} from "react-redux";
import {changeInput, insert, toggle, remove} from './modules/todos';
import useActions from "./lib/useActions";
import React from "react";
const App = () => {
  const {input, todos} = useSelector(({todos}) => ({
    input: todos.input,
    todos : todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} input={input} onChangeInput={onChangeInput}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default React.memo(App);