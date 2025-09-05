import React from "react";

const getRandomLightColor = () => {
  const colors = [
    "#fef3c7", // light yellow
    "#e0f2fe", // light blue
    "#dcfce7", // light green
    "#fae8ff", // light purple
    "#ffe4e6", // light pink
    "#f1f5f9", // cool gray
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ShimmerCard = () => {
  const bgColor = getRandomLightColor();
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition duration-300">
      <div
        className="bg-gray-200 rounded-lg animate-pulse h-80 w-46 object-contain mb-4 ml-4"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
      <div className="h-3 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  );
};

export default ShimmerCard;
