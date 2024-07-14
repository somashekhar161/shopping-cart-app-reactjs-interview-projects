import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

function ProductTile({ Product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function addItemToCart() {
    dispatch(addToCart(Product));
  }
  function RemoveItemFromCart() {
    dispatch(removeFromCart(Product.id));
  }
  const isProductAdded = useMemo(
    () => cart.some((item) => item.id === Product.id),
    [cart, Product.id]
  );
  return (
    <div className="p-4 sm:p-0">
      <div className=" group flex h-full flex-col  items-center border rounded p-2">
        <div className="h-[180px]  ">
          <img
            src={Product?.image}
            alt={Product?.title}
            className="group-hover:scale-110 transition-transform duration-300  object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold">
            {Product?.title}
          </h1>
        </div>
        <div className="flex flex-col items-end  w-full gap-y-2  py-2">
          <h3 className="font-semibold text-sm ">MSRP : ${Product?.price}</h3>
          {isProductAdded ? (
            <button
              className="border w-40 shadow px-3 p-1 rounded hover:bg-red-600 active:scale-95 transition-transform hover:text-white font-medium"
              onClick={RemoveItemFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="border w-40 shadow px-3 p-1 rounded hover:bg-blue-600 active:scale-95 transition-transform hover:text-white font-medium"
              onClick={addItemToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
