import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../productsData/productData";
import ShimmerCard from "../ShimmerCard";
import Cart from "../productsData/Cart";

const ProductComponents = () => {
  const { category, subcategory } = useParams();

  const categoryKey = subcategory ? `${category}/${subcategory}` : category;
  console.log(categoryKey);
  const data = productData[categoryKey]; // pick correct data
  console.log("data", data);
  const [loading, setLoading] = useState(true);
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(10000);
  const [percentMin, setPercentMin] = useState(0);
  const [percentMax, setPercentMax] = useState(100);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);

  useEffect(() => {
    const getPercent = (value) => ((value - 1000) / (10000 - 1000)) * 100;
    setPercentMin(getPercent(minVal));
    setPercentMax(getPercent(maxVal));
  }, [minVal, maxVal]);

  const handleMouseDownMin = (e) => {
    setIsDraggingMin(true);
    e.preventDefault();
  };

  const handleMouseDownMax = (e) => {
    setIsDraggingMax(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDraggingMin || isDraggingMax) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      const value = Math.round(1000 + (percentage / 100) * (10000 - 1000));
      const clampedValue = Math.max(1000, Math.min(10000, value));

      if (isDraggingMin) {
        setMinVal(clampedValue);
      } else if (isDraggingMax) {
        setMaxVal(clampedValue);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  useEffect(() => {
    // simulate API delay (2 sec) so shimmer effect shows
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [categoryKey]);
  console.log("data", data);
  if (!data) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>404 - Category not found</h2>
      </div>
    );
  }

  return (
    <div className="flex mt-20">
      {/* Sidebar (same for all categories) */}

      <div className="w-1/5 p-4 bg-gray-100 flex flex-col">
        <div className="p-4 flex justify-between items-center border-b border-gray-300">
          <h2 className="font-semibold">FILTER</h2>
          <h4 className="font-semibold text-[#FF3F6C] text-sm cursor-pointer">
            CLEAR ALL
          </h4>
        </div>
        <div className="p-4 border border-gray-300 m-4 rounded-md bg-white h-full">
          <ul className="space-y-2 text-sm text-gray-600 font-mono">
            <li>
              <input type="checkbox" className="custom-checkbox " />
              Men
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox" />
              Women
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox" />
              Boys
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox" />
              Girls
            </li>
          </ul>

          <div className="border-t border-gray-300 mt-4 pt-4">
            <h2 className="font-semibold text-sm">PRICE</h2>
            <div
              className="relative mt-2"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Base line */}
              <div className="border-t border-gray-300 mt-2 h-1"></div>

              {/* Highlighted range */}
              <div
                className="absolute top-0 h-1 bg-pink-400 rounded"
                style={{
                  left: `${percentMin}%`,
                  right: `${100 - percentMax}%`,
                }}
              ></div>

              {/* Draggable Handles - Left */}
              <div
                className="absolute w-3 h-3 bg-pink-500 rounded-full shadow cursor-pointer"
                style={{
                  left: `calc(${percentMin}% - 6px)`,
                  top: "-6px",
                }}
                onMouseDown={handleMouseDownMin}
              ></div>

              {/* Draggable Handles - Right */}
              <div
                className="absolute w-3 h-3 bg-pink-500 rounded-full shadow cursor-pointer"
                style={{
                  left: `calc(${percentMax}% - 6px)`,
                  top: "-6px",
                }}
                onMouseDown={handleMouseDownMax}
              ></div>
            </div>

            {/* Price display */}
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>₹{minVal}</span>
              <span>₹{maxVal}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main content (changes by categoryKey) */}

      <Cart data={data} loading={loading} />
    </div>
  );
};

export default ProductComponents;
