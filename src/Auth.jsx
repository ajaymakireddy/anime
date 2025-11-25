import { useContext, createContext } from "react";
import axios from "axios";

import shirt1 from "./images/products/Shirt1.png";
import shirt2 from "./images/products/Shirt2.png";
import keyChain1 from "./images/products/Keychain1.png";
import keyChain2 from "./images/products/Keychain2.png";
import Jacket1 from "./images/products/Jacket1.png";
import Jacket2 from "./images/products/Jacket2.png";
import Hoodie1 from "./images/products/Hoodie1.png";
import Hoodie2 from "./images/products/Hoodie2.png";
import Cap1 from "./images/products/Cap1.png";
import Cap2 from "./images/products/Cap2.png";
import Backpack1 from "./images/products/Backpack1.png";
import Backpack2 from "./images/products/Backpack2.png";
import Tshirt1 from "./images/products/Tshirt1.png";
import Tshirt2 from "./images/products/Tshirt2.png";
import Sunglasses1 from "./images/products/Sunglasses1.png";
import Sunglasses2 from "./images/products/Sunglasses2.png";
import Slingbag1 from "./images/products/Slingbag1.png";
import Slingbag2 from "./images/products/Slingbag1.png";

// 🔥 FIX: Use Uppercase for Context
const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const VITE_API_KEY = import.meta.env.VITE_API_URL;

  const products = [
    // ------------------ PREMIUM FIGURES (20) ------------------
    { id: 1, productName: "Casual Cotton Shirt", image: shirt1, cost: 799, wishlisted: false, category: "Premium Figures" },
    { id: 2, productName: "Premium Denim Shirt", image: shirt2, cost: 999, wishlisted: true, category: "Premium Figures" },
    { id: 3, productName: "Winter Jacket - Black", image: Jacket1, cost: 1999, wishlisted: true, category: "Premium Figures" },
    { id: 4, productName: "Winter Jacket - Blue", image: Jacket2, cost: 2199, wishlisted: false, category: "Premium Figures" },
    { id: 5, productName: "Hoodie - Classic Grey", image: Hoodie1, cost: 1299, wishlisted: false, category: "Premium Figures" },
    { id: 6, productName: "Hoodie - Anime Edition", image: Hoodie2, cost: 1499, wishlisted: true, category: "Premium Figures" },
    { id: 7, productName: "Graphic T-Shirt - Yellow", image: Tshirt1, cost: 499, wishlisted: false, category: "Premium Figures" },
    { id: 8, productName: "Graphic T-Shirt - Black", image: Tshirt2, cost: 599, wishlisted: true, category: "Premium Figures" },

    // Repeat images for remaining 12
    { id: 9, productName: "Premium Figure A", image: shirt1, cost: 799, wishlisted: false, category: "Premium Figures" },
    { id: 10, productName: "Premium Figure B", image: shirt2, cost: 999, wishlisted: true, category: "Premium Figures" },
    { id: 11, productName: "Premium Figure C", image: Jacket1, cost: 1499, wishlisted: false, category: "Premium Figures" },
    { id: 12, productName: "Premium Figure D", image: Jacket2, cost: 1799, wishlisted: false, category: "Premium Figures" },
    { id: 13, productName: "Premium Figure E", image: Hoodie1, cost: 1299, wishlisted: true, category: "Premium Figures" },
    { id: 14, productName: "Premium Figure F", image: Hoodie2, cost: 1599, wishlisted: false, category: "Premium Figures" },
    { id: 15, productName: "Premium Figure G", image: Tshirt1, cost: 699, wishlisted: false, category: "Premium Figures" },
    { id: 16, productName: "Premium Figure H", image: Tshirt2, cost: 799, wishlisted: true, category: "Premium Figures" },
    { id: 17, productName: "Premium Figure I", image: shirt1, cost: 899, wishlisted: false, category: "Premium Figures" },
    { id: 18, productName: "Premium Figure J", image: shirt2, cost: 999, wishlisted: true, category: "Premium Figures" },
    { id: 19, productName: "Premium Figure K", image: Hoodie1, cost: 1499, wishlisted: false, category: "Premium Figures" },
    { id: 20, productName: "Premium Figure L", image: Hoodie2, cost: 1599, wishlisted: false, category: "Premium Figures" },

    // ------------------ KEYCHAINS (20) ------------------
    { id: 21, productName: "Anime Keychain - Style A", image: keyChain1, cost: 149, wishlisted: false, category: "Keychains" },
    { id: 22, productName: "Anime Keychain - Style B", image: keyChain2, cost: 199, wishlisted: false, category: "Keychains" },

    // Repeat image sets for remaining 18
    ...Array.from({ length: 18 }, (_, i) => ({
      id: 23 + i,
      productName: `Anime Keychain - Variant ${i + 1}`,
      image: i % 2 === 0 ? keyChain1 : keyChain2,
      cost: 149 + (i % 3) * 20,
      wishlisted: false,
      category: "Keychains"
    })),

    // ------------------ MINIATURES (20) ------------------
    { id: 41, productName: "Sporty Cap - Black", image: Cap1, cost: 299, wishlisted: false, category: "Miniatures" },
    { id: 42, productName: "Sporty Cap - Red", image: Cap2, cost: 349, wishlisted: true, category: "Miniatures" },
    { id: 43, productName: "Travel Backpack - Black", image: Backpack1, cost: 1499, wishlisted: false, category: "Miniatures" },
    { id: 44, productName: "Travel Backpack - Blue", image: Backpack2, cost: 1599, wishlisted: false, category: "Miniatures" },

    // Add remaining 16 using same images
    ...Array.from({ length: 16 }, (_, i) => ({
      id: 45 + i,
      productName: `Miniature Item ${i + 1}`,
      image: [Cap1, Cap2, Backpack1, Backpack2][i % 4],
      cost: 299 + (i % 5) * 50,
      wishlisted: false,
      category: "Miniatures"
    })),

    // ------------------ BUBBLE HEADS (20) ------------------
    { id: 61, productName: "Sunglasses - Classic Black", image: Sunglasses1, cost: 699, wishlisted: false, category: "Bubble Heads" },
    { id: 62, productName: "Sunglasses - Aviator Gold", image: Sunglasses2, cost: 799, wishlisted: true, category: "Bubble Heads" },

    // Add remaining 18
    ...Array.from({ length: 18 }, (_, i) => ({
      id: 63 + i,
      productName: `Bubble Head Item ${i + 1}`,
      image: i % 2 === 0 ? Sunglasses1 : Sunglasses2,
      cost: 699 + (i % 4) * 30,
      wishlisted: false,
      category: "Bubble Heads"
    }))
  ];


  const api = axios.create({
    baseURL: VITE_API_KEY,
    headers: { "Content-Type": "application/json" }
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  const axiosInstance = {
    get: (url, params = {}) => api.get(url, { params }),
    post: (url, data) => api.post(url, data),
    put: (url, data) => api.put(url, data),
    delete: (url, data = {}) => api.delete(url, { data }),
  };

  return (
    <AuthContext.Provider value={{ axiosInstance, products }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
