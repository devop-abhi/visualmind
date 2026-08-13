import { useState } from "react";

const initialProcesses = [
  {
    id: "P0",
    allocation: [0, 1, 0],
    max: [7, 5, 3],
  },
  {
    id: "P1",
    allocation: [2, 0, 0],
    max: [3, 2, 2],
  },
  {
    id: "P2",
    allocation: [3, 0, 2],
    max: [9, 0, 2],
  },
  {
    id: "P3",
    allocation: [2, 1, 1],
    max: [2, 2, 2],
  },
  {
    id: "P4",
    allocation: [0, 0, 2],
    max: [4, 3, 3],
  },
];

const initialAvailable = [3, 3, 2];

const BankersAlgorithmAnimation = () => {
  const [available, setAvailable] = useState(initialAvailable);
  const [processes] = useState(initialProcesses);

  const [need, setNeed] = useState(
    initialProcesses.map((process) =>
      process.max.map(
        (maxValue, index) =>
          maxValue - process.allocation[index]
      )
    )
  );

  const [safeSequence, setSafeSequence] = useState([]);
  const [currentProcess, setCurrentProcess] = useState(null);
  const [message, setMessage] = useState(
    "Click Start Safety Check to begin."
  );

  const [isRunning, setIsRunning] = useState(false);
  const [isSafe, setIsSafe] = useState(null);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startSafetyCheck = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setSafeSequence([]);
    setCurrentProcess(null);
    setAvailable([...initialAvailable]);
    setNeed(
      initialProcesses.map((process) =>
        process.max.map(
          (maxValue, index) =>
            maxValue - process.allocation[index]
        )
      )
    );
    setIsSafe(null);

    const work = [...initialAvailable];
    const finished = Array(initialProcesses.length).fill(false);
    const sequence = [];

    setMessage("Checking system safety...");

    await sleep(800);

    let foundProcess = true;

    while (sequence.length < initialProcesses.length && foundProcess) {
      foundProcess = false;

      for (let i = 0; i < initialProcesses.length; i++) {
        if (finished[i]) continue;

        const processNeed = initialProcesses[i].max.map(
          (maxValue, index) =>
            maxValue - initialProcesses[i].allocation[index]
        );

        const canRun = processNeed.every(
          (value, index) => value <= work[index]
        );

        if (canRun) {
          foundProcess = true;

          setCurrentProcess(i);

          setMessage(
            `${initialProcesses[i].id} can safely execute because its remaining need can be satisfied.`
          );

          await sleep(1200);

          for (let j = 0; j < work.length; j++) {
            work[j] += initialProcesses[i].allocation[j];
          }

          setAvailable([...work]);

          finished[i] = true;
          sequence.push(initialProcesses[i].id);

          setSafeSequence([...sequence]);

          setMessage(
            `${initialProcesses[i].id} finished and released its resources.`
          );

          await sleep(1000);
        }
      }
    }

    setCurrentProcess(null);

    if (sequence.length === initialProcesses.length) {
      setIsSafe(true);

      setMessage(
        `🎉 System is SAFE! Safe sequence: ${sequence.join(
          " → "
        )}`
      );
    } else {
      setIsSafe(false);

      setMessage(
        "⚠️ System is UNSAFE. No complete safe sequence exists."
      );
    }

    setIsRunning(false);
  };

  const reset = () => {
    setAvailable([...initialAvailable]);

    setNeed(
      initialProcesses.map((process) =>
        process.max.map(
          (maxValue, index) =>
            maxValue - process.allocation[index]
        )
      )
    );

    setSafeSequence([]);
    setCurrentProcess(null);

    setMessage("Click Start Safety Check to begin.");

    setIsRunning(false);
    setIsSafe(null);
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-8">

        <button
          onClick={startSafetyCheck}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start Safety Check
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Available Resources */}

      <div className="bg-slate-800 rounded-2xl p-6 mb-8">

        <h3 className="text-xl font-bold text-cyan-400 mb-4">
          Available Resources
        </h3>

        <div className="flex justify-center gap-4">

          {available.map((value, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-xl px-6 py-4 text-center"
            >
              <p className="text-gray-400">
                R{index}
              </p>

              <p className="text-2xl font-bold mt-1">
                {value}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Process Table */}

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b border-white/10">

              <th className="p-4 text-left">
                Process
              </th>

              <th className="p-4">
                Allocation
              </th>

              <th className="p-4">
                Max
              </th>

              <th className="p-4">
                Need
              </th>

            </tr>

          </thead>

          <tbody>

            {processes.map((process, index) => {

              const isCompleted =
                safeSequence.includes(process.id);

              const isCurrent =
                currentProcess === index;

              return (
                <tr
                  key={process.id}
                  className={`
                    border-b border-white/5 transition-all duration-500
                    ${
                      isCurrent
                        ? "bg-yellow-400/20"
                        : isCompleted
                        ? "bg-green-500/10"
                        : ""
                    }
                  `}
                >

                  <td className="p-4 font-bold">

                    <span
                      className={`
                        inline-flex items-center justify-center
                        w-12 h-12 rounded-full
                        ${
                          isCurrent
                            ? "bg-yellow-400 text-black"
                            : isCompleted
                            ? "bg-green-500"
                            : "bg-slate-700"
                        }
                      `}
                    >
                      {process.id}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      {process.allocation.map(
                        (value, resourceIndex) => (
                          <span
                            key={resourceIndex}
                            className="bg-slate-700 px-3 py-2 rounded-lg"
                          >
                            {value}
                          </span>
                        )
                      )}

                    </div>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      {process.max.map(
                        (value, resourceIndex) => (
                          <span
                            key={resourceIndex}
                            className="bg-slate-700 px-3 py-2 rounded-lg"
                          >
                            {value}
                          </span>
                        )
                      )}

                    </div>

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      {need[index].map(
                        (value, resourceIndex) => (
                          <span
                            key={resourceIndex}
                            className="bg-slate-700 px-3 py-2 rounded-lg"
                          >
                            {value}
                          </span>
                        )
                      )}

                    </div>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* Safe Sequence */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400">
          Safe Sequence
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">

          {safeSequence.length === 0 ? (

            <span className="text-gray-500">
              Sequence will appear here...
            </span>

          ) : (

            safeSequence.map((process, index) => (
              <div
                key={process}
                className="flex items-center gap-3"
              >

                <span className="bg-green-500 px-5 py-3 rounded-xl font-bold">
                  {process}
                </span>

                {index < safeSequence.length - 1 && (
                  <span className="text-gray-500 text-xl">
                    →
                  </span>
                )}

              </div>
            ))

          )}

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          Banker's Algorithm Status
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

        {isSafe === true && (
          <p className="mt-4 text-green-400 font-bold">
            ✅ SAFE STATE
          </p>
        )}

        {isSafe === false && (
          <p className="mt-4 text-red-400 font-bold">
            ❌ UNSAFE STATE
          </p>
        )}

      </div>

    </div>
  );
};

export default BankersAlgorithmAnimation;