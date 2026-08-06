import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import {
  Users,
  BookOpen,
  PlayCircle,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={34} />,
    number: "1500+",
    title: "Students",
    description: "Learning engineering concepts every day",
  },
  {
    icon: <BookOpen size={34} />,
    number: "120+",
    title: "Topics",
    description: "Across DSA, OS, DBMS, CN and more",
  },
  {
    icon: <PlayCircle size={34} />,
    number: "5000+",
    title: "Visualizations",
    description: "Interactive diagrams & animations",
  },
  {
    icon: <BadgeCheck size={34} />,
    number: "98%",
    title: "Accuracy",
    description: "Reliable AI-generated explanations",
  },
];

const Stats = () => {
  return (
    <Section>

      <div className="text-center mb-16">

        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
          TRUSTED BY STUDENTS
        </span>

       <SectionTitle
  badge="OUR IMPACT"
  title="Empowering Engineering Education"
  subtitle="VisualMind AI helps engineering students understand difficult concepts through interactive visual learning."
/>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex justify-center items-center mx-auto text-cyan-400">

              {item.icon}

            </div>

            <h2 className="text-5xl font-bold text-cyan-400 mt-6">
              {item.number}
            </h2>

            <h3 className="text-xl font-semibold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-6">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </Section>
  );
};

export default Stats;