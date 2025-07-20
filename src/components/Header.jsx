import { Link } from "react-router";
import { useSelector } from "react-redux";

export const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="border-b border-gray-200 mb-5 ">
      <div className="flex justify-between items-center p-4 container mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Shoppy Globe" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Shoppy Globe</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <div className="flex items-center gap-2">
              {totalItemsInCart > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItemsInCart}
                </span>
              )}
              Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
