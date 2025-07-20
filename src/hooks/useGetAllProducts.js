import { useState, useEffect } from "react";

const pageSize = 20;

export const useGetAllProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsMap, setProductsMap] = useState({});
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  const products = Object.values(productsMap).flat();

  const [paginationParams, setPaginationParams] = useState({
    limit: pageSize,
    skip: 0,
  });

  function fetchNextPage() {
    setPaginationParams((prev) => ({
      ...prev,
      skip: prev.skip + pageSize,
    }));
  }

  useEffect(() => {
    try {
      setIsLoading(true);

      const { limit, skip } = paginationParams;
      const query = new URLSearchParams(paginationParams).toString();
      const url = `https://dummyjson.com/products?${query}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const newProducts = data.products;
          setProductsMap((prev) => ({ ...prev, [query]: newProducts }));
          setHasMoreProducts(limit + skip < data.total);
        });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [paginationParams]);

  return { products, isLoading, hasMoreProducts, fetchNextPage };
};
