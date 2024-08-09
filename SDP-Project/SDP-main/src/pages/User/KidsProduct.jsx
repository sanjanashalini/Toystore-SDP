import React, { useState } from "react";
import "./UserProduct.css"// Ensure you have the styles defined
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const KidssProduct = () => {
  // Unique data for products
  const products = [
    {
      id: 1,
      name: "Crane Baby Zebra",
      description: "Doll",
      size: "Small",
      color: "white",
      Age:"1 yr",
      price: 1004,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492412432/300/492412432-1_4733.jpeg",
    },
    {
      id: 2,
      name: "Dashing Dino",
      description: "Doll",
      size: "Large",
      color: "Blue",
      Age:"1 yr",
      price: 649,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409348/300/492409348-1.webp",
    },
    {
      id: 3,
      name: "Hippo Toy",
      description: "Toys",
      size: "Medium",
      color: "MultiColor",
      Age:"2 yr",
      price: 900,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492362695/300/492362695.webp",
    },
    {
      id: 4,
      name: "Giraffe",
      description: "Toy",
      size: "Medium",
      color: "Multicolor",
      Age:"1 yr",
      price: 780,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492362687/300/492362687.webp",
    },
    {
      id: 5,
      name: "Polar Animal",
      description: "Puzzel",
      size: "Large",
      color: "Blue",
      Age:"3 yr",
      price: 500,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490086638/300/490086638-1.jpeg",
    },
    {
      id: 6,
      name: "Dino Park",
      description: "Wooden Puzzel",
      size: "small",
      color: "Multicolor",
      Age:"3 yr",
      price: 1090,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492337280/300/492337280.webp",
    },
    {
      id: 7,
      name: "Popit Heart",
      description: "Toy",
      size: "medium",
      color: "multicolor",
      Age:"3 yr",
      price: 150,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408281/300/492408281-1.jpeg",
    },
    {
      id: 8,
      name: "Diicii Knock",
      description: "Board Games",
      size: "Large",
      color: "Blue",
      Age:"5 yr",
      price: 500,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491902263/300/491902263-1.webp",
    },
    {
      id: 9,
      name: "Nerf Elite",
      description: "Nerf Darts",
      size: "Large",
      color: "Blue",
      Age:"8 yr",
      price: 2700,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491902646/300/491902646-1_6262.webp",
    },
    {
      id: 10,
      name: "Ralleyz Skeater",
      description: "Storm Car",
      size: "Large",
      color: "Multicolor",
      Age:"8 yr",
      price: 2475,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408131/300/492408131-1.jpeg",
    },
    {
      id: 11,
      name:"Disney Princess",
      description: "School Bag",
      size: "Large",
      color: "Red",
      Age:"8 yr",
      price: 699,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491635827/300/491635827-1.webp",
    },
    {
      id: 12,
      name: "SpeedUp",
      description: "Basket Ball",
      size: "Large",
      color: "Blue",
      Age:"8 yr",
      price: 2324,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492363287/300/492363287-1.jpeg",
    },
    {
      id: 13,
      name: "Hasbro Toy",
      description: "Toy Kit",
      size: "Large",
      color: "Blue",
      Age:"12 yr",
      price: 1524,
      image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491948147/300/491948147-1.webp",
    },
    {
      id: 14,
      name: "EMotorad ",
      description: "Kick Scooter",
      size: "Large",
      color: "Red",
      Age:"12 yr",
      price: 10067,
      image: "https://hmadmin.hamleys.in/product/493175425/300/LilE%20product%20DP.jpg",
    },
    {
      id: 15,
      name: "Smiggle Mickey mouse",
      description: "School Bag",
      size: "Large",
      color: "Blue",
      Age:"9 yr",
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
           
              <p>Age: {product.Age}</p>
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

export default KidssProduct;
