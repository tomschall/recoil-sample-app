import React from 'react';
import TextInput from './textInput';
import CharacterCount from './characterCount';
import TodoList from './todoList';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
      <TodoList />
    </div>
  );
}

export default CharacterCounter;
