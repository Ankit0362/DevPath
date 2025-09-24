import React from "react";
import { ArrowRight } from "lucide-react";

export const PathwayCard = ({
  title,
  description,
  gradient,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative text-left w-full rounded-2xl overflow-hidden p-8 flex flex-col justify-between items-start text-white shadow-2xl group transform hover:scale-105 transition-transform duration-300 ease-in-out ${gradient}`}
    >
      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl inline-block mb-4">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <p className="mt-2 text-gray-200">{description}</p>
      </div>
      <div className="relative z-10 mt-6 bg-white/20 backdrop-blur-sm font-semibold py-2 px-4 rounded-lg flex items-center group-hover:bg-white/30 transition-colors duration-300">
        Explore Pathway{" "}
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </button>
  );
};
