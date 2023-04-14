import React, { useState } from "react";
import MaintenanceRequests from "./MaintenanceRequests";
import MaintenanceRequestsForm from "./MaintananceRequestsForm";
import Maintenance from "../manageProperty/Maintenance";
import "./Style.css"
const MaintenanceDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddRequest = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="maintenance-dashboard">
    
      <Maintenance />  
    <div className="center-maintenance">
      
      {!showForm && <button className= "addnewrequest" onClick={handleAddRequest}>New Request</button>}
      {showForm ? (
        <div className="center-form">
        <MaintenanceRequestsForm onClose={handleCloseForm} />
        </div>
      ) : (
        <MaintenanceRequests />
      )}  
        
      </div>
    </div>
  );
};

export default MaintenanceDashboard;
