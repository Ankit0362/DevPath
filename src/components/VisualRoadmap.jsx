import React from "react";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { RoadmapStep } from "./RoadmapStep";

export const VisualRoadmap = ({ title, subtitle, steps, onBack }) => {
  return (
    <div className="animate-fade-in-up">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 font-semibold text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={18} />
        Back to All Pathways
      </button>
      <PageLayout title={title} subtitle={subtitle}>
        <div>
          {steps.map((step, index) => (
            <RoadmapStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};
