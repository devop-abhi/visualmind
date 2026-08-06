import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

      <div className="text-cyan-400">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mt-5">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>

      <button className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold">

        Learn More

        <ArrowRight size={18} />

      </button>

    </div>
  );
};

export default FeatureCard;