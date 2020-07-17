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

  const onHandleClick = (id) => {
    setTodos(() => {
      const newTodos = [...todos];
      let [todo] = newTodos.filter((todo) => todo.id === id);
      const index = newTodos.indexOf(todo);
      todo = {
        ...todo,
        done: !todo.done,
      };
      console.log('todo', todo);
      newTodos[index] = todo;
      return newTodos;
    });
  };

  const onHandleDelete = (id) => {
    setTodos(() => {
      const newTodos = [...todos];
      let [todo] = newTodos.filter((todo) => todo.id === id);
      const index = newTodos.indexOf(todo);
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const renderInput = () => {
    return (
      <div>
        <input
          type="text"
          value={todo}
          onChange={onTodoChange}
          onKeyDown={onHandleKeyDown}
        />
      </div>
    );
  };

  const renderTodos = () => {
    if (!todos.length) {
      return (
        <ul>
          <li>all done - drink some beer and enjoy your day...</li>
        </ul>
      );
    }
    return (
      <ul>
        {todos.map((todo) => (
          <li>
            <span
              className={todo.done === true ? 'todo done' : 'todo'}
              key={todo.id}
              onClick={() => onHandleClick(todo.id)}
            >
              {todo.name}
            </span>
            <span>{'   '}</span>
            <span className="todo" onClick={() => onHandleDelete(todo.id)}>
              x
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <h1>Todo List:</h1>
      {renderInput()}
      {renderTodos()}
    </React.Fragment>
  );
}

export default TodoList;
