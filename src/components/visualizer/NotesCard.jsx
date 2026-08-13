const NotesCard = ({
  timeComplexity,
  spaceComplexity,
  realWorldExample,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-bold">
        📄 Quick Revision Notes
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="bg-slate-900 rounded-2xl p-6">

          <h3 className="text-xl font-semibold text-cyan-400">
            ⏱ Time Complexity
          </h3>

          <p className="mt-3 text-lg">
            {timeComplexity}
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6">

          <h3 className="text-xl font-semibold text-cyan-400">
            💾 Space Complexity
          </h3>

          <p className="mt-3 text-lg">
            {spaceComplexity}
          </p>

        </div>

      </div>

      <div className="mt-8 bg-slate-900 rounded-2xl p-6">

        <h3 className="text-xl font-semibold text-cyan-400">
          🌍 Real World Example
        </h3>

        <p className="mt-4 leading-8 text-gray-300">
          {realWorldExample}
        </p>

      </div>

    </div>
  );
};

export default NotesCard;