import { ArrowRight } from "lucide-react";

const TopicCard = ({ icon, title, difficulty }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer">

      <div className="text-5xl">{icon}</div>

      <h3 className="text-2xl font-bold mt-5">
        {title}
      </h3>

      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
        {difficulty}
      </span>

      <button className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold">

        Visualize

        <ArrowRight size={18} />

      </button>

    </div>
  );
};

export default TopicCard;