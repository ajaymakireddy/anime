import React, { useState, useEffect } from "react";
import styles from "./Wishlist.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuthContext } from "../../Auth";

const Wishlist = () => {
  const { products } = useAuthContext();

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const filtered = products.filter((p) => p.wishlisted);
    setWishlistItems(filtered);
  }, [products]);

  const toggleWishlist = (id) => {
    setWishlistItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, wishlisted: !p.wishlisted } : p
        )
        .filter((p) => p.wishlisted)
    );
  };

  return (
    <section className={styles.listContainer}>
      <h1 className={styles.listTitle}>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your wishlist is empty.</p>
      ) : (
        <div className={styles.grid}>
          {wishlistItems.map((product) => (
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
      )}
    </section>
  );
};

export default Wishlist;
