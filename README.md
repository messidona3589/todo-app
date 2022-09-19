#todo-app - "리액트를 다루는 기술 10장, 11장"

Settings : .prettierrc 설정, index.css 수정 및 App 컴포넌트 초기화

Components : TodoTemplate, TodoInsert, TodoListItem, TodoList

Functions : App에서 Todos 상태 사용하기(todos), 항목 추가 기능 구현하기(Insert), 지우기 기능 구현하기(Remove), 수정 기능 구현하기(Toggle)

Optimization : 
  Reasons for slow speed : Rerendering of Components
  1. props change
  2. state change
  3. mother component change
  4. forceUpdate function
  
  React.memo, useState의 함수형 업데이트 & useReducer 사용, react-virtualized 사용


