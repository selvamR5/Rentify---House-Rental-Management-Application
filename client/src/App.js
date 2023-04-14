// import logo from './logo.svg';

import React from 'react';
import Chat from './components/inc/Chat/Chat.js'
import Home from './Home.js'
import Navbar from './components/inc/navbar/Navbar.js';
import Maintenance from './components/inc/manageProperty/Maintenance.js'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RentProperty from './components/inc/manageProperty/RentProperty.js';
import DetailedPropertyInfo from './components/inc/DetailedPropertyInfo/DetailedPropertyInfo.js';
import Payments from './components/inc/manageProperty/Payments.js';
import AddPropertyForm from './components/inc/addProperty/addProperty.js';
import MaintenanceDashboard from './components/inc/MaintenanceRequests/MaintananceDashboard.js';
function App() {
  return (
    <div>
      <Navbar />
      <Chat/>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/manage-rental' element={<RentProperty/>}/>
        <Route path='/manage-rental/dashboard' element={<Maintenance/>}/>
        <Route path='/manage-rental/payments' element={<Payments/>}/>
        <Route path='/manage-rental/maintenance' element={<Maintenance/>}/>
        <Route path='/manage-rental/chat' element={<Maintenance/>}/>
        <Route path='/manage-rental/documents' element={<Maintenance/>}/>
        <Route path='/add-property' element={<AddPropertyForm/>}/>
        <Route path='/manage-rental/maintenancedashboard' element={<MaintenanceDashboard/>}/>
        <Route path='/detailed-propertyInfo' element={<DetailedPropertyInfo/>}> </Route> 
      </Routes>
    </div>
  ); 
}

export default App;
