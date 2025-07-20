import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="border-b border-gray-200 mb-5 ">
      <div className="flex justify-between items-center p-4 container mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Shoppy Globe" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Shoppy Globe</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
