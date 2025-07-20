import { lazy, Suspense } from "react";
import { Loading } from "./Loading";

const ProductList = lazy(() =>
  import("./ProductList").then((module) => ({ default: module.ProductList }))
);

export const Home = () => {
  return (
    <Suspense fallback={<Loading message="Loading products..." />}>
      <ProductList />
    </Suspense>
  );
};
