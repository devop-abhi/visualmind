import { ArrowRight, Check } from "lucide-react";

const DomainCard = ({
  icon,
  title,
  topics,
  color = "cyan",
}) => {
  const handleExplore = () => {
    const exploreSection = document.getElementById("explore");

    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        rounded-3xl
        p-7
        md:p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/50
        hover:bg-white/[0.07]
        hover:shadow-2xl
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-40
          h-40
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
          text-5xl
          mb-5
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-2xl md:text-3xl font-bold text-white">
        {title}
      </h3>

      {/* Topics */}
      <ul className="relative mt-5 space-y-3 text-gray-300">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="
              flex
              items-center
              gap-3
              text-sm
              md:text-base
            "
          >
            <Check
              size={17}
              className="text-cyan-400 shrink-0"
            />

            <span>{topic}</span>
          </li>
        ))}
      </ul>

      {/* Explore Button */}
      <button
        onClick={handleExplore}
        className="
          relative
          mt-7
          flex
          items-center
          gap-2
          text-cyan-400
          font-semibold
          transition-all
          duration-300
          group-hover:gap-4
          hover:text-cyan-300
        "
      >
        Explore

        <ArrowRight
          size={18}
          className="transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default DomainCard;