import React from "react";

export const PageLayout = ({ title, subtitle, children }) => (
  <div className="container mx-auto animate-fade-in-up">
    <div className="mb-12">
      <h1 className="text-5xl font-bold mb-2 text-white">{title}</h1>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </div>
    {children}
  </div>
);
