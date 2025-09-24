import React from "react";

export const RoadmapStep = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex items-start">
      {/* Number and Connecting Line */}
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-xl shadow-lg">
          {number}
        </div>
        {!isLast && <div className="w-1 h-24 bg-gray-700 mt-2 rounded"></div>}
      </div>

      {/* Content */}
      <div className="bg-gray-800/50 p-6 rounded-xl flex-grow transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
