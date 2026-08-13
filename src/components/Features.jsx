import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import FeatureCard from "./FeatureCard";

import {
  BrainCircuit,
  BookOpen,
  PlayCircle,
  FileText,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit size={40} />,
      title: "AI Tutor",
      description:
        "Understand complex engineering topics with AI-powered explanations in simple language.",
    },
    {
      icon: <PlayCircle size={40} />,
      title: "Interactive Visualizations",
      description:
        "Watch algorithms, data structures, networks, and operating systems come to life through animations.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Smart Quiz",
      description:
        "Test your understanding with 3 AI-generated questions after every lesson.",
    },
    {
      icon: <FileText size={40} />,
      title: "Revision Notes",
      description:
        "Get concise key points, time complexity, space complexity, and real-world examples for quick revision.",
    },
  ];

  return (
    <Section>

      {/* Section Heading */}

      <SectionTitle
        badge="FEATURES"
        title="Why Choose VisualMind AI?"
        subtitle="Everything you need to understand engineering concepts visually, interactively, and efficiently."
      />


      {/* Feature Cards */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        lg:gap-8
        mt-14
      ">

        {features.map((feature, index) => (

          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />

        ))}

      </div>

    </Section>
  );
};

export default Features;