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
        <Link to="/manage-rental" onClick={closeSidebar} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <SidebarRow title="Manage Property" />
          {isHovered && (
          <>
            <SidebarRow title="Manage house - Renter" />
            <SidebarRow title="Manage house - Tenant" />
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

