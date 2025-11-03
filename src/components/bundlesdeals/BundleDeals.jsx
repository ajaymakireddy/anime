import React, { useState } from "react";
import "./BundlesDeals.css";

const BundlesDeals = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const currentProduct = products[currentIndex];

    return (
        <>



            <h1 className="bundles-title">Bundle Deals</h1>

            <div className="bundle-card">

                <div className="bundle-left">
                    <p className="bundle-tag">Best Seller</p>
                    <h2 className="bundle-title">{currentProduct.name}</h2>
                    <p className="bundle-price">${currentProduct.price}</p>
                    <p className="bundle-desc">{currentProduct.description}</p>
                    <button className="bundle-btn">View Bundle</button>
                </div>

                <div className="bundle-right">
                    <img
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        className="bundle-image"
                    />
                </div>

                <div className="bundle-nav">
                    <button onClick={handlePrev}>&lt; Prev</button>
                    <button onClick={handleNext}>Next &gt;</button>
                </div>
            </div>

        </>
    );
};

export default BundlesDeals;
