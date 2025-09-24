import React from "react";
import {
  Home,
  Code,
  Globe,
  BrainCircuit,
  Bot,
  BookOpen,
  Users,
  X,
} from "lucide-react";

export const Sidebar = ({ currentPage, setCurrentPage, isOpen, setIsOpen }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dsa", label: "DSA", icon: Code },
    { id: "web-dev", label: "Web Development", icon: Globe },

    { id: "mentor", label: "AI Mentor", icon: Bot },
    { id: "resources", label: "Resources", icon: BookOpen },
    { id: "community", label: "Community", icon: Users },
  ];

  const NavLink = ({ id, label, icon: Icon }) => (
    <li>
      <button
        onClick={() => {
          setCurrentPage(id);
          if (isOpen) setIsOpen(false);
        }}
        className={`w-full flex items-center p-3 my-1 rounded-lg cursor-pointer transition-all duration-300 text-left group
          ${
            currentPage === id
              ? "bg-purple-500/20 text-purple-300"
              : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
          }`}
      >
        <Icon
          className={`mr-4 h-5 w-5 transition-all duration-300 ${
            currentPage === id
              ? "text-purple-400"
              : "text-gray-500 group-hover:text-white"
          }`}
        />
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-900/80 backdrop-blur-lg text-white p-4 border-r border-gray-800 z-20 transition-transform duration-300 ease-in-out ${
        isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full"
      } md:translate-x-0 md:w-64`}
    >
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-center text-white">
          🎓 DevPath
        </h1>
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
