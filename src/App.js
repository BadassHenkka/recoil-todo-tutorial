import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';

import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <header className='App-header'>
          <TodoList />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
