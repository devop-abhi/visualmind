import Section from "./common/Section";
import StepCard from "./StepCard";
import SectionTitle from "./common/SectionTitle";

const HowItWorks = () => {

  const steps = [
    {
      number: "1",
      title: "Search Topic",
      description:
        "Search for any engineering topic you want to understand.",
    },

    {
      number: "2",
      title: "AI Explains",
      description:
        "AI generates a simple explanation, key points, complexity, and a real-world example.",
    },

    {
      number: "3",
      title: "Visualize",
      description:
        "Watch the concept come to life through interactive diagrams and animations.",
    },

    {
      number: "4",
      title: "Take the Quiz",
      description:
        "Test your understanding with 3 AI-generated questions and revise your concepts.",
    },
  ];

  return (

    <Section>

      <SectionTitle
        badge="HOW IT WORKS"
        title="Learn. Visualize. Master."
        subtitle="Understand engineering concepts in four simple steps."
      />

      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        lg:gap-8
        mt-16
      ">

        {steps.map((step, index) => (

          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />

        ))}

      </div>

    </Section>

  );
};

export default HowItWorks;