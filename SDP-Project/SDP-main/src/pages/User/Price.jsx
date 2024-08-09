import React from 'react';
import './price.css';
import { useNavigate } from "react-router-dom";
const PriceDetails = () => {
    const mrpPrice = 199.99;
    const discountPrice = 149.99;
    const coupon = "SAVE20";

    const navigate = useNavigate();
    const handleNavigation = (path) => {
      navigate(path);
  };

    return (
        <div className="order-details">
            <h2>Order Summary</h2>
            <div className="price-details">
                <div className="mrp">
                    <span>MRP Price:</span>
                    <span className="price">${mrpPrice.toFixed(2)}</span>
                </div>
                <div className="discount">
                    <span>Discount Price:</span>
                    <span className="price">${discountPrice.toFixed(2)}</span>
                </div>
                <div className="coupon">
                    <span>Coupon Applied:</span>
                    <span className="coupon-code">{coupon}</span>
                </div>
            </div>
            <button className="buy-now" onClick = {() => handleNavigation("/payment")}>
                Buy Now
            </button>
        </div>
    );
};

export default PriceDetails;
