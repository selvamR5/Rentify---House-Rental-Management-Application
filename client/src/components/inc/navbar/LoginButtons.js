import React, { useState } from 'react'
import "./Navbar.css";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import SidebarRow from '../sidebar/SidebarRow';
import "../loginSignupModal/style.css";
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { change} from '../../../redux/userId';

const color = red[900];

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
    '&:hover': {
      backgroundColor: red[700],
    
    },
}));

function LoginButtons(props) {

    const userId = useSelector((state) => state.userId.value);
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log(userId);

    function Logout(){
        dispatch(change(""));
        setIsMenuOpen(!isMenuOpen);
    }

    if(userId){
        return(
            <div>
                <div className='account'>
                    <div id="personIcon"><PersonIcon fontSize='medium' style={{color: '#5b1b11'}}/></div>
                    <div id='name'>Nikhil Kumar</div>
                    <div id="arrowIcon" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                        <ArrowDropDownIcon fontSize='medium' style={{color: '#5b1b11'}}/>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className='account-menu'>
                        <Link to='/'><SidebarRow title = "Profile"/></Link>
                        <Link to='/' onClick={Logout}><SidebarRow title = "Log out"/></Link>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className='header__right'>
            <ColorButton className="loginclass" variant="contained" 
            onClick = {() => {
            props.setShow(true);
            props.setForm("Login");
            }}>
            Login
            </ColorButton>

            <ColorButton className="loginclass" variant="contained" 
            onClick = {() => {
            props.setShow(true);
            props.setForm("SignUp");
            }}>
            Signup
            </ColorButton>
        </div>
    );
}

export default LoginButtons;