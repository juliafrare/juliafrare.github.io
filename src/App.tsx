import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';
import TabsComponent from './TabsComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TabsComponent/>
      </header>
    </div>
  );
};

export default App;
