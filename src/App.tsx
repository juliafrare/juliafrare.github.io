import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';
import TabsComponent from './TabsComponent';
import { Header } from './Header';
import { Socials } from './Socials';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <TabsComponent/>
        <Socials/>
      </header>
    </div>
  );
};

export default App;
