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
        "Watch algorithms, networks, and operating systems come to life through animations.",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Smart Quiz",
      description:
        "Test your understanding with AI-generated quizzes after every lesson.",
    },
    {
      icon: <FileText size={40} />,
      title: "Revision Notes",
      description:
        "Generate concise notes and key takeaways instantly for exam preparation.",
    },
  ];

  return (
   <Section>

      <SectionTitle
  badge="FEATURES"
  title="Why Choose VisualMind AI?"
  subtitle="Everything you need to understand engineering concepts visually, interactively, and efficiently."
/>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

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