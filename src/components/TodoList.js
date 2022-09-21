import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import React, { useCallback } from "react";
import { List } from "react-virtualized";

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`; 

const TodoList = ({todos, onRemove, onToggle}) => {
  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return(
        <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
      );
    }, [onRemove, onToggle, todos],
  );
  
  return(
    <TodoListBlock>
      <List width={512} height={513} rowCount={todos.length} rowHeight={57} rowRenderer={rowRenderer} list={todos} style={{outline: 'none'}} />
    </ TodoListBlock>
  )
};

export default React.memo(TodoList);