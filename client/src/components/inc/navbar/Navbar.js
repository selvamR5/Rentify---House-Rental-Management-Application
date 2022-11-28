import React from 'react'
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import img from "../../images/logomain.png";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Sidebar from '../sidebar/Sidebar';

const color = red[900];

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
    '&:hover': {
      backgroundColor: red[700],
    
    },
  }));

function navbar(props) {
    
  return (
    <div className = "header">
        <div className='header__left'>
            <MenuIcon className="menu"onClick={() => {props.setShowSidebar(!props.showSidebar)}}/>
            <img className = "header__logo" src = {img} alt = ""/>
        </div>
        
        <div className='header__input'>
            <input className = "inputsearch" type = "text"  placeholder = "Enter the area or pincode"/>
            <SearchIcon className='header__inputbutton'/>
        </div>
        
        <div className='header__right'>
            <ColorButton className = "loginclass" variant="contained" >Login</ColorButton>
    
            <ColorButton className = "loginclass" variant="contained" >Signup</ColorButton>
        </div>

      
    </div>
  )
}

export default navbar
