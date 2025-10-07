import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= Math.floor(rating) ? "star filled" : "star"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
          <span className="product-badge">NEW</span>
        </div>

        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>

          <div className="product-rating">
            {renderStars(product.rating)}
            <span className="rating-value">({product.rating})</span>
          </div>

          <div className="product-footer">
            <span className="product-price">${product.price}</span>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* ✅ الرسالة تكون في أسفل يسار الشاشة */}
      <div className={`added-message-fixed ${showMessage ? "show" : ""}`}>
        Item Added to Cart
      </div>
    </>
  );
}

export default ProductCard;
