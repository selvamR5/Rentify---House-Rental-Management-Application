import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar(props) {
    if(!props.showSidebar){
        return null;
    }
    return (
        <div className='sidebar'>
            <SidebarRow title = "Home"/>
            <SidebarRow title = "Add a property"/>
            <SidebarRow title = "Manage Property"/>
            <SidebarRow title = "Tenants portal"/>
            <SidebarRow title = "Landlords portal"/>
        </div>
    );
}

export default Sidebar;

