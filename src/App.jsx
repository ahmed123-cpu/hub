import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FilterButtons from "./components/FilterButtons";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Deals from "./components/Deals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 🟢 Load cart from localStorage at startup
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🟢 Save cart to localStorage on update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🟢 Hide loader after page fully loads
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    // Fallback if load event delays
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 79.99, category: "electronics", rating: 4.5, image: "/wireless-headphones.png" },
    { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing", rating: 4.2, image: "/cotton-tshirt.png" },
    { id: 3, name: "Ceramic Vase", price: 34.99, category: "home", rating: 4.7, image: "/ceramic-vase.png" },
    { id: 4, name: "Smartwatch", price: 199.99, category: "electronics", rating: 4.6, image: "/smartwatch.png" },
    { id: 5, name: "Denim Jacket", price: 89.99, category: "clothing", rating: 4.4, image: "/classic-denim-jacket.png" },
    { id: 6, name: "LED Desk Lamp", price: 45.99, category: "home", rating: 4.3, image: "/led-desk-lamp.png" },
    { id: 7, name: "Bluetooth Speaker", price: 59.99, category: "electronics", rating: 4.5, image: "/bluetooth-speaker.jpg" },
    { id: 8, name: "Running Shoes", price: 119.99, category: "clothing", rating: 4.8, image: "/running.png" },
    { id: 9, name: "Home Library", price: 499.99, category: "home", rating: 4.6, image: "/library.png" },
    { id: 10, name: "Laptop Stand", price: 39.99, category: "electronics", rating: 4.4, image: "/laptop-stand.png" },
    { id: 11, name: "Rolex Watch", price: 299.99, category: "clothing", rating: 4.9, image: "/rolex.png" },
    { id: 12, name: "Throw Pillows", price: 49.99, category: "home", rating: 4.3, image: "/decorative-throw-pillows.png" },
  ];

  // 🟢 Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 🟢 Add to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // 🟢 Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // 🟢 Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <Hero />
      <section id="shop" className="products-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <FilterButtons
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
        </div>
      </section>
      <About />
      <Deals />
      <Contact />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
