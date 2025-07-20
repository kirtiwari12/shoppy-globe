import { useState, useEffect } from "react";

export const useGetProductDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }, [id]);

  return product;
};
