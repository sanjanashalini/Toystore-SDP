import React from "react";
import { useCart } from "./CartContext";
import './CartPage.css';
import './price.css'
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
  
    calculateSubtotal,
    calculateShipping,
    calculateCouponDiscount,
    calculateOrderTotal,
  } = useCart();
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
};

  return (

    
      
    <div className="cart-page">
      <nav className="navbar">
        <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">Home</button>
        <button className="nav-button">WishList ❤</button>
        <button onClick={() => handleNavigation("/cart")} className="nav-button">Cart 🛒</button>
      </nav>
      <h2>Your Cart</h2>
     
      {cartItems.length === 0 ? (
        <h1><b>Your cart is empty</b></h1>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="product-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-selector">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
             
                 <div className="pl-3">
                  <button className="bg-red-600" onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </button>
                  </div>
                
              </li>
            ))}
          </ul>
          <div className="price-details">
            <h3>Price Details</h3>
          
            <div className="price-item">
              <span>Subtotal:</span>
              <span>₹{calculateSubtotal()}</span>
            </div>
            <div className="price-item">
              <span>Shipping Charges:</span>
              <span>₹{calculateShipping()}</span>
            </div>
            <div className="price-item">
              <span>Coupon Discount:</span>
              <span>-₹{calculateCouponDiscount()}</span>
            </div>
            <div className="price-item total">
              <span>Order Total:</span>
              <span>₹{calculateOrderTotal()}</span>
            </div>
            <button className="proceed-to-pay" onClick = {() => handleNavigation("/address")}>Proceed to Pay</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
