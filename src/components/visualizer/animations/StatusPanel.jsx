const StatusPanel = ({
  low,
  mid,
  high,
  message,
  step,
}) => {

  return (

    <div className="mt-10 bg-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold">
        Current Step
      </h2>

      <p className="text-cyan-400 text-lg mt-2">
        Step {step}
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-slate-900 rounded-xl p-4">

          <h3 className="text-yellow-400">
            Low
          </h3>

          <p className="text-3xl mt-2">
            {low}
          </p>

        </div>

        <div className="bg-slate-900 rounded-xl p-4">

          <h3 className="text-cyan-400">
            Mid
          </h3>

          <p className="text-3xl mt-2">
            {mid}
          </p>

        </div>

        <div className="bg-slate-900 rounded-xl p-4">

          <h3 className="text-red-400">
            High
          </h3>

          <p className="text-3xl mt-2">
            {high}
          </p>

        </div>

      </div>

      <div className="bg-slate-900 rounded-xl p-5 mt-8">

        <h3 className="text-cyan-400">
          AI Explanation
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

      </div>

    </div>

  );

};

export default StatusPanel;