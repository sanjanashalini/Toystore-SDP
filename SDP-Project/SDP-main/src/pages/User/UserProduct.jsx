import React, { useState, useEffect } from "react";
import "./UserProduct.css"; // Ensure you have the styles defined
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductData } from "@/services/api";
import { useCart } from "./CartContext";
import toast,{Toaster} from "react-hot-toast";

const ToyProduct = () => {
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  const { addToCart } = useCart(); // Get the addToCart function from the context
const handleCart=(product)=>{
  toast.success("Added to cart");
  addToCart(product);
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductData();
        setProductList(res?.data || []);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="toy-page">
      <nav className="navbar">
        <button onClick={() => handleNavigation("/shopbycategory")} className="nav-button">Home</button>
        <button className="nav-button">Wishlist ❤</button>
        <button onClick={() => handleNavigation("/cart")} className="nav-button">Cart 🛒</button>
      </nav>
      <aside className="filters">
        <img src='https://i.pinimg.com/236x/8a/c2/30/8ac23091d84ae75dfdbba017a74826c2.jpg' alt="Filter 1"></img>
        <img src='https://i.pinimg.com/236x/02/69/3a/02693ab4ab69571be35536ffb44cb2c9.jpg' alt="Filter 2"></img>
        <img src='https://i.pinimg.com/236x/76/55/d4/7655d4bd41941fed1fe0d3a62a28db73.jpg' alt="Filter 3"></img>
      </aside>
      <main className="products">
        <div className="product-header">
          <h2>Toys</h2>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button className="wishlist">
                ❤
              </button>
              <div className="product-info">
                <h6 className='font-bold size'>{product.name}</h6>
                <p>{product.description}</p>
                <p className='font-bold'>Price: ₹{product.price}</p>
                <p className='font-bold'>Color: {product.color}</p>
              </div>
              <button className="add-to-cart" onClick={() => handleCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      <Toaster/>
    </div>
  );
};

export default ToyProduct;
