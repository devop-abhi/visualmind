import { useState } from "react";

const referenceString = [7, 0, 1, 2, 0, 3, 0, 4];

const FRAME_COUNT = 3;

const LRUAnimation = () => {
  const [frames, setFrames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [message, setMessage] = useState(
    "Click Start to begin LRU Page Replacement."
  );

  const [hits, setHits] = useState(0);
  const [faults, setFaults] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [lruOrder, setLruOrder] = useState([]);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startSimulation = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setFrames([]);
    setCurrentIndex(-1);
    setHits(0);
    setFaults(0);
    setLruOrder([]);

    let currentFrames = [];
    let currentLRU = [];
    let totalHits = 0;
    let totalFaults = 0;

    for (let i = 0; i < referenceString.length; i++) {
      const page = referenceString[i];

      setCurrentIndex(i);

      await sleep(800);

      // Page Hit
      if (currentFrames.includes(page)) {
        totalHits++;

        setHits(totalHits);

        // Move page to most recently used position
        currentLRU = currentLRU.filter(
          (item) => item !== page
        );

        currentLRU.push(page);

        setLruOrder([...currentLRU]);

        setMessage(
          `Page ${page} → HIT ✅`
        );

        await sleep(1000);

        continue;
      }

      // Page Fault
      totalFaults++;

      setFaults(totalFaults);

      if (currentFrames.length < FRAME_COUNT) {
        currentFrames = [...currentFrames, page];

        currentLRU.push(page);

        setMessage(
          `Page ${page} → PAGE FAULT ❌ → Empty frame used`
        );
      } else {
        const leastRecentlyUsed = currentLRU[0];

        const replacementIndex =
          currentFrames.indexOf(leastRecentlyUsed);

        currentFrames = [...currentFrames];

        currentFrames[replacementIndex] = page;

        currentLRU = currentLRU.filter(
          (item) => item !== leastRecentlyUsed
        );

        currentLRU.push(page);

        setMessage(
          `Page ${page} → PAGE FAULT ❌ → Replacing LRU page ${leastRecentlyUsed}`
        );
      }

      setFrames([...currentFrames]);

      setLruOrder([...currentLRU]);

      await sleep(1200);
    }

    setCurrentIndex(-1);

    setMessage(
      `🎉 Simulation complete! Hits: ${totalHits} | Page Faults: ${totalFaults}`
    );

    setIsRunning(false);
  };

  const reset = () => {
    setFrames([]);
    setCurrentIndex(-1);
    setMessage(
      "Click Start to begin LRU Page Replacement."
    );
    setHits(0);
    setFaults(0);
    setLruOrder([]);
    setIsRunning(false);
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={startSimulation}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start Simulation
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Reference String */}

      <div className="bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400 mb-5">
          Page Reference String
        </h3>

        <div className="flex flex-wrap justify-center gap-3">

          {referenceString.map((page, index) => (

            <div
              key={index}
              className={`
                w-12 h-12 flex items-center justify-center
                rounded-xl font-bold transition-all duration-300
                ${
                  currentIndex === index
                    ? "bg-cyan-500 scale-110 shadow-lg shadow-cyan-500/30"
                    : "bg-slate-700"
                }
              `}
            >
              {page}
            </div>

          ))}

        </div>

      </div>

      {/* Memory Frames */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400 mb-6">
          Memory Frames
        </h3>

        <div className="flex justify-center gap-5">

          {Array.from({ length: FRAME_COUNT }).map(
            (_, index) => {

              const page = frames[index];

              return (
                <div
                  key={index}
                  className={`
                    w-28 h-28 rounded-2xl border-2
                    flex flex-col items-center justify-center
                    transition-all duration-500
                    ${
                      page !== undefined
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-white/10 bg-slate-700/50"
                    }
                  `}
                >

                  <span className="text-gray-400 text-sm">
                    Frame {index + 1}
                  </span>

                  <span className="text-3xl font-bold mt-2">
                    {page !== undefined ? page : "—"}
                  </span>

                </div>
              );
            }
          )}

        </div>

      </div>

      {/* LRU Order */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400">
          LRU Order
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Left = Least Recently Used
          &nbsp;&nbsp;|&nbsp;&nbsp;
          Right = Most Recently Used
        </p>

        <div className="flex justify-center items-center gap-3 mt-6">

          {lruOrder.length === 0 ? (

            <span className="text-gray-500">
              LRU order will appear here...
            </span>

          ) : (

            lruOrder.map((page, index) => (

              <div
                key={page}
                className={`
                  px-5 py-3 rounded-xl font-bold
                  ${
                    index === 0
                      ? "bg-red-500/80"
                      : "bg-slate-700"
                  }
                `}
              >
                {page}
              </div>

            ))

          )}

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-6 text-center">

          <p className="text-gray-400">
            Page Hits
          </p>

          <p className="text-4xl font-bold text-green-400 mt-2">
            {hits}
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6 text-center">

          <p className="text-gray-400">
            Page Faults
          </p>

          <p className="text-4xl font-bold text-red-400 mt-2">
            {faults}
          </p>

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          LRU Status
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

      </div>

      {/* Explanation */}

      <div className="mt-6 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How LRU Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          LRU (Least Recently Used) replaces the page that
          has not been used for the longest amount of time.
          When a page is already present in memory, it is a
          page hit and becomes the most recently used page.
          When the page is absent, a page fault occurs.
        </p>

      </div>

    </div>
  );
};

export default LRUAnimation;