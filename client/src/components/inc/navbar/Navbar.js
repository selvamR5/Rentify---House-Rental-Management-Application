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
import { Navigate, useNavigate } from 'react-router-dom';
import SearchPage from '../SearchPage/SearchPage';


function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchString, setSearchString] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchString != null & searchString.length >= 3) {
      // Call your function here
      console.log(searchString)
      var val = searchString;
      setSearchString('')
      console.log('Enter key pressed!');
      navigate(`/search/${searchString}`)
    }
  };

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className='header__left'>
          <MenuIcon className="menu" onClick={() => { setShowSidebar(!showSidebar) }} />
          <Link to='/'><img className="header__logo" src={img} alt="" /></Link>
        </div>
        <div className='header__input'>
          <input
            className="inputsearch"
            type="text"
            placeholder="Enter the area or pincode"
            value={searchString}
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          // {(e) => setSearchString(e.target.value)}
          />
          <SearchIcon className='header__inputbutton' />
        </div>
        <LoginButtons />
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Modal />
    </div>
  );
}

export default Navbar;
