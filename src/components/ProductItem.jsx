import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cart";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const productQuantity = useSelector(
    (state) => state.cart.cart.find((item) => item.id === product.id)?.quantity
  );

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };

  const isProductInCart = useSelector((state) =>
    state.cart.cart.some((item) => item.id === product.id)
  );

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border border-gray-300 rounded-md p-4 flex flex-col cursor-pointer h-96 overflow-hidden">
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
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800 flex-shrink-0">
              ${product.price}
            </p>

            {isProductInCart ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:scale-95 active:bg-blue-700 active:shadow-blue-500 active:shadow-lg"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <span>{productQuantity}</span>
                <button
                  onClick={handleRemoveFromCart}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:scale-95 active:bg-red-700 active:shadow-red-500 active:shadow-lg"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:scale-95 active:bg-blue-700 active:shadow-blue-500 active:shadow-lg"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
