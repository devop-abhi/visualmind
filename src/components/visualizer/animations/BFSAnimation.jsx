import { useState } from "react";

const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [6],
  4: [],
  5: [],
  6: [],
};

const BFSAnimation = () => {
  const [visited, setVisited] = useState([]);
  const [current, setCurrent] = useState(null);
  const [queue, setQueue] = useState([]);
  const [message, setMessage] = useState(
    "Click Start BFS to begin."
  );
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startBFS = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setVisited([]);
    setCurrent(null);
    setQueue([]);

    const visitedNodes = [];
    const bfsQueue = [1];

    setQueue([...bfsQueue]);
    setMessage("Starting BFS from node 1...");

    await sleep(700);

    while (bfsQueue.length > 0) {
      const node = bfsQueue.shift();

      setQueue([...bfsQueue]);
      setCurrent(node);

      setMessage(`Visiting node ${node}...`);

      await sleep(900);

      if (!visitedNodes.includes(node)) {
        visitedNodes.push(node);
        setVisited([...visitedNodes]);
      }

      await sleep(500);

      for (const neighbour of graph[node]) {
        if (
          !visitedNodes.includes(neighbour) &&
          !bfsQueue.includes(neighbour)
        ) {
          bfsQueue.push(neighbour);
        }
      }

      setQueue([...bfsQueue]);

      await sleep(700);
    }

    setCurrent(null);
    setMessage("🎉 BFS traversal completed!");
    setIsRunning(false);
  };

  const reset = () => {
    setVisited([]);
    setCurrent(null);
    setQueue([]);
    setMessage("Click Start BFS to begin.");
    setIsRunning(false);
  };

  const getNodeStyle = (node) => {
    if (current === node) {
      return "bg-yellow-400 text-black scale-110 shadow-lg shadow-yellow-400/40";
    }

    if (visited.includes(node)) {
      return "bg-green-500 text-white shadow-lg shadow-green-500/30";
    }

    return "bg-slate-700 text-white";
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={startBFS}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start BFS
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Graph */}

      <div className="relative w-full max-w-2xl mx-auto h-[380px]">

        {/* SVG EDGES */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 600 380"
          preserveAspectRatio="none"
        >

          {/* 1 → 2 */}

          <line
            x1="300"
            y1="45"
            x2="170"
            y2="145"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* 1 → 3 */}

          <line
            x1="300"
            y1="45"
            x2="430"
            y2="145"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* 2 → 4 */}

          <line
            x1="170"
            y1="175"
            x2="110"
            y2="285"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* 2 → 5 */}

          <line
            x1="170"
            y1="175"
            x2="230"
            y2="285"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* 3 → 6 */}

          <line
            x1="430"
            y1="175"
            x2="490"
            y2="285"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

        </svg>

        {/* NODE 1 */}

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-2 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            1
          )}`}
        >
          1
        </div>

        {/* NODE 2 */}

        <div
          className={`absolute left-[22%] top-[115px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            2
          )}`}
        >
          2
        </div>

        {/* NODE 3 */}

        <div
          className={`absolute right-[22%] top-[115px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            3
          )}`}
        >
          3
        </div>

        {/* NODE 4 */}

        <div
          className={`absolute left-[12%] top-[255px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            4
          )}`}
        >
          4
        </div>

        {/* NODE 5 */}

        <div
          className={`absolute left-[32%] top-[255px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            5
          )}`}
        >
          5
        </div>

        {/* NODE 6 */}

        <div
          className={`absolute right-[12%] top-[255px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${getNodeStyle(
            6
          )}`}
        >
          6
        </div>

      </div>

      {/* Queue */}

      <div className="mt-8">

        <h3 className="text-lg font-semibold text-cyan-400 mb-3">
          Queue
        </h3>

        <div className="flex justify-center gap-2 min-h-[50px]">

          {queue.length === 0 ? (

            <span className="text-gray-500">
              Empty
            </span>

          ) : (

            queue.map((node, index) => (
              <div
                key={`${node}-${index}`}
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center font-bold"
              >
                {node}
              </div>
            ))

          )}

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          BFS Status
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

        <p className="mt-3 text-gray-500">
          BFS explores nodes level by level using a queue.
        </p>

      </div>

      {/* Legend */}

      <div className="flex justify-center gap-6 mt-6 text-sm">

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-slate-700" />
          Unvisited
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-yellow-400" />
          Current
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-500" />
          Visited
        </div>

      </div>

    </div>
  );
};

export default BFSAnimation;