import React from "react";
import { ArrowUpRight, Book, Code, Github } from "lucide-react";

export const ResourceItemCard = ({ title, description, link, category }) => {
  const icons = {
    ides: <Code size={24} className="text-sky-400" />,
    books: <Book size={24} className="text-orange-400" />,
    github: <Github size={24} className="text-purple-400" />,
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 hover:border-purple-500 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-gray-900/50 p-3 rounded-lg">
              {icons[category]}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors mt-1" />
      </div>
    </a>
  );
};
