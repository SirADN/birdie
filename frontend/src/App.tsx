import React from 'react';
import './App.css';
import { HeaderTabsColored } from './components/Header';
import Home from './components/Home';

function App() {
  const tabs =  [
    "Home",
  ]
  return (
    <div className="app">
      <HeaderTabsColored tabs={tabs}/>
      <Home/>
    </div>
  );
}

export default App;
