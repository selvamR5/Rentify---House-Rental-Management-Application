// import logo from './logo.svg';

import React from 'react';
import Home from './Home.js'
import Navbar from './components/inc/navbar/Navbar.js';
import Maintenenace from './components/inc/manageProperty/Maintenance.js'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RentProperty from './components/inc/manageProperty/RentProperty.js';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/manage' element={<RentProperty/>}/>
        <Route path='/manage/dashboard' element={<Maintenenace/>}/>
        <Route path='/manage/dashboard/payments' element={<Maintenenace/>}/>
        <Route path='/manage/dashboard/maintenance' element={<Maintenenace/>}/>
        <Route path='/manage/dashboard/chat' element={<Maintenenace/>}/>
        <Route path='/manage/dashboard/documents' element={<Maintenenace/>}/>
      </Routes>
    </div>
  );
}

export default App;
