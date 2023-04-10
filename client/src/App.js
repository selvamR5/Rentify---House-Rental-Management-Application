// import logo from './logo.svg';

import React from 'react';
import Home from './Home.js'
import Navbar from './components/inc/navbar/Navbar.js';
import Maintenance from './components/inc/manageProperty/Maintenance.js'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RentProperty from './components/inc/manageProperty/RentProperty.js';
import Payments from './components/inc/manageProperty/Payments.js';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/manage-rental' element={<RentProperty/>}/>
        <Route path='/manage-rental/dashboard' element={<Maintenance/>}/>
        <Route path='/manage-rental/payments' element={<Payments/>}/>
        <Route path='/manage-rental/maintenance' element={<Maintenance/>}/>
        <Route path='/manage-rental/chat' element={<Maintenance/>}/>
        <Route path='/manage-rental/documents' element={<Maintenance/>}/>
      </Routes>
    </div>
  );
}

export default App;
