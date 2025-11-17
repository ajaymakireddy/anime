import React, { useState } from "react";
import styles from "./FeaturedProducts.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuthContext } from "../../Auth";

const FeaturedProductsList = () => {
  const { products } = useAuthContext();

  const [productsList, setProductsList] = useState(products);

  const toggleWishlist = (id) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, wishlisted: !p.wishlisted } : p))
    );
  };

  return (
    <section className={styles.listContainer}>
      <h1 className={styles.listTitle}>All Products</h1>

      <div className={styles.grid}>
        {productsList?.map((product) => (
          <div key={product.id} className={styles.gridCard}>
            <div className={styles.gridImageWrapper}>
              <img src={product.image} alt={product.productName} />

              <div
                className={styles.wishlistIcon}
                onClick={() => toggleWishlist(product.id)}
              >
                {product.wishlisted ? (
                  <FaHeart color="red" size={22} />
                ) : (
                  <FaRegHeart color="black" size={22} />
                )}
              </div>
            </div>

            <div className={styles.gridInfo}>
              <h3>{product.productName}</h3>
              <p>RS : ₹{product.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsList;
