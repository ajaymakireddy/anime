import React, { useRef } from "react";
import "./FeaturedProducts.css";


const FeaturedProducts = ({products}) => {
    const scrollRef = useRef(null);


    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = current.offsetWidth; // scroll width = container width
        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="featured-container">
            <h1 className="featured-title">Featured Products</h1>

            {/* <div className="scroll-buttons">
        <button onClick={() => scroll("left")}>&lt;</button>
        <button onClick={() => scroll("right")}>&gt;</button>
      </div> */}

            <div className="explore-menu-list" ref={scrollRef}>
                {products.map((product) => (
                    <div key={product.id} className="explore-menu-list-item">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.items} items</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
