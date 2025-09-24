import React from "react";
import { ArrowUpRight } from "lucide-react";

export const ResourceCard = ({ title, description, type, level, link }) => {
  const levelVariant = {
    Beginner: "from-green-500 to-cyan-500",
    Intermediate: "from-yellow-500 to-orange-500",
    Advanced: "from-red-500 to-purple-500",
  };

  return (
    <div className="group perspective-1000">
      <div className="h-full w-full rounded-xl bg-gray-800/70 border border-gray-700/80 shadow-lg shadow-black/20 p-6 text-white transition-all duration-500 ease-in-out transform-style-3d group-hover:rotate-y-6 group-hover:rotate-x-3 group-hover:scale-105">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-100">{title}</h3>
          <div
            className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${levelVariant[level]}`}
          >
            {level}
          </div>
        </div>
        <p className="text-sm text-sky-300 mb-4 font-mono">{type}</p>
        <p className="text-sm text-gray-300 flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-6 block"
        >
          <button className="w-full bg-gray-700/50 hover:bg-sky-500/50 border border-gray-600 hover:border-sky-400 text-gray-200 hover:text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-300">
            View Resource <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </a>
      </div>
    </div>
  );
};
