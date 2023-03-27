// import logo from './logo.svg';

import React from 'react';
import Home from './Home.js'
import Navbar from './components/inc/navbar/Navbar.js';
import Maintenenace from './components/inc/manageProperty/Maintenance.js'
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/manage' element={<Maintenenace/>}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
