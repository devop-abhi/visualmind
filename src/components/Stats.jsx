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
    icon: <Users size={30} />,
    number: "1500+",
    title: "Students",
    description: "Learning engineering concepts every day",
  },
  {
    icon: <BookOpen size={30} />,
    number: "120+",
    title: "Topics",
    description: "Across DSA, OS, DBMS, CN and more",
  },
  {
    icon: <PlayCircle size={30} />,
    number: "5000+",
    title: "Visualizations",
    description: "Interactive diagrams and animations",
  },
  {
    icon: <BadgeCheck size={30} />,
    number: "98%",
    title: "Accuracy",
    description: "AI-generated explanations",
  },
];

const Stats = () => {
  return (
    <Section>

      {/* Section Heading */}
      <SectionTitle
        badge="OUR IMPACT"
        title="Empowering Engineering Education"
        subtitle="VisualMind AI helps engineering students understand difficult concepts through interactive visual learning."
      />

      {/* Stats Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          md:gap-6
          mt-12
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-sm
              border
              border-white/10
              rounded-3xl
              p-6
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/50
              hover:bg-white/[0.07]
              hover:shadow-2xl
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                -top-16
                -right-16
                w-32
                h-32
                bg-cyan-400/10
                rounded-full
                blur-3xl
                group-hover:bg-cyan-400/20
                transition-all
                duration-500
              "
            />

            {/* Icon */}
            <div
              className="
                relative
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-500/20
                flex
                justify-center
                items-center
                mx-auto
                text-cyan-400
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            {/* Number */}
            <h2
              className="
                relative
                text-4xl
                md:text-5xl
                font-bold
                text-cyan-400
                mt-5
              "
            >
              {item.number}
            </h2>

            {/* Title */}
            <h3 className="relative text-lg font-semibold text-white mt-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative text-sm text-gray-400 mt-2 leading-6">
              {item.description}
            </p>

          </div>
        ))}
      </div>

    </Section>
  );
};

export default Stats;