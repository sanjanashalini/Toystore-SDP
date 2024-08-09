import React from 'react';
import './order.css'; // Import the CSS file

const OrderContainer = ({ title, count }) => {
  return (
    <div className="order-container">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

const Orders = () => {
  // Array with the details for each container
  const orderDetails = [
    { title: 'Number of Orders', count: 7 },
    { title: 'New Orders', count: 7 },
    { title: 'Packed Orders', count: 4 },
    { title: 'Dispatched Orders', count: 1 },
    { title: 'Cancelled Orders', count: 1 },
    { title: 'Returned Orders', count: 1 }, // Example additional category
  ];

  return (
    <div className="orders">
      {orderDetails.map((order, index) => (
        <OrderContainer key={index} title={order.title} count={order.count} />
      ))}
    </div>
  );
};

export default Orders;
