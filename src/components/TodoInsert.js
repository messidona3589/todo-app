import {useCallback } from "react";
import {MdAdd} from "react-icons/md";
import styled from "styled-components";

const TodoInsertBlock = styled.form`
  display: flex;
  background: #495057;
  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder{
      color: #dee2e6;
    }
    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = ({onInsert, input, onChangeInput}) => {

  const onChange = useCallback(e => onChangeInput(e.target.value));

  const onSubmit = useCallback(e => {
    if (input) {
      onInsert(input);
      onChangeInput('');
    }
    e.preventDefault();
  });


  return (
    <TodoInsertBlock onSubmit={onSubmit}>
      <input placeholder="Write your task." onChange={onChange} value={input}/>
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInsertBlock>
  );
};

export default TodoInsert;