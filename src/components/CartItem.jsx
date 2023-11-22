import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("item Removed");
  };
  return (
    <div>
      <div className="flex gap-3 ">
        <div className="h-[200px]">
          <img className="w-full h-full" src={item.image} alt="product" />
        </div>
        <div className="m-4">
          <h1 className="text-gray-700 font-semibold text-lg mt-1 text-left">
            {item.title}
          </h1>
          <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
          <div className="flex justify-between items-center mt-8">
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase className=" bg-red-400 rounded-full w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <div className=" border border-b-gray-500 py-5"></div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
