import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './Header';
import { Socials } from './Socials';
import { Activities, Education, Home, JobExperience, Projects, Skills } from "./Tabs";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-main">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
            <Route path='/jobexperience' element={<JobExperience/>} />
            <Route path='/activities' element={<Activities/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/skills' element={<Skills/>} />
          </Routes>
          <Socials/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
