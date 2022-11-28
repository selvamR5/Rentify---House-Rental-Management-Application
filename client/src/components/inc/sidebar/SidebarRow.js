import React from 'react';
import './SidebarRow.css';


function SidebarRow({title}) {
  return (
    <div className='sidebarrow'>
      <h5>{title}</h5>
    </div>
  )
}

export default SidebarRow;
