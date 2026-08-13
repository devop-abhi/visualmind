import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopicCard = ({ icon, title, difficulty }) => {
  const navigate = useNavigate();

  const handleVisualize = () => {
    navigate(
      `/visualizer/${title
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
  };

  return (
    <div
      onClick={handleVisualize}
      className="
        group
        bg-white/5
        backdrop-blur-sm
        border
        border-white/10
        rounded-2xl
        p-7
        hover:border-cyan-400/50
        hover:bg-white/[0.07]
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-pointer
      "
    >

      {/* Icon */}

      <div
        className="
          text-5xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>


      {/* Topic */}

      <h3 className="text-2xl font-bold mt-5">
        {title}
      </h3>


      {/* Difficulty */}

      <span
        className="
          inline-block
          mt-3
          px-3
          py-1
          rounded-full
          bg-cyan-500/10
          border
          border-cyan-500/20
          text-cyan-300
          text-sm
        "
      >
        {difficulty}
      </span>


      {/* Visualize */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleVisualize();
        }}
        className="
          mt-6
          flex
          items-center
          gap-2
          text-cyan-400
          font-semibold
          group-hover:text-cyan-300
          transition
        "
      >
        Visualize

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

    </div>
  );
};

export default TopicCard;