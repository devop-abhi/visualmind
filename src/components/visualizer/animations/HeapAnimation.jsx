import { useState } from "react";

const initialHeap = [50, 30, 40, 10, 20, 35];

const HeapAnimation = () => {
  const [heap, setHeap] = useState(initialHeap);

  const [inputValue, setInputValue] = useState("");

  const [activeIndex, setActiveIndex] = useState(-1);

  const [message, setMessage] = useState(
    "Click an operation to start."
  );

  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // INSERT
  const handleInsert = async () => {
    if (!inputValue || isRunning) return;

    const value = Number(inputValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setIsRunning(true);

    let arr = [...heap, value];

    let index = arr.length - 1;

    setHeap([...arr]);
    setActiveIndex(index);

    setMessage(
      `Inserted ${value} at the end of the heap.`
    );

    await sleep(1000);

    // Min Heapify Up
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      setActiveIndex(parent);

      setMessage(
        `Comparing ${arr[index]} with parent ${arr[parent]}`
      );

      await sleep(1200);

      if (arr[index] < arr[parent]) {
        [arr[index], arr[parent]] = [
          arr[parent],
          arr[index],
        ];

        setHeap([...arr]);

        setMessage(
          `${arr[parent]} moved down and ${arr[index]} moved up.`
        );

        await sleep(1000);

        index = parent;
        setActiveIndex(index);
      } else {
        break;
      }
    }

    setActiveIndex(-1);

    setMessage(
      `🎉 ${value} inserted and heapified successfully.`
    );

    setInputValue("");

    setIsRunning(false);
  };

  // DELETE MIN
  const handleDelete = async () => {
    if (heap.length === 0 || isRunning) return;

    setIsRunning(true);

    setActiveIndex(0);

    setMessage(
      `Removing minimum element ${heap[0]}...`
    );

    await sleep(1200);

    if (heap.length === 1) {
      setHeap([]);
      setActiveIndex(-1);
      setMessage("Heap is now empty.");
      setIsRunning(false);
      return;
    }

    const arr = [...heap];

    arr[0] = arr[arr.length - 1];

    arr.pop();

    setHeap([...arr]);

    setMessage(
      `Moved the last element to the root. Heapifying down...`
    );

    await sleep(1200);

    let index = 0;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      let smallest = index;

      if (
        left < arr.length &&
        arr[left] < arr[smallest]
      ) {
        smallest = left;
      }

      if (
        right < arr.length &&
        arr[right] < arr[smallest]
      ) {
        smallest = right;
      }

      setActiveIndex(smallest);

      await sleep(900);

      if (smallest !== index) {
        [arr[index], arr[smallest]] = [
          arr[smallest],
          arr[index],
        ];

        setHeap([...arr]);

        setMessage(
          `Swapping ${arr[smallest]} with ${arr[index]}`
        );

        await sleep(1000);

        index = smallest;
      } else {
        break;
      }
    }

    setActiveIndex(-1);

    setMessage(
      "🎉 Minimum element deleted and heap restored."
    );

    setIsRunning(false);
  };

  // RESET
  const handleReset = () => {
    setHeap([...initialHeap]);
    setInputValue("");
    setActiveIndex(-1);
    setIsRunning(false);

    setMessage(
      "Click an operation to start."
    );
  };

  // Calculate node position
  const getPosition = (index) => {
    const level = Math.floor(
      Math.log2(index + 1)
    );

    const firstIndex =
      Math.pow(2, level) - 1;

    const position =
      index - firstIndex;

    const nodesInLevel =
      Math.pow(2, level);

    const spacing =
      700 / nodesInLevel;

    return {
      x: spacing * (position + 0.5),
      y: 60 + level * 100,
    };
  };

  return (
    <div className="w-full">

      {/* Header */}

      <div className="text-center mb-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          🌳 Min Heap
        </h2>

        <p className="text-gray-400 mt-2">
          Visualize insertion and deletion using heapify
        </p>

      </div>


      {/* Controls */}

      <div className="flex flex-col items-center gap-4 mb-8">

        <input
          type="number"
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
          placeholder="Enter value"
          disabled={isRunning}
          className="w-48 px-4 py-3 rounded-xl
                     bg-slate-800
                     border border-white/10
                     text-white
                     outline-none
                     focus:border-cyan-500"
        />

        <div className="flex gap-3">

          <button
            onClick={handleInsert}
            disabled={isRunning}
            className="bg-cyan-500
                       hover:bg-cyan-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            ➕ Insert
          </button>

          <button
            onClick={handleDelete}
            disabled={isRunning || heap.length === 0}
            className="bg-red-500
                       hover:bg-red-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            🗑 Delete Min
          </button>

          <button
            onClick={handleReset}
            disabled={isRunning}
            className="bg-slate-700
                       hover:bg-slate-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            🔄 Reset
          </button>

        </div>

      </div>


      {/* Heap Tree */}

      <div className="bg-slate-800 rounded-2xl p-6 overflow-x-auto">

        <svg
          viewBox="0 0 700 360"
          className="w-full min-w-[650px]"
        >

          {/* Edges */}

          {heap.map((_, index) => {

            if (index === 0) return null;

            const parent =
              Math.floor((index - 1) / 2);

            const parentPosition =
              getPosition(parent);

            const childPosition =
              getPosition(index);

            return (
              <line
                key={`edge-${index}`}
                x1={parentPosition.x}
                y1={parentPosition.y}
                x2={childPosition.x}
                y2={childPosition.y}
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-600"
              />
            );
          })}


          {/* Nodes */}

          {heap.map((value, index) => {

            const position =
              getPosition(index);

            const isActive =
              activeIndex === index;

            return (
              <g key={`node-${index}`}>

                <circle
                  cx={position.x}
                  cy={position.y}
                  r="30"
                  className={`
                    transition-all duration-500
                    ${
                      isActive
                        ? "fill-cyan-500"
                        : "fill-slate-700"
                    }
                  `}
                />

                <text
                  x={position.x}
                  y={position.y + 7}
                  textAnchor="middle"
                  className="fill-white
                             text-lg
                             font-bold"
                >
                  {value}
                </text>

              </g>
            );
          })}

        </svg>

      </div>


      {/* Array Representation */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          Heap Array
        </h3>

        <div className="flex gap-3 mt-4 flex-wrap">

          {heap.map((value, index) => (

            <div
              key={index}
              className={`
                px-5 py-3
                rounded-xl
                border
                transition-all duration-500
                ${
                  activeIndex === index
                    ? "bg-cyan-500 border-cyan-300 text-black"
                    : "bg-slate-700 border-white/10"
                }
              `}
            >
              {value}
            </div>

          ))}

        </div>

      </div>


      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Heap Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>


      {/* Explanation */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How a Min Heap Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          A Min Heap is a complete binary tree where
          every parent is smaller than or equal to its
          children. During insertion, the new element
          moves upward using heapify-up. During deletion
          of the minimum element, the last element moves
          to the root and moves downward using heapify-down.
        </p>

      </div>

    </div>
  );
};

export default HeapAnimation;