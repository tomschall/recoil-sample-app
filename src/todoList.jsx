import React from 'react';
import { useRecoilState } from 'recoil';
import { todosState, todoState } from './atom.js';

function TodoList() {
  const [todos, setTodos] = useRecoilState(todosState);
  // const todos = useRecoilValue(todosState);
  // const setTodos = useSetRecoilState(todosState);
  const [todo, setTodo] = useRecoilState(todoState);

  const onTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const onHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value === '') return;
      setTodos((oldTodos) => [
        ...oldTodos,
        {
          id: oldTodos.length,
          name: todo,
          done: false,
        },
      ]);
      setTodo('');
    }
  };

  return (
    <React.Fragment>
      <h1>Todo List:</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={onTodoChange}
          onKeyDown={onHandleKeyDown}
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TodoList;
