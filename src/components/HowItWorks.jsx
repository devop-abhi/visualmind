import Section from "./common/Section";
import StepCard from "./StepCard";
import SectionTitle from "./common/SectionTitle";

const HowItWorks = () => {

  const steps = [

    {
      number: "1",
      title: "Search",
      description:
        "Type any engineering topic you want to learn."
    },

    {
      number: "2",
      title: "AI Understands",
      description:
        "Gemini AI analyses the concept."
    },

    {
      number: "3",
      title: "Visual Learning",
      description:
        "Beautiful diagrams and animations are generated."
    },

    {
      number: "4",
      title: "Master Concept",
      description:
        "Take quizzes and revise using AI notes."
    }

  ];

  return (

    <Section>

     <SectionTitle
  badge="HOW IT WORKS"
  title="How VisualMind Works"
  subtitle="Learn engineering concepts in four simple steps."
/>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        {

          steps.map((step, index)=>(

            <StepCard

              key={index}

              number={step.number}

              title={step.title}

              description={step.description}

            />

          ))

        }

      </div>

    </Section>

  );
};

export default HowItWorks;