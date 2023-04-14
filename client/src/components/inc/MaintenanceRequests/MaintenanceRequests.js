import React, { useState, useEffect } from "react";
import axios from "axios";

const MaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/requests").then((response) => {
      setRequests(response.data);
    });
  }, []);

  return (
    <div>
     
      <h1>Maintenance Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>
            <h2>{request.title}</h2>
            <p>{request.description}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default MaintenanceRequests;
