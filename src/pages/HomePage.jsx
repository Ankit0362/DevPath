import React, { useState } from "react";
import { Code, Globe, BrainCircuit, BookOpen } from "lucide-react";

import { PathwayCard } from "../components/PathwayCard";
import { VisualRoadmap } from "../components/VisualRoadmap"; // Import the new component

// --- Roadmap Data ---
const webDevRoadmapSteps = [
  {
    number: 1,
    title: "HTML: The Foundation",
    description:
      "Learn the structure of web pages. This is the skeleton of every website.",
  },
  {
    number: 2,
    title: "CSS: The Style",
    description:
      "Master how to style your websites with colors, fonts, and layouts to make them look beautiful.",
  },
  {
    number: 3,
    title: "JavaScript: The Brains",
    description:
      "Add interactivity and logic to your websites to create dynamic user experiences.",
  },
  {
    number: 4,
    title: "React: The Framework",
    description:
      "Build powerful, single-page applications with the most popular JavaScript library.",
  },
  {
    number: 5,
    title: "Git and Github",
    description:
      "Git is a version control system to track code changes, and GitHub is a cloud platform that hosts Git repositories for collaboration.",
  },
  {
    number: 6,
    title: "Nodejs",
    description:
      "Node.js is a JavaScript runtime that lets you run JavaScript on the server to build fast, scalable backend applications.",
  },
  {
    number: 7,
    title: "mongodb",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents for easy scalability and fast development.",
  },
];

const dsaRoadmapSteps = [
  {
    number: 1,
    title: "Basics of Language",
  },
  {
    number: 1,
    title: "Big O Notation",
    description: "Understand how to measure the efficiency of your algorithms.",
  },
  {
    number: 2,
    title: "Arrays & Strings",
    description: "Master the most fundamental data structures.",
  },
  {
    number: 3,
    title: "Linked Lists",
    description: "Learn about nodes, pointers, and dynamic data structures.",
  },
  {
    number: 4,
    title: "Trees & Graphs",
    description:
      "Dive into non-linear data structures, essential for complex problems.",
  },
];

// Main Component
export const HomePage = () => {
  const [viewingRoadmap, setViewingRoadmap] = useState(null); // e.g., 'dsa', 'web-dev', or null

  // Data for the initial pathway selection cards
  const pathways = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      description: "Build a strong foundation for technical interviews.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-700",
      icon: Code,
      steps: dsaRoadmapSteps,
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "From your first webpage to a full-stack masterpiece.",
      gradient: "bg-gradient-to-br from-green-400 to-teal-600",
      icon: Globe,
      steps: webDevRoadmapSteps,
    },

    {
      id: "resources",
      title: "Free Resources",
      description: "Explore a curated collection of free books and tools.",
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-600",
      icon: BookOpen,
      steps: [],
    }, // No steps yet
  ];

  // If a pathway is selected, show the visual roadmap
  if (viewingRoadmap) {
    const selectedPathway = pathways.find((p) => p.id === viewingRoadmap);
    return (
      <VisualRoadmap
        title={selectedPathway.title}
        subtitle={selectedPathway.description}
        steps={selectedPathway.steps}
        onBack={() => setViewingRoadmap(null)}
      />
    );
  }

  // Otherwise, show the default homepage view with cards
  return (
    <div className="container mx-auto">
      <header className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            DevPath
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Your ultimate guide to mastering the skills needed for a successful
          career in tech.
        </p>
      </header>
      <main
        className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        {pathways.map((path) => (
          <PathwayCard
            key={path.id}
            onClick={() => {
              // Only show roadmap if it has steps defined
              if (path.steps && path.steps.length > 0) {
                setViewingRoadmap(path.id);
              } else {
                alert("Roadmap for this topic is coming soon!");
              }
            }}
            title={path.title}
            description={path.description}
            gradient={path.gradient}
            icon={path.icon}
          />
        ))}
      </main>
    </div>
  );
};
