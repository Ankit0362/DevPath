import React, { useState } from "react";
import { ResourceCard } from "../components/ResourceCard";
import { PageLayout } from "../components/PageLayout";
import { Section } from "../components/Section";
import { webDevResourcesByLanguage } from "../data/pathwayResources";

export const WebDevPage = () => {
  const [activeTab, setActiveTab] = useState("english");

  return (
    <PageLayout
      title="Web Development"
      subtitle="From your first webpage to a full-stack masterpiece."
    >
      <div className="mb-8 flex border-b border-gray-700">
        <button
          onClick={() => setActiveTab("english")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "english"
              ? "text-white border-b-2 border-purple-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => setActiveTab("hindi")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "hindi"
              ? "text-white border-b-2 border-purple-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          🇮🇳 Hindi
        </button>
      </div>

      {activeTab === "english" && (
        <Section title="English Resources" color="cyan">
          {webDevResourcesByLanguage.english.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </Section>
      )}

      {activeTab === "hindi" && (
        <Section title="Hindi Resources" color="orange">
          {webDevResourcesByLanguage.hindi.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </Section>
      )}
    </PageLayout>
  );
};
