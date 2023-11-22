import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item remove from cart");
  };

  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-4 mt-10 ml-5 rounded-xl gap-3 ">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 text-left">
          {post.title}
        </p>
      </div>
      <div>
        <p className=" text-gray-400 font-normal w-40 text-left text-[10px]">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className=" w-full h-full" alt="product" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div className="text-green-600 font-semibold  ">${post.price}</div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
