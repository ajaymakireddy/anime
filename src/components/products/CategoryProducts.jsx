import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../Auth";
import styles from './CategoryProducts.module.css';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const { products } = useAuthContext();
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (p) => p.category === categoryName
  );

  return (
    <section className={styles.featuredContainer}>
      <h1>Category: {categoryName}</h1>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : null}

      <div className={styles.exploreMenuList}>
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className={styles.exploreMenuListItem}
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <div className={styles.productImage}>
              <img src={p.image} alt={p.productName}  />

            </div>
            <div className={styles.productInfo}>
              <h3>{p.productName}</h3>
            </div>
            <p>₹{p.cost}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
