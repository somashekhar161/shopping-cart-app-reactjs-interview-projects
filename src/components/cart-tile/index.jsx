import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
} from "../../store/slices/cart-slice";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function removeItemfromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  function incrementQantity() {
    dispatch(addToCart(cartItem));
  }
  function decrementCartItemQuantity() {
    dispatch(decrementQuantity(cartItem));
  }
  return (
    <div className="flex rounded border shadow shadow-gray-600 p-2 max-w-lg  w-full justify-between gap-1">
      <div className="h-[180px] w-[200px] group   ">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="group-hover:scale-110 transition-transform duration-300  object-contain h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-1 ">
        <div className="font-medium text-xl max-w-48  truncate">
          {cartItem?.title}
        </div>
        <div className="flex items-center">
          QTY :
          <button
            className=" p-1 mx-4 hover:scale-105 
          transition-transform bg-red-200 rounded-full "
            onClick={decrementCartItemQuantity}
          >
            <FaMinus className="size-4" />
          </button>
          {cartItem.quantity}
          <button
            className=" p-1 mx-4 hover:scale-105 
          transition-transform bg-green-200 rounded-full "
            onClick={incrementQantity}
          >
            <FaPlus className="size-4" />
          </button>
        </div>
        <div>Price : {cartItem?.price}</div>
        <div>Amount : {cartItem?.price * 1}</div>
      </div>
      <div className="flex flex-col">
        <button onClick={removeItemfromCart}>
          <MdDelete className="size-6 hover:scale-105 transition-transform hover:text-red-700" />
        </button>
      </div>
    </div>
  );
}

export default CartTile;
