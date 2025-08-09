import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <div className="text-gray-800">
        <h1 className="text-xl font-bold">Marc</h1>
        <p className="text-sm text-gray-600 -mt-1">Medi Spa</p>
      </div>
    </div>
  );
};

export default Logo;
