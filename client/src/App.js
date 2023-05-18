// import logo from './logo.svg';

import React from 'react';
import Chat from './components/inc/Chat/Chat.js'
import Home from './Home.js'
import Navbar from './components/inc/navbar/Navbar.js';
import Maintenance from './components/inc/manageProperty/Maintenance.js'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DetailedPropertyInfo from './components/inc/DetailedPropertyInfo/DetailedPropertyInfo.js';
import Payments from './components/inc/manageProperty/Payments.js';
import Dashboard from './components/inc/manageProperty/Dashboard.js';
import AddPropertyForm from './components/inc/addProperty/addProperty.js';
import MaintenanceDashboard from './components/inc/MaintenanceRequests/MaintananceDashboard.js';
import PrivateRoute from './PrivateRoute.js';
import AccountPage from './components/inc/profile/profile.js';
import SearchPage from './components/inc/SearchPage/SearchPage.js';
import ManageProperty from './components/inc/manageProperty/ManageProperty.js';



function App() {
  return (
    <div>
      <Navbar />   
      <Chat/>
      {/* <Router> */}
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/manage-property' element={ <PrivateRoute> <ManageProperty/> </PrivateRoute>}/>
        <Route path='/manage-rental/dashboard' element={<Dashboard/>}/>
        <Route path='/search/:value' element={<SearchPage/>}/>
        <Route path='/manage-rental/payments' element={<Payments/>}/>
        <Route path='/manage-rental/maintenance' element={<Maintenance/>}/>
        <Route path='/manage-rental/chat' element={<Maintenance/>}/>
        <Route path='/manage-rental/documents' element={<Maintenance/>}/>
        <Route path='/add-property' element={<PrivateRoute> <AddPropertyForm/> </PrivateRoute>}/>
        <Route path='/manage-rental/maintenancedashboard' element={<MaintenanceDashboard/>}/>
        <Route path='/detailed-propertyInfo/:propertyId' element={<DetailedPropertyInfo/>}/> 
        <Route path='/profile' element={<AccountPage/>}/>
      </Routes>
      {/* </Router> */}

     
    </div>




  ); 
}

export default App;
