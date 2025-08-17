import { CartItem } from "./CartItem";
import { useCart, useCartTotal } from "../store/slices/cart";
import { Link } from "react-router";

export const Cart = () => {
  const cart = useCart();
  const cartTotal = useCartTotal();

  return (
    <>
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="max-w-2xl mx-auto my-5">
        {cart.length === 0 ? (
          <>
            <div className="text-center text-gray-500">Your cart is empty.</div>
            <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block my-4 cursor-pointer">
                Go to Home
              </button>
            </Link>
          </>
        ) : (
          <>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            <div className="flex justify-between border-y-4 font-bold border-y-gray-900 rounded-xl md:mx-4 p-4 my-4">
              <div>Total:</div>${cartTotal}
            </div>
          </>
        )}
      </div>
    </>
  );
};
