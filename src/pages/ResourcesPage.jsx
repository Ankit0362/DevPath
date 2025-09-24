import React from "react";
import { tools } from "../data/tools";
import { ResourceItemCard } from "../components/ResourceItemCard";
import { PageLayout } from "../components/PageLayout";

export const ResourcesPage = () => (
  <PageLayout
    title="Curated Resources"
    subtitle="A collection of essential tools and materials for your journey."
  >
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 border-b-2 border-sky-500 pb-3 text-white">
        💻 IDEs & Editors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.ides.map((item) => (
          <ResourceItemCard key={item.title} {...item} category="ides" />
        ))}
      </div>
    </section>
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 border-b-2 border-orange-500 pb-3 text-white">
        🌐 Essential Websites
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.Websites.map((item) => (
          <ResourceItemCard key={item.title} {...item} category="websites" />
        ))}
      </div>
    </section>
  </PageLayout>
);
