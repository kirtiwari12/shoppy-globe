import { AddOrRemoveButton } from "./AddOrRemoveButton";

export const CartItem = ({ product }) => {
  return (
    <div className="flex items-center justify-between border-2 border-gray-200 rounded-lg p-4 my-4 md:mx-4 gap-2">
      <div className="flex items-center gap-2 h-full">
        <img
          src={product.images[0]}
          alt={product.title}
          className="max-h-30 w-auto"
        />
      </div>
      <div className="flex flex-col items-end gap-2">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-500">
          {product.price} x {product.quantity} = $
          {+(product.price * product.quantity).toFixed(2)}
        </p>
        <AddOrRemoveButton product={product} showDeleteButton={true} />
      </div>
    </div>
  );
};
