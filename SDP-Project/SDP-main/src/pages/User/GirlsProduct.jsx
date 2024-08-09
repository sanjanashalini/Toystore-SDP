import React, { useState } from "react";
import "./UserProduct.css"// Ensure you have the styles defined
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const GirlsProduct = () => {
  // Unique data for products
  const products = [
    {
      id: 1,
      name: "Barbie",
      description: "Toy Kit",
      size: "Small",
      color: "Pink",
     
      price: 2404,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490803852/300/490803852-4.webp",
    },
    {
      id: 2,
      name: "Barbie",
      description: "Vercel bag",
      size: "Large",
      color: "pink",
      
      price: 649,
      image: "https://hmadmin.hamleys.in/product/493663103/300/493663103-1.jpg",
    },
    {
      id: 3,
      name: "Barbie",
      description: "Versel Toy",
      size: "Medium",
      color: "pink",
     
      price: 900,
      image: "https://hmadmin.hamleys.in/product/493663407/300/493663407-1.jpg",
    },
    {
      id: 4,
      name: "Barbie",
      description: "Toy Kit",
      size: "Medium",
      color: "pink",
     
      price: 3780,
      image: "https://hmadmin.hamleys.in/product/491232286/300/491636216-2.jpg",
    },
    {
      id: 5,
      name: "Barbie",
      description: "Vercel Toy",
      size: "Large",
      color: "Pink",
    
      price: 1500,
      image: "https://hmadmin.hamleys.in/product/493663112/300/493663112-1.jpg",
    },
    {
      id: 6,
      name: "Barbie",
      description: "Mermaid Doll",
      size: "small",
      color: "Multicolor",
    
      price: 1090,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493663108/300/493663108-1_8086.webp",
    },
    {
      id: 7,
      name: "Frozen",
      description: "School Bag",
      size: "medium",
      color: "multicolor",
    
      price: 850,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491636005/300/491636005-1.webp",
    },
    {
      id: 8,
      name: "Frozen",
      description: "Puzzel Pack",
      size: "Large",
      color: "Blue",
    
      price: 2500,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491396008/300/491396008-1.webp",
    },
    {
      id: 9,
      name: "Frozen",
      description: "Ice Palace Kit",
      size: "Large",
      color: "Blue",
    
      price: 1800,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409677/300/492409677-1_7654.jpeg",
    },
    {
      id: 10,
      name: "Disney Princess",
      description: "Horse Carriage kit",
      size: "Large",
      color: "Multicolor",
    
      price: 2475,
      image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494348193/300/494348193-1_3087.webp",
    },
    {
      id: 11,
      name:"Disney Princess",
      description: "School Bag",
      size: "Large",
      color: "Red",
    
      price: 699,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491635827/300/491635827-1.webp",
    },
    {
      id: 12,
      name: "Lego Harry Potter",
      description: "Building Toy set",
      size: "Large",
      color: "Blue",
    
      price: 2324,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176625/300/493176625-1.jpeg",
    },
    {
      id: 13,
      name: "Hasbro Liitle Pony",
      description: "Toy Kit",
      size: "Large",
      color: "Blue",
    
      price: 524,
      image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174755/300/493174755-1_2992.webp",
    },
    {
      id: 14,
      name: "Frank Mickey ",
      description: "Puzzel Set",
      size: "Large",
      color: "Red",
    
      price: 1067,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491602332/300/491602332-1.webp",
    },
    {
      id: 15,
      name: "Smiggle Mickey mouse",
      description: "School Bag",
      size: "Large",
      color: "Blue",
    
      price: 909,
      image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174484/300/493174484-1_3588.webp",
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
            
              <p>₹{product.price}</p>
              <p>Inclusive of all taxes</p>
              <Button className="bg-red-600 border-black">Add to cart</Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GirlsProduct;