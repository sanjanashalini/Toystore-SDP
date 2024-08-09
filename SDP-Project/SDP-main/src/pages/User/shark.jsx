import React, { useState } from "react";
import "./UserProduct.css"// Ensure you have the styles defined
import { useNavigate } from "react-router-dom";

const Shark = () => {
  // Unique data for products
  const products = [
    {
      id: 1,
      name: "Frank SpiderMan",
      description: "Floor Puzzles",
      size: "Small",
      color: "Multicolor",
     
      price: 404,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491892917/300/491892917-1.jpeg",
    },
    {
      id: 2,
      name: "Marvel Spiderman",
      description: "School bag",
      size: "Large",
      color: "red",
      
      price: 649,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491636054/300/491636054-1.webp",
    },
    {
      id: 3,
      name: "Marvel-Spiderman",
      description: "Versel Scarlet Toy",
      size: "Medium",
      color: "Red",
     
      price: 2000,
      image: "https://hmadmin.hamleys.in/product/493175374/300/493175374-1.jpg",
    },
    {
      id: 4,
      name: "Spiderman",
      description: "Stationery Set Kit",
      size: "Multicolor",
      color: "Blue",
     
      price: 2500,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491667741/300/491667741-1.jpeg",
    },
    {
      id: 5,
      name: "Marvel Spider man",
      description: "Vercel Toy",
      size: "Large",
      color: "Orange",
    
      price: 1500,
      image: "https://hmadmin.hamleys.in/product/493175372/300/493175372-1.jpg",
    },
    // Add more toy products as needed
  ];


  // State to manage products and their favorited status
  const [productList, setProductList] = useState(
    products.map((product) => ({ ...product, isFavorited: false }))
  );

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  // Handler to toggle the favorited status
  const toggleFavorite = (productId) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorited: !product.isFavorited }
          : product
      )
    );
  };

  // Handler to toggle filter selection
  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  // Function to filter products based on selected filters
  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan2000 && product.price < 2000) ||
        (price.lessThan3000 && product.price < 3000) ||
        (!price.lessThan2000 && !price.lessThan3000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();
  const navigate = useNavigate();

  // Function to handle navigation based on category
  const handleNavigation = (path) => {
      navigate(path);
  };
  return (
    <div className="toy-page">
      <nav className="navbar">
        <button onClick={()=>handleNavigation("/shopbycategory")}className="nav-button">Home</button>
        <button className="nav-button">Wishlist ❤</button>
        <button className="nav-button">Cart 🛒</button>
      </nav>
      <aside className="filters">
      <img src = 'https://i.pinimg.com/236x/8a/c2/30/8ac23091d84ae75dfdbba017a74826c2.jpg'></img>
   <img src = 'https://i.pinimg.com/236x/02/69/3a/02693ab4ab69571be35536ffb44cb2c9.jpg'></img>
   <img src = 'https://i.pinimg.com/236x/76/55/d4/7655d4bd41941fed1fe0d3a62a28db73.jpg'></img>
      </aside>
      <main className="products">
        <div className="product-header">
          <h2>Toys</h2>
          <button className="toggle-fit">Enable My Fit</button>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  color: product.isFavorited ? "red" : "transparent",
                  border: "1px solid red",
                }}
                onMouseEnter={(e) =>
                  !product.isFavorited && (e.target.style.color = "rgba(255,0,0,0.5)")
                }
                onMouseLeave={(e) =>
                  !product.isFavorited && (e.target.style.color = "transparent")
                }
              >
                ❤
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <p>Inclusive of all taxes</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shark;
