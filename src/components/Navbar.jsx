import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import shopping from "../images/shopping.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="">
      <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img className="h-[50px]" src={shopping} alt="home logo" />
          </div>
        </NavLink>
        <div className="flex item-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className=" text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 flex justify-center items-center bg-green-500 text-xs text-white h-5 w-5 animate-bounce rounded-full
                "
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
