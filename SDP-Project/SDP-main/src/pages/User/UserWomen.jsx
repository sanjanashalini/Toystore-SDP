import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const WomenCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/girls-product")} 
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129153212.webp" alt = "Eyeglasses" />
        <span>Barbie </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129153909.webp" alt = "Sunglasses" />
        <span>Disney Princess </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/171291541413.webp" alt = "Computer Glasses" />
        <span>Frozen  </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129154828.webp" alt = "Reading Glasses" />
        <span>Little pony </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129154393.webp" alt = "Contact Lenses" />
        <span>Mickey & mini </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/girls-product")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17135305644.webp" alt = "Accessories" />
        <span>Fashion and Accessories </span>
        </div>
        
        </div></>
  );
};

export default WomenCategory;