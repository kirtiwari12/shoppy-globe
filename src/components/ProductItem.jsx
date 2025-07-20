import { Link } from "react-router";
import { AddOrRemoveButton } from "./AddOrRemoveButton";

export const ProductItem = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border border-gray-300 rounded-md p-4 flex flex-col cursor-pointer h-96 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-scale-down rounded"
          />
        </div>
        <div className="flex flex-col flex-grow justify-between gap-2 pt-3 min-h-0">
          <div className="overflow-hidden">
            <h3 className="text-lg font-bold line-clamp-2 leading-tight">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              <span className="line-clamp-2">{product.description}</span>
            </p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-lg font-semibold text-gray-800 flex-shrink-0">
              ${product.price}
            </p>

            <AddOrRemoveButton product={product} />
          </div>
        </div>
      </div>
    </Link>
  );
};
