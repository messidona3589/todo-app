import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdDeleteOutline} from "react-icons/md";
import styled from "styled-components";
import cn from 'classnames';
import React from "react";

const TodoListItemBLock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;      
    }

    &.checked {
      svg {
        color: #8fce00;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    &:hover {
      color: #ff8787;
    }
  }
`;

const TodoListItemVirtualizedBlock = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
  const {id, text, checked} = todo;

  return (
    <TodoListItemVirtualizedBlock style={style}>
      <TodoListItemBLock>
        <div className={cn("checkbox", {checked})} onClick={()=>onToggle(id)}>
          {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={()=>onRemove(id)}>
          <MdDeleteOutline />
        </div>
      </TodoListItemBLock>
    </TodoListItemVirtualizedBlock>
  );
};

export default React.memo(TodoListItem);