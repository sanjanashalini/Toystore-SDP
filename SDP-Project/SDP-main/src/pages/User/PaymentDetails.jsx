import React from 'react';
import './PaymentDetails.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const PaymentDetails = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
}
    return (
        <div className="payment-container">
            <div className="payment-image">
                <img src="https://i.pinimg.com/236x/8d/9f/02/8d9f02e0c31fd21141c5fd98767c76f2.jpg" alt="Payment Options" />
            </div>
            <div className="payment-form">
                <h1><b>Payment Details</b></h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="card-number">Card Number</label>
                        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="card-holder-name">Card Holder Name</label>
                        <input type="text" id="card-holder-name" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exp-date">Expiry Date</label>
                        <input type="text" id="exp-date" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="123" />
                    </div>
                    <button type="submit" onClick = {() => handleNavigation("/order-placed")}>Pay Now</button>
                </form>
                <div className="payment-options">
                    <h3>Other Payment Options</h3>
                    <ul>
                        <li>
                            <img src="https://i.pinimg.com/236x/60/5a/bd/605abdb7af3405c6b20a426b1e128322.jpg" alt="Google Pay" />
                            <span>Google Pay</span>
                        </li>
                        <li>
                            <img src="https://i.pinimg.com/236x/e9/9c/11/e99c1127e426501bddeb9968ffa99223.jpg" alt="Paytm" />
                            <span>Paytm</span>
                        </li>
                        <li>
                            <img src="https://i.pinimg.com/236x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg" alt="Paytm" />
                            <span>PhonePe</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;
