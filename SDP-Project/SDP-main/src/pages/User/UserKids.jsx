import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const kidsCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17132531250-18months.webp" alt = "Eyeglasses" />
        <span>0-18 months </span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/171326020518-36months.webp" alt = "Sunglasses" />
        <span>18-36 months</span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/171334204812_years(1).webp" alt = "Computer Glasses" />
        <span>3-5 years </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17132705845-7years.webp" alt = "Reading Glasses" />
        <span>5-7 years </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17132707387-9years.webp" alt = "Contact Lenses" />
        <span>7-9 years </span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/kidsproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/171334276112_years.webp" alt = "Accessories" />
        <span>12+ years </span>
        </div>
        
        </div></>
  );
};

export default kidsCategory;