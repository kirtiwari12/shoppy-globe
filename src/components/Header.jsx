import { Link } from "react-router";
import { useTotalItemsInCart } from "../store/slices/cart";

export const Header = () => {
  const totalItemsInCart = useTotalItemsInCart();

  return (
    <div className="border-b border-gray-200 mb-5 ">
      <div className="flex justify-between items-center p-4 container mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Shoppy Globe" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Shoppy Globe</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <div className="flex items-center gap-2 relative">
              {totalItemsInCart > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-5 -right-2">
                  {totalItemsInCart}
                </span>
              )}
              <i className="fa-xl fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
