import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
const pageSize = 20;
const initialPaginationParams = {
  limit: pageSize,
  skip: 0,
};
export const useGetAllProducts = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productsMap, setProductsMap] = useState({});
  const [hasMoreProducts, setHasMoreProducts] = useState(false);

  const products = Object.values(productsMap).flat();

  const [paginationParams, setPaginationParams] = useState(
    initialPaginationParams
  );

  const searchValue = searchParams.get("q");
  useEffect(() => {
    setPaginationParams(initialPaginationParams);
    setProductsMap({});
    setHasMoreProducts(false);
  }, [searchValue]);

  function fetchNextPage() {
    setPaginationParams((prev) => ({
      ...prev,
      skip: prev.skip + pageSize,
    }));
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const { limit, skip } = paginationParams;
        const query = new URLSearchParams(paginationParams).toString();
        const url = `https://dummyjson.com/products/search?${query}&${searchParams.toString()}`;

        const response = await fetch(url);
        const data = await response.json();

        const newProducts = data.products;
        setProductsMap((prev) => ({ ...prev, [query]: newProducts }));
        setHasMoreProducts(limit + skip < data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [paginationParams, searchParams]);

  return { products, isLoading, hasMoreProducts, fetchNextPage };
};
