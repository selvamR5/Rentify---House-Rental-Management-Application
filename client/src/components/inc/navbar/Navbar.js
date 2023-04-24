import React, { useState } from 'react';
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import img from "../../images/logomain.png";
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../loginSignupModal/Modal';
import "../loginSignupModal/style.css";
import Sidebar from '../sidebar/Sidebar.js';
import { Link } from 'react-router-dom';
import LoginButtons from './LoginButtons';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div className = "header">
        <div className='header__left'>
          <MenuIcon className="menu" onClick={() => {setShowSidebar(!showSidebar)}}/>
          <Link to='/'><img className="header__logo" src={img} alt=""/></Link>
        </div>
        
        <div className='header__input'>
          <input className="inputsearch" type="text"  placeholder = "Enter the area or pincode"/>
          <SearchIcon className='header__inputbutton'/>
        </div>
        <LoginButtons/>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Modal/>
    </div>
  );
}

export default Navbar;
