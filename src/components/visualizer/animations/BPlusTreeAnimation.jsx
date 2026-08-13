import { useState } from "react";

const initialTree = {
  root: [30, 60],
  children: [
    [10, 20],
    [40, 50],
    [70, 80],
  ],
};

const BPlusTreeAnimation = () => {
  const [tree, setTree] = useState(initialTree);
  const [searchValue, setSearchValue] = useState("");
  const [currentPath, setCurrentPath] = useState([]);
  const [message, setMessage] = useState(
    "Enter a value and click Search."
  );
  const [isSearching, setIsSearching] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSearch = async () => {
    if (searchValue === "") {
      setMessage("Please enter a value.");
      return;
    }

    const value = Number(searchValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setIsSearching(true);
    setCurrentPath([]);
    setMessage(`Searching for ${value}...`);

    // Highlight root
    setCurrentPath(["root"]);

    await sleep(900);

    let childIndex;

    if (value < tree.root[0]) {
      childIndex = 0;
    } else if (value < tree.root[1]) {
      childIndex = 1;
    } else {
      childIndex = 2;
    }

    setCurrentPath(["root", `child-${childIndex}`]);

    setMessage(
      `Following the correct branch for ${value}...`
    );

    await sleep(1000);

    const leaf = tree.children[childIndex];

    if (leaf.includes(value)) {
      setMessage(
        `🎉 ${value} found in leaf node [${leaf.join(", ")}]`
      );
    } else {
      setMessage(
        `❌ ${value} was not found in the B+ Tree.`
      );
    }

    setIsSearching(false);
  };

  const handleReset = () => {
    setTree(initialTree);
    setSearchValue("");
    setCurrentPath([]);
    setMessage("Enter a value and click Search.");
    setIsSearching(false);
  };

  const nodeStyle = (nodeId) => {
    if (currentPath.includes(nodeId)) {
      return "bg-cyan-500 text-white scale-105 shadow-lg shadow-cyan-500/30";
    }

    return "bg-slate-700 text-white";
  };

  return (
    <div className="w-full">

      {/* Search Controls */}

      <div className="flex justify-center gap-3 mb-10">

        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter value..."
          className="bg-slate-800 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-cyan-500"
        />

        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-6 py-3 rounded-xl font-semibold"
        >
          🔍 Search
        </button>

        <button
          onClick={handleReset}
          className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Tree */}

      <div className="relative max-w-3xl mx-auto h-[360px]">

        {/* Connecting Lines */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 700 360"
          preserveAspectRatio="none"
        >

          {/* Root → Left */}

          <line
            x1="350"
            y1="75"
            x2="140"
            y2="220"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* Root → Middle */}

          <line
            x1="350"
            y1="75"
            x2="350"
            y2="220"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* Root → Right */}

          <line
            x1="350"
            y1="75"
            x2="560"
            y2="220"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-600"
          />

          {/* Leaf links */}

          <line
            x1="200"
            y1="250"
            x2="300"
            y2="250"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="text-cyan-500/50"
          />

          <line
            x1="400"
            y1="250"
            x2="500"
            y2="250"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="text-cyan-500/50"
          />

        </svg>

        {/* Root Node */}

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-2 px-8 py-5 rounded-xl font-bold transition-all duration-500 ${nodeStyle(
            "root"
          )}`}
        >
          <div className="flex gap-5">

            {tree.root.map((value) => (
              <span key={value}>{value}</span>
            ))}

          </div>
        </div>

        {/* Left Leaf */}

        <div
          className={`absolute left-[10%] top-[210px] px-6 py-5 rounded-xl font-bold transition-all duration-500 ${nodeStyle(
            "child-0"
          )}`}
        >
          <div className="flex gap-4">

            {tree.children[0].map((value) => (
              <span key={value}>{value}</span>
            ))}

          </div>
        </div>

        {/* Middle Leaf */}

        <div
          className={`absolute left-1/2 -translate-x-1/2 top-[210px] px-6 py-5 rounded-xl font-bold transition-all duration-500 ${nodeStyle(
            "child-1"
          )}`}
        >
          <div className="flex gap-4">

            {tree.children[1].map((value) => (
              <span key={value}>{value}</span>
            ))}

          </div>
        </div>

        {/* Right Leaf */}

        <div
          className={`absolute right-[10%] top-[210px] px-6 py-5 rounded-xl font-bold transition-all duration-500 ${nodeStyle(
            "child-2"
          )}`}
        >
          <div className="flex gap-4">

            {tree.children[2].map((value) => (
              <span key={value}>{value}</span>
            ))}

          </div>
        </div>

      </div>

      {/* Legend */}

      <div className="flex justify-center gap-6 mt-4 text-sm">

        <div className="flex items-center gap-2">

          <span className="w-4 h-4 rounded bg-slate-700" />

          Normal Node

        </div>

        <div className="flex items-center gap-2">

          <span className="w-4 h-4 rounded bg-cyan-500" />

          Search Path

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          B+ Tree Search
        </h3>

        <p className="mt-3 text-gray-300">
          {message}
        </p>

      </div>

      {/* Explanation */}

      <div className="mt-6 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How it works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          B+ Trees store keys in sorted order. Internal nodes
          guide the search toward the appropriate leaf node,
          where the actual values are stored. Leaf nodes are
          linked to make sequential access efficient.
        </p>

      </div>

    </div>
  );
};

export default BPlusTreeAnimation;