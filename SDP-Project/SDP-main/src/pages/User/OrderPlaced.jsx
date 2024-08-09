// src/pages/OrderPlaced.js
import React from 'react';
import './OrderPlaced.css'; // Ensure to import the CSS file

const OrderPlaced = () => {
  return (
    <div className="order-placed-container">
      <div className="order-placed-content">
        <div className="order-placed-image">
          <img src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg" alt="Thank You" />
        </div>
        <div className="order-placed-message">
          <div className="order-placed-icon">
          </div>
          <h1>Thank You for Shopping!</h1>
          <p>Your order has been successfully placed. We appreciate your purchase and hope to see you again soon!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
