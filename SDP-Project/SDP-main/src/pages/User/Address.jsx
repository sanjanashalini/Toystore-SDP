// src/pages/AddressDetails.jsx
import React from "react";
import './Address.css';
import { useNavigate } from "react-router-dom";
const AddressDetails = () => {
    const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
};
  return (
    <div className="address-details">
      <div className="image-container">
        <img src="https://i.pinimg.com/564x/d2/2b/21/d22b217327c97396355f803395e6613a.jpg" alt="Address Details" />
      </div>
      <div className="form-container">
        <h2>Address Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">House/Flat No. & Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
         
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Enter your city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="Enter your state" />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode" placeholder="Enter your pincode" />
          </div>
          <button type="submit" className="confirm-button" onClick = {() => handleNavigation("/payment")}>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default AddressDetails;
