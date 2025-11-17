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
    { id: 1, productName: "Casual Cotton Shirt", image: shirt1, cost: 799, wishlisted: false },
    { id: 2, productName: "Premium Denim Shirt", image: shirt2, cost: 999, wishlisted: true },
    { id: 3, productName: "Anime Keychain - Style A", image: keyChain1, cost: 149, wishlisted: false },
    { id: 4, productName: "Anime Keychain - Style B", image: keyChain2, cost: 199, wishlisted: false },
    { id: 5, productName: "Winter Jacket - Black", image: Jacket1, cost: 1999, wishlisted: true },
    { id: 6, productName: "Winter Jacket - Blue", image: Jacket2, cost: 2199, wishlisted: false },
    { id: 7, productName: "Hoodie - Classic Grey", image: Hoodie1, cost: 1299, wishlisted: false },
    { id: 8, productName: "Hoodie - Anime Edition", image: Hoodie2, cost: 1499, wishlisted: true },
    { id: 9, productName: "Sporty Cap - Black", image: Cap1, cost: 299, wishlisted: false },
    { id: 10, productName: "Sporty Cap - Red", image: Cap2, cost: 349, wishlisted: true },
    { id: 11, productName: "Travel Backpack - Black", image: Backpack1, cost: 1499, wishlisted: false },
    { id: 12, productName: "Travel Backpack - Blue", image: Backpack2, cost: 1599, wishlisted: false },
    { id: 13, productName: "Graphic T-Shirt - Yellow", image: Tshirt1, cost: 499, wishlisted: false },
    { id: 14, productName: "Graphic T-Shirt - Black", image: Tshirt2, cost: 599, wishlisted: true },
    { id: 15, productName: "Sunglasses - Classic Black", image: Sunglasses1, cost: 699, wishlisted: false },
    { id: 16, productName: "Sunglasses - Aviator Gold", image: Sunglasses2, cost: 799, wishlisted: true },
    { id: 17, productName: "Sling Bag - Travel Edition", image: Slingbag1, cost: 899, wishlisted: false },
    { id: 18, productName: "Sling Bag - Mini Edition", image: Slingbag2, cost: 799, wishlisted: false }
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
