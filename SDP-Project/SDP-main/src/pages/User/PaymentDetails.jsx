import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PaymentDetails = () => {
  const [formDetails, setFormDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add payment processing logic here
    navigate('/order-placed');
  };

  return (
    <div className="payment-container">
      <div className="payment-image">
        <img src="https://i.pinimg.com/564x/21/35/fe/2135fe453a686d351cc617e42af067c5.jpg" alt="Payment" />
      </div>
      <div className="payment-form">
        <h1 className="font-semibold text-1xl sm:text-0xl md:text-2xl lg:text-2xl">Payment Details</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" name="cardNumber" value={formDetails.cardNumber} onChange={handleChange} required />
          </label>
          <label>
            Card Holder Name:
            <input type="text" name="cardHolderName" value={formDetails.cardHolderName} onChange={handleChange} required />
          </label>
          <label>
            Expiry Date:
            <input type="text" name="expiryDate" value={formDetails.expiryDate} onChange={handleChange} required />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" value={formDetails.cvv} onChange={handleChange} required />
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
