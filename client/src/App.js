// import logo from './logo.svg';

import React, { useState } from 'react';
import Navbar from './components/inc/navbar/Navbar.js';
import Sidebar from './components/inc/sidebar/Sidebar.js';
import RecomApartments from './components/inc/recom_apartments/RecomApartments.js';
import './App.css';



function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  
  return (
    <div className='App'>
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      <div className='app_page'>
        <Sidebar showSidebar={showSidebar}/>
        <RecomApartments/>
      </div>
      
      {/* recommended houses */}
      
  
    </div>

  );
}

export default App;
