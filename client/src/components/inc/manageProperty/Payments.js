import { Grid } from "@mui/material";
import React, { useState } from 'react';
import Maintenance from "./Maintenance";
import "./Payments.css";

function Payments({ payments = [{id: 1, amount: 3500, description: "Rent", dueDate: "2022-04-14", date:"2022-03-14"}]}) {
    const [showPreviousTransactions, setShowPreviousTransactions] = useState(false);
    if (!payments) {
        return <div>No payments to display</div>;
      }
    
  
    const handlePayClick = (paymentId) => {
      // Here you would implement the logic to actually pay the payment with the given ID
      console.log(`Paying payment with ID ${paymentId}`);
    };
    
      
    return(
        <div>
            
                <Maintenance />

                <div className="payment-page">
                    
                    <div className="pending-payments">
                    <h1>Pending Payments</h1>
                        
                        {payments.map((payment) => (
                          
                        <div key={payment.id} className="payment">
                            <div className="payment-header">
                                <div className="payment-amount-heading">Amount</div>
                                <div className="payment-due-date-heading">Due Date</div>
                                <div className="payment-description-heading">Description</div>
                            </div>
                            <div className="payment-details">
                                <div className="payment-amount">${payment.amount}</div>
                                <div className="payment-due-date">{payment.dueDate}</div>
                                <div className="payment-description">{payment.description}</div>
                            </div>
                            <button onClick={() => handlePayClick(payment.id)}>Pay</button>
                        </div>
                        ))}
                    </div>
            
                <div className="previous-transactions">
                    <div className="transactions-container">
                        <h1>Previous Transactions</h1>

                        <button onClick={() => setShowPreviousTransactions(!showPreviousTransactions)}>
      {showPreviousTransactions ? 'Hide Previous Transactions' : 'Show Previous Transactions'}
    </button>
    {showPreviousTransactions && (
      <div className="previous-transactions-list">
        <div className="previous-transaction previous-transaction-header">
            <div className="previous-transaction-amount-heading">Amount</div>
            <div className="previous-transaction-description-heading">Description</div>
            <div className="previous-transaction-date-heading">Date</div>
        </div>
        {payments.map((payment) => (
          <div key={payment.id} className="previous-transaction">
            <div className="previous-transaction-details">
              <div className="previous-transaction-amount">${payment.amount}</div>
              <div className="previous-transaction-description">{payment.description}</div>
              <div className="previous-transaction-date">{payment.date}</div>
          </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>
                </div>  
        </div>
    );
                        }


export default Payments;