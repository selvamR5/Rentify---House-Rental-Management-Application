import React from "react";
import MaintenanceRequests from "./MaintenanceRequests";
import Maintenance from "../manageProperty/Maintenance";
import "./MaintenanceStyle.css"
const MaintenanceDashboard = () => {


  return (
    <div className="maintenance-dashboard">
    <div>
    <Maintenance />
  </div>
    
    <div className="center-maintenance">
    <button className= "addnewrequest" >New Request</button>
      
      <MaintenanceRequests />

      </div>
    </div>
  );
};

export default MaintenanceDashboard;
