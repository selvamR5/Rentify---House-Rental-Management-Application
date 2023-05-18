import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar(props) {


  if (!props.showSidebar) {
    return null;
  }

  const closeSidebar = () => {
    props.setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <Link to="/" onClick={closeSidebar}>
        <SidebarRow title="Home" />
      </Link>
      <Link to="/add-property" onClick={closeSidebar}>
        <SidebarRow title="Add a property" />
      </Link>
      <Link to="/manage-property" onClick={closeSidebar}>
        <SidebarRow title="Manage Property" />
      </Link>
      {/* <Link onClick={closeSidebar}>
          <SidebarRow title="Tenants portal" />
        </Link>
        <Link onClick={closeSidebar}>
          <SidebarRow title="Landlords portal" />
        </Link> */}
    </div>
  );
}


export default Sidebar;

