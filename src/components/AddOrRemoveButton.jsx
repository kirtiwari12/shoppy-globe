import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../store/slices/cart";

export const AddOrRemoveButton = ({ product, showDeleteButton = false }) => {
  const dispatch = useDispatch();

  const productQuantity = useSelector((state) => {
    return (
      state.cart.cart.find((item) => item.id === product.id)?.quantity || 0
    );
  });

  const isProductInCart = productQuantity > 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(product));
  };

  const handleDeleteFromCart = (e) => {
    e.preventDefault();
    dispatch(deleteFromCart(product.id));
  };

  return (
    <div className="flex items-center gap-2">
      {isProductInCart ? (
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#a1a1a13c] rounded-2xl gap-3">
            <button
              onClick={handleAddToCart}
              className="justify-center bg-blue-500 text-white px-4 py-2 rounded-4xl h-full w-3 hover:bg-blue-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:bg-blue-700 active:shadow-blue-500 active:shadow-lg"
            >
              <i className="fa-solid fa-plus"></i>
            </button>
            <span>{productQuantity}</span>
            <button
              onClick={handleRemoveFromCart}
              className="justify-center bg-red-500 text-white px-4 py-2 rounded-4xl h-full w-3 hover:bg-red-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:bg-red-700 active:shadow-red-500 active:shadow-lg"
            >
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
          {showDeleteButton && (
            <button
              onClick={handleDeleteFromCart}
              className="justify-center bg-gray-500 text-white px-4 py-2 rounded-4xl h-full w-3 hover:bg-red-600 transition-colors cursor-pointer flex items-center gap-2 text-sm font-semiboldshadow-md hover:shadow-lg active:bg-red-700 active:shadow-red-500 active:shadow-lg"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          )}
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
  );
};
