import React from "react";
import ShimmerCard from "../ShimmerCard";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = ({ data, loading, maxPrice, minPrice, selectedColors }) => {
  // Filter items based on price range
  const filteredItems = loading
    ? []
    : data.items.filter((item) => {
        const itemPrice = item.price || item.rupees;
        const priceMatch = itemPrice >= minPrice && itemPrice <= maxPrice;
        const colorMatch =
          selectedColors.length === 0 || selectedColors.includes(item.color);
        return priceMatch && colorMatch;
      });

  return (
    <div className="w-3/4 p-4">
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div className="grid grid-cols-4 gap-6 px-2 py-2">
        {loading
          ? Array(23)
              .fill(0)
              .map((_, idx) => <ShimmerCard key={idx} />)
          : filteredItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white relative p-4 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300 hover:cursor-pointer group"
                >
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="h-80 w-80 object-contain mb-4 ml-4"
                  />

                  {/* Wishlist box (hidden until hover) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white border border-gray-200 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="mr-2 text-blue-200"
                      />
                      <span className="font-semibold text-[10px] ">
                        WISHLIST
                      </span>
                    </div>
                  </div>

                  {/* Heading and subheading - hidden on hover */}
                  <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h4 className="font-semibold">{item.heading} </h4>
                    <h8 className="text-gray-400 text-[12px]">
                      {item.subheading}{" "}
                    </h8>
                  </div>

                  <p className=" font-semibold text-[9px]">
                    ₹{item.price || item.rupees}
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Cart;
