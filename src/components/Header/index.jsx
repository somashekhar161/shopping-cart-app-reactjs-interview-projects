import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h3 className="font-semibold text-2xl  text-purple-800">
          REACT REDUX SHOPPING CART
        </h3>
        <ul className=" flex gap-4 text-lg font-medium">
          <Link to={"/"}>
            <li
              className={` ${
                pathname === "/" ? "text-blue-700" : "text-black"
              } hover:underline hover:text-blue-700`}
            >
              Home
            </li>
          </Link>
          <Link to={"/cart"}>
            <li
              className={` ${
                pathname === "/cart" ? "text-blue-700" : "text-black"
              } hover:underline hover:text-blue-700`}
            >
              Cart
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
