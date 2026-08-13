import { useState } from "react";

const nodes = [
  { id: "A", x: 400, y: 50 },
  { id: "B", x: 250, y: 130 },
  { id: "C", x: 550, y: 130 },
  { id: "D", x: 150, y: 230 },
  { id: "E", x: 350, y: 230 },
  { id: "F", x: 650, y: 230 },
];

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "F"],
];

const DFSAnimation = () => {
  const [visited, setVisited] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [stack, setStack] = useState([]);
  const [message, setMessage] = useState(
    "Click Start DFS to begin traversal from A."
  );
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getNeighbors = (node) => {
    const result = [];

    edges.forEach(([a, b]) => {
      if (a === node) result.push(b);
      if (b === node) result.push(a);
    });

    return result;
  };

  const startDFS = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setVisited([]);
    setCurrentNode(null);
    setStack([]);

    const visitedNodes = [];
    const dfsStack = ["A"];

    setStack([...dfsStack]);

    while (dfsStack.length > 0) {
      const current = dfsStack.pop();

      setStack([...dfsStack]);

      if (visitedNodes.includes(current)) {
        continue;
      }

      setCurrentNode(current);

      setMessage(`Visiting node ${current}`);

      await sleep(1800);

      visitedNodes.push(current);

      setVisited([...visitedNodes]);

      const neighbors = getNeighbors(current);

      // Reverse so traversal looks natural from left to right
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];

        if (!visitedNodes.includes(neighbor)) {
          dfsStack.push(neighbor);
        }
      }

      setStack([...dfsStack]);

      await sleep(1200);
    }

    setCurrentNode(null);

    setMessage(
      `🎉 DFS completed! Traversal: ${visitedNodes.join(" → ")}`
    );

    setIsRunning(false);
  };

  const reset = () => {
    setVisited([]);
    setCurrentNode(null);
    setStack([]);
    setIsRunning(false);
    setMessage(
      "Click Start DFS to begin traversal from A."
    );
  };

  const getNode = (id) =>
    nodes.find((node) => node.id === id);

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-8">

        <button
          onClick={startDFS}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start DFS
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Graph */}

      <div className="bg-slate-800 rounded-2xl p-5 overflow-x-auto">

        <svg
          viewBox="0 0 800 300"
          className="w-full min-w-[700px]"
        >

          {/* Edges */}

          {edges.map(([fromId, toId], index) => {

            const from = getNode(fromId);
            const to = getNode(toId);

            return (
              <line
                key={index}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="currentColor"
                strokeWidth="4"
                className="text-gray-600"
              />
            );
          })}

          {/* Nodes */}

          {nodes.map((node) => {

            const isCurrent =
              currentNode === node.id;

            const isVisited =
              visited.includes(node.id);

            return (
              <g key={node.id}>

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="32"
                  className={`
                    transition-all duration-500
                    ${
                      isCurrent
                        ? "fill-cyan-500"
                        : isVisited
                        ? "fill-green-500"
                        : "fill-slate-700"
                    }
                  `}
                />

                <text
                  x={node.x}
                  y={node.y + 7}
                  textAnchor="middle"
                  className="fill-white text-xl font-bold"
                >
                  {node.id}
                </text>

              </g>
            );
          })}

        </svg>

      </div>

      {/* DFS Stack */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400 mb-5">
          DFS Stack
        </h3>

        {stack.length === 0 ? (

          <p className="text-gray-400">
            Stack is empty
          </p>

        ) : (

          <div className="flex gap-3 flex-wrap">

            {[...stack].reverse().map((node, index) => (

              <div
                key={`${node}-${index}`}
                className="px-5 py-3 rounded-xl bg-slate-700 border border-cyan-500"
              >
                {node}
              </div>

            ))}

          </div>

        )}

      </div>

      {/* Traversal Order */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400">
          Traversal Order
        </h3>

        <p className="text-gray-300 mt-4 text-lg">

          {visited.length === 0
            ? "—"
            : visited.join(" → ")}

        </p>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          DFS Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>

      {/* Explanation */}

      <div className="mt-6 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How DFS Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Depth-First Search explores as far as possible
          along one branch before backtracking. It can be
          implemented using a stack or recursion.
        </p>

      </div>

    </div>
  );
};

export default DFSAnimation;