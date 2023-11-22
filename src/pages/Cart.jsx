import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="flex justify-center items-center mx-auto gap-5 ">
          <div className="w-[500px] p-5">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col justify-around items-center h-screen">
            <div className="w-full">
              <div className="uppercase text-gray-500 font-semibold">
                Your Cart
              </div>
              <div className="uppercase font-bold text-4xl text-green-600">
                Summary
              </div>
              <p>
                <span className="text-gray-500 font-semibold">
                  Total item:{cart.length}
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                Total Amount :
                <span className=" text-black font-extrabold">
                  ${totalAmount}
                </span>
              </p>
              <button className=" bg-green-600 p-2 w-full text-white font-semibold mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[600px] flex justify-center items-center flex-col">
          <h1 className=" font-semibold text-lg">Cart is Empty</h1>
          <Link to="/">
            <button className=" bg-green-500 p-3 text-white font-semibold mt-3 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
