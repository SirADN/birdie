import React from 'react';
import './App.css';
import Content from './components/Content';
import { HeaderTabsColored } from './components/Header';

function App() {
  const tabs =  [
    "Home",
  ]
  return (
    <div className="app">
      <HeaderTabsColored tabs={tabs}/>
      <Content/>
    </div>
  );
}

export default App;
