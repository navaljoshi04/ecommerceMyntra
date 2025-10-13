import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wishlists = () => {
  console.log("Wishlist mounted!");
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <>
      {!isAuthenticated ? (
        <div className="bg-blue-50 flex flex-col items-center min-h-screen justify-center text-center">
          <div>
            <h2 className="font-bold font-poppin">PLEASE LOG IN </h2>
            <h6 className="text-gray-400 font-poppins mt-6">
              Login to view items in your wishlist.
            </h6>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              alt="trolley"
              className="w-12 h-12 object-contain ml-24 mt-4"
            />
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 font-bold px-4 py-4 rounded-md border w-34 mt-4 border-blue-500"
            >
              LOGIN
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 min-h-screen p-8 mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Welcome, {user?.userName || "User"}!
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Your wishlist is empty</p>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlists;
