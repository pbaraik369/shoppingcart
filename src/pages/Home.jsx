import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [loading, SetLoading] = useState(false);
  const [posts, SetPosts] = useState([]);

  async function fetchProductData() {
    SetLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      SetPosts(data);
    } catch (error) {
      console.log("error Found", error);
      SetPosts([]);
    }
    SetLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl space-y-10 space-x-5 p-2 min-h-[80vh] mx-auto">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}{" "}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1>Posts not Found</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
