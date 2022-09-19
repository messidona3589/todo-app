import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background:#8fce00;
    color: white;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content{
    background: white;
  }
`;

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateBlock>
      <div className="app-title">TODO APP</ div>
      <div className="content">{children}</ div>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;