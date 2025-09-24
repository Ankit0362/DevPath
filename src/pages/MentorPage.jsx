import React from "react";
import { PageLayout } from "../components/PageLayout";
import { Send } from "lucide-react";

export const MentorPage = () => (
  <PageLayout
    title="AI Personalized Mentor"
    subtitle="Your personal guide to navigating your tech career."
  >
    <div className="bg-gray-800/50 rounded-2xl p-6 flex flex-col h-[60vh]">
      <div className="flex-grow overflow-y-auto mb-4 pr-2">
        {/* Chat messages will go here */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl max-w-lg self-start">
          Coming Soon!
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Ask for a roadmap, resources, or project ideas..."
          className="w-full bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-700 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        />
        <button className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-110 transition-transform">
          <Send size={20} />
        </button>
      </div>
    </div>
  </PageLayout>
);
