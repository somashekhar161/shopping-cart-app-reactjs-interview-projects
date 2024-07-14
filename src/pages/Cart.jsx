import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CartTile from "../components/cart-tile";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useSelector((state) => state);
  const cartTotal = useMemo(
    () =>
      parseFloat(
        cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      ).toFixed(2),
    [cart]
  );
  if (!cart.length) {
    return (
      <div className="container text-center text-xl font-semibold p-10">
        <h3>
          Empty Cart Please Add items from{" "}
          <Link to="/" className="underline">
            Home
          </Link>
        </h3>
      </div>
    );
  }
  return (
    <div
      className="mx-auto container items-center sm:items-start
       py-10 flex gap-2 w-full flex-col sm:flex-row justify-around  "
    >
      <div className="flex flex-col gap-4 py-2 px-5 max-h-[80svh]  overflow-auto sm:border-r-2">
        {cart.map((cartItem, index) => (
          <CartTile cartItem={cartItem} key={index}></CartTile>
        ))}
      </div>

      <div className="w-fit divide-y space-y-2  ">
        <h3 className="font-semibold  text-3xl tracking-wider">
          Your Cart Summary
        </h3>
        <div className="font-medium text-lg">Total Item {cart.length}</div>
        <div className="font-medium text-lg">Total : ${cartTotal} MSRP</div>
      </div>
    </div>
  );
}

export default Cart;
