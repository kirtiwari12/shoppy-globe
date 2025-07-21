import { ProductItem } from "./ProductItem";
import { useGetAllProducts } from "../hooks/useGetAllProducts";

export const ProductList = () => {
  const { products, hasMoreProducts, fetchNextPage, isLoading } =
    useGetAllProducts();

  if (products.length === 0 && !isLoading) {
    return (
      <h2 className="text-2xl font-bold text-center">No products found</h2>
    );
  }
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {hasMoreProducts && !isLoading && (
        <button
          onClick={fetchNextPage}
          className="justify-self-center flex bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Load More Products
        </button>
      )}
    </div>
  );
};
