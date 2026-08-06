import { ArrowRight } from "lucide-react";

const DomainCard = ({
  icon,
  title,
  topics,
  color = "cyan",
}) => {
  return (
    <div
      className="group bg-white/5 border border-cyan-500/20 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300"
    >
      <div className="text-5xl mb-6">{icon}</div>

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <ul className="mt-6 space-y-3 text-gray-300">
        {topics.map((topic, index) => (
          <li key={index}>
            ✔ {topic}
          </li>
        ))}
      </ul>

      <button className="mt-8 flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
        Explore
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default DomainCard;