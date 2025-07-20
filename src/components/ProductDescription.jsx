import { useParams } from "react-router";
import { lazy, Suspense } from "react";
import { useGetProductDetails } from "../hooks/useGetProductDetails";

const AddOrRemoveButton = lazy(() =>
  import("./AddOrRemoveButton").then((module) => ({
    default: module.AddOrRemoveButton,
  }))
);

export const ProductDescription = () => {
  const { id } = useParams();
  const product = useGetProductDetails(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:px-0">
      <div className="w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full object-scale-down"
        />
      </div>
      <div className="flex flex-col gap-4 ">
        <h3 className="text-2xl font-bold">{product.title}</h3>
        <p className="text-gray-500">{product.description}</p>
        <p className="text-2xl font-bold">{product.price}</p>
        <Suspense>
          <AddOrRemoveButton product={product} />
        </Suspense>
      </div>
    </div>
  );
};
