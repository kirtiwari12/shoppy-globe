import { useState, useEffect } from "react";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  return products;
};
