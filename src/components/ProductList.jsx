import { ProductItem } from "./ProductItem";
import { useGetAllProducts } from "../hooks/useGetAllProducts";

export const ProductList = () => {
  const products = useGetAllProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
