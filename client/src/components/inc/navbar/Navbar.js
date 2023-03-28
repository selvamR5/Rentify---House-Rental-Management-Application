import React, { useState } from 'react';
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import img from "../../images/logomain.png";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Modal from '../loginSignupModal/Modal';
import "../loginSignupModal/style.css";
import Sidebar from '../sidebar/Sidebar.js';
import { Link } from 'react-router-dom';


const color = red[900];

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
    '&:hover': {
      backgroundColor: red[700],
    
    },
}));

function Navbar() {
  
  const [show, setShow] = useState(false);
  const [form, setForm] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div className = "header">
        <div className='header__left'>
          <MenuIcon className="menu" onClick={() => {setShowSidebar(!showSidebar)}}/>
          <Link to='/'><img className = "header__logo" src = {img} alt = ""/></Link>
        </div>
        
        <div className='header__input'>
          <input className = "inputsearch" type = "text"  placeholder = "Enter the area or pincode"/>
          <SearchIcon className='header__inputbutton'/>
        </div>
        
        <div className='header__right'>
          <ColorButton className="loginclass" variant="contained" 
          onClick = {() => {
            setShow(true);
            setForm("Login");
          }}>
          Login
          </ColorButton>

          <ColorButton className="loginclass" variant="contained" 
          onClick = {() => {
            setShow(true);
            setForm("SignUp");
          }}>
          Signup
          </ColorButton>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Modal show={show} setShow={setShow} form={form} setForm={setForm}/>
    </div>
  );
}

export default Navbar;
