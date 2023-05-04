import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // import CSS file for styling
import Maintenance from "./Maintenance";

const payments = [{id: 1, amount: 3500, description: "Rent", dueDate: "2023-05-06", date:"2022-03-14"}];

const Dashboard = () => {
  const [overduePayments, setOverduePayments] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const overduePayments = payments.filter(payment => {
      const dueDate = new Date(payment.dueDate);
      const timeDiff = dueDate.getTime() - currentDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysDiff >= -4 && daysDiff <= 4;
    });
    setOverduePayments(overduePayments);
  }, []);

  return (
    <div>
      <Maintenance />
      <div className="main-content">
        <h1>Maintenance Dashboard</h1>
        {overduePayments.length > 0 && (
          <div className="reminder-box">
            <h3>Reminder !!!</h3>
            {overduePayments.map(payment => (
              <p key={payment.id}>You have an outstanding payment of ${payment.amount} due on {payment.dueDate}. Please make payment as soon as possible.</p>
            ))}
          </div>
        )}
        <div className="make-payment-box">
          <Link to="/manage-rental/payments">Make Payment</Link>
        </div>
        <div className="contact-us-box">
          <h3>Contact Maintenance Supervisor</h3>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
