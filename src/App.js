import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './characterCounter';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
