import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
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
        <Link onClick={closeSidebar} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <SidebarRow title="Manage Property" />
          {isHovered && (
          <>
            <Link to="/manage-rental-renter" onClick ={closeSidebar}>
              <SidebarRow title="Renter" />
              </Link>
            <Link to="/manage-rental-tenant" onClick ={closeSidebar}>
            <SidebarRow title="Tenant" />
            </Link>
          </>
        )}
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

