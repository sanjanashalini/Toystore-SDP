import React from "react";
import { useNavigate } from "react-router-dom";

import './Userfile.css';
const MenCategory = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on category
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (<>
        <div className= "category-content" >
        <div
        className="category-item"
    onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129155534.webp" alt = "Eyeglasses" />
        <span>Spider man</span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129155075.webp" alt = "Sunglasses" />
        <span>Paw Patrol</span>
        </div>
        < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129151841.webp" alt = "Computer Glasses" />
        <span>Avengers</span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129157097.webp" alt = "Reading Glasses" />
        <span>Harry Potter</span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://i.pinimg.com/236x/37/06/33/3706332e3f1eee45cbb1323a7d5caf39.jpg" alt = "Contact Lenses" />
        <span>Cars and Bikes</span>
            </div>
            < div
className = "category-item"
onClick = {() => handleNavigation("/toyproduct")}
style = {{ cursor: "pointer" }}
      >
    <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17129152996.webp" alt = "Accessories" />
        <span>Baby shark</span>
        </div>
        
        </div></>
  );
};

export default MenCategory;