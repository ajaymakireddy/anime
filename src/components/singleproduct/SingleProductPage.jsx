import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../Auth.jsx";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useAuthContext();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  // Filter random 4 other products
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="details-container">

      {/* LEFT IMAGES */}
      <div className="left-images">
        <img src={product.image} className="main-image" alt={product.productName} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-info">
        <h3 className="brand-title">The Dojos Figurines</h3>
        <h1 className="product-title">{product.productName}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(35 reviews)</span>
        </div>

        <h2 className="price">₹ {product.cost}</h2>
        <p className="stock-warning">Only 3 left!</p>

        {/* Quantity */}
        <div className="qty-box">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        {/* Buttons */}
        <div className="btn-row">
          <button className="add-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>

        {/* Description */}
        <div className="section">
          <h3>Product Description</h3>
          <p>
            Write the entire description here. Make the text SEO optimized.
          </p>
        </div>

        {/* Specifications */}
        <div className="section">
          <h3>Specifications</h3>
          <ul>
            <li><span>Height</span> 12 inches</li>
            <li><span>Material</span> PVC Plastic</li>
            <li><span>Weight</span> 540 grams</li>
          </ul>
        </div>

        {/* Return Policy */}
        <div className="section">
          <h3>Return Policy</h3>
          <p>Return is only possible if the packaging is unbroken.</p>
        </div>

        {/* Care Guide */}
        <div className="section">
          <h3>Care Guide</h3>
          <p>
            Keep away from sunlight. Dust lightly with a soft brush.
          </p>
        </div>
      </div>

      {/* Customers Also Viewed */}
      <div className="related-products">
        <h2>Customers also viewed</h2>
        <div className="related-list">
          {related.map((item) => (
            <div key={item.id} className="related-card">
              <img src={item.image} alt={item.productName} />
              <p>{item.productName}</p>
              <span>₹ {item.cost}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SingleProductPage;
