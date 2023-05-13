import React from "react";
import './MaintenanceRequests.css'

const MaintenanceRequests = () => {
  
  const requests = [
    {
      Subject: 'Kitchen Sink repair',
      Description:" Sink in the kitchen got clogged. Please resolve it as soon as possible",
      Status: "Open",
      requestDate:'2023-05-12',
      requestTime :'10:30'
    },
    {
      Subject: 'Broken blinds in the Living room',
      Description:"A couple of blinds in the living room are broken. Can you please fix them as soon as possible. It's troubling us as lots",
      Status: "In-Progress",
      requestDate:'2023-05-23',
      requestTime :'22:00'
    },
    
  ]

  return (
    <div>
      <h1 className="maintenance_requests">Maintenance Requests</h1>
  
      
      {requests.map((request, index) => (
        <div className="requests_card">
        <div className="subject_date">
  <h2 className ="request_subject">{request.Subject}</h2> 
  <h4 className={`status ${request.Status === 'Open' ? 'open-class' : ''} ${request.Status === 'In-Progress' ? 'inprogress-class' : ''} ${request.Status === 'Closed' ? 'closed-class' : ''}`}> {request.Status}</h4>
        </div>
        <h4 className = 'date'>{request.requestDate} {request.requestTime}</h4>
         <h3 className="request_description">{request.Description}</h3>
         
                
        </div>
    ))}
     
    </div>
  );
};

export default MaintenanceRequests;
