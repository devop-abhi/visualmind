import { useState } from "react";

const nodes = [
  { id: "A", x: 80, y: 80 },
  { id: "B", x: 300, y: 40 },
  { id: "C", x: 300, y: 180 },
  { id: "D", x: 520, y: 100 },
  { id: "E", x: 700, y: 200 },
];

const edges = [
  { from: "A", to: "B", weight: 4 },
  { from: "A", to: "C", weight: 2 },
  { from: "B", to: "C", weight: 1 },
  { from: "B", to: "D", weight: 5 },
  { from: "C", to: "D", weight: 8 },
  { from: "C", to: "E", weight: 10 },
  { from: "D", to: "E", weight: 2 },
];

const DijkstraAnimation = () => {
  const [distances, setDistances] = useState({
    A: 0,
    B: Infinity,
    C: Infinity,
    D: Infinity,
    E: Infinity,
  });

  const [visited, setVisited] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [message, setMessage] = useState(
    "Click Start to find the shortest paths from A."
  );
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getNeighbors = (node) => {
    return edges
      .filter(
        (edge) =>
          edge.from === node || edge.to === node
      )
      .map((edge) => ({
        node:
          edge.from === node
            ? edge.to
            : edge.from,
        weight: edge.weight,
      }));
  };

  const startDijkstra = async () => {
    if (isRunning) return;

    setIsRunning(true);

    const distance = {
      A: 0,
      B: Infinity,
      C: Infinity,
      D: Infinity,
      E: Infinity,
    };

    const visitedNodes = [];

    setDistances({ ...distance });
    setVisited([]);
    setCurrentNode(null);

    setMessage("Starting from node A...");

    await sleep(2000);

    while (visitedNodes.length < nodes.length) {
      let current = null;
      let smallestDistance = Infinity;

      nodes.forEach((node) => {
        if (
          !visitedNodes.includes(node.id) &&
          distance[node.id] < smallestDistance
        ) {
          smallestDistance = distance[node.id];
          current = node.id;
        }
      });

      if (current === null) break;

      setCurrentNode(current);

      setMessage(
        `Visiting node ${current} with distance ${distance[current]}`
      );

      await sleep(2000);

      const neighbors = getNeighbors(current);

      for (const neighbor of neighbors) {
        if (visitedNodes.includes(neighbor.node)) {
          continue;
        }

        const newDistance =
          distance[current] + neighbor.weight;

        if (newDistance < distance[neighbor.node]) {
          distance[neighbor.node] = newDistance;

          setDistances({ ...distance });

          setMessage(
            `Updating ${neighbor.node}: new distance = ${newDistance}`
          );

          await sleep(2000);
        }
      }

      visitedNodes.push(current);

      setVisited([...visitedNodes]);

      await sleep(2000);
    }

    setCurrentNode(null);

    setMessage(
      `🎉 Shortest paths calculated from A!`
    );

    setIsRunning(false);
  };

  const reset = () => {
    setDistances({
      A: 0,
      B: Infinity,
      C: Infinity,
      D: Infinity,
      E: Infinity,
    });

    setVisited([]);
    setCurrentNode(null);
    setIsRunning(false);

    setMessage(
      "Click Start to find the shortest paths from A."
    );
  };

  const getNode = (id) =>
    nodes.find((node) => node.id === id);

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-8">

        <button
          onClick={startDijkstra}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start Dijkstra
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
          viewBox="0 0 800 280"
          className="w-full min-w-[700px]"
        >

          {/* Edges */}

          {edges.map((edge, index) => {

            const from = getNode(edge.from);
            const to = getNode(edge.to);

            return (
              <g key={index}>

                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-gray-600"
                />

                {/* Weight */}

                <rect
                  x={(from.x + to.x) / 2 - 14}
                  y={(from.y + to.y) / 2 - 13}
                  width="28"
                  height="26"
                  rx="8"
                  className="fill-slate-900"
                />

                <text
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2 + 5}
                  textAnchor="middle"
                  className="fill-cyan-400 text-sm font-bold"
                >
                  {edge.weight}
                </text>

              </g>
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
                  r="30"
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

      {/* Distances */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400 mb-5">
          Shortest Distances from A
        </h3>

        <div className="grid grid-cols-5 gap-3">

          {nodes.map((node) => (

            <div
              key={node.id}
              className={`
                rounded-xl p-4 text-center
                ${
                  visited.includes(node.id)
                    ? "bg-green-500/20 border border-green-500"
                    : "bg-slate-700"
                }
              `}
            >

              <p className="text-gray-400">
                Node {node.id}
              </p>

              <p className="text-2xl font-bold mt-2">

                {distances[node.id] === Infinity
                  ? "∞"
                  : distances[node.id]}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Dijkstra Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>

      {/* Explanation */}

      <div className="mt-6 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How Dijkstra's Algorithm Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Dijkstra's algorithm finds the shortest paths from
          a starting node to all other nodes in a weighted
          graph. It repeatedly selects the unvisited node
          with the smallest known distance and updates the
          distances of its neighboring nodes.
        </p>

      </div>

    </div>
  );
};

export default DijkstraAnimation;