import React from "react";

export const Section = ({ title, color, children }) => (
  <section className="mb-16">
    <h2
      className={`text-3xl font-semibold mb-8 border-b-2 border-${color}-500 pb-3 text-white`}
    >
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  </section>
);
