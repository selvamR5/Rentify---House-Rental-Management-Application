import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar(props) {

    if(!props.showSidebar){
        return null;
    }
    return (
        <div className='sidebar'>
            <Link to='/'><SidebarRow title = "Home"/></Link>
            <Link><SidebarRow title = "Add a property"/></Link>
            <Link to='/manage-rental'><SidebarRow title = "Manage Property"/></Link>
            <Link><SidebarRow title = "Tenants portal"/></Link>
            <Link><SidebarRow title = "Landlords portal"/></Link>
        </div>
    );
}

export default Sidebar;

