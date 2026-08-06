const StepCard = ({ number, title, description }) => {
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all duration-300">

      <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold">

        {number}

      </div>

      <h3 className="text-2xl font-bold mt-6">

        {title}

      </h3>

      <p className="text-gray-400 mt-4 leading-7">

        {description}

      </p>

    </div>
  );
};

export default StepCard;