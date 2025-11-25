import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FeaturedProducts.module.css";
import { useAuthContext } from "../../Auth";

const FeaturedProductsHome = () => {
  const navigate = useNavigate();

  const { products } = useAuthContext();

  const visibleProducts = products;

  return (
    <section className={styles.featuredContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.featuredTitle}>Featured Products</h1>
        <button
          className={styles.moreBtn}
          onClick={() => navigate("/products")}
        >
          More →
        </button>
      </div>

      <div className={styles.scroller}>
        {visibleProducts.map((product) => (
          <div key={product.id} className={styles.card} onClick={() => navigate('/product/${product.id}')}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.productName} />
            </div>

            <div className={styles.cardInfo}>
              <h3>{product.productName}</h3>
              <p>RS : ₹{product.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsHome;
