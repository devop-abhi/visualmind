import { useState } from "react";

const initialList = [10, 20, 30, 40];

const LinkedListAnimation = () => {
  const [list, setList] = useState(initialList);

  const [inputValue, setInputValue] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [mode, setMode] = useState("idle");

  const [message, setMessage] = useState(
    "Choose an operation to visualize."
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
    setMode("insert");

    setMessage(`Preparing to insert ${value}...`);

    await sleep(1000);

    setMessage(`Creating a new node containing ${value}.`);

    await sleep(1200);

    const newList = [...list, value];

    setList(newList);

    setSelectedIndex(newList.length - 1);

    setMessage(
      `${value} inserted at the end of the linked list.`
    );

    await sleep(1500);

    setSelectedIndex(-1);
    setInputValue("");
    setMode("idle");
    setIsRunning(false);
  };

  // DELETE
  const handleDelete = async () => {
    if (!inputValue || isRunning) return;

    const value = Number(inputValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    const index = list.indexOf(value);

    if (index === -1) {
      setMessage(`${value} was not found in the linked list.`);
      return;
    }

    setIsRunning(true);
    setMode("delete");

    setMessage(`Searching for node ${value}...`);

    for (let i = 0; i <= index; i++) {
      setSelectedIndex(i);

      setMessage(
        `Checking node ${list[i]}...`
      );

      await sleep(1000);
    }

    setMessage(
      `Node ${value} found. Removing it from the list...`
    );

    await sleep(1200);

    const newList = list.filter(
      (_, i) => i !== index
    );

    setList(newList);

    setSelectedIndex(-1);

    setMessage(
      `${value} has been deleted successfully.`
    );

    await sleep(1500);

    setInputValue("");
    setMode("idle");
    setIsRunning(false);
  };

  // TRAVERSE
  const handleTraverse = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setMode("traverse");

    setMessage("Starting traversal from the head...");

    for (let i = 0; i < list.length; i++) {
      setSelectedIndex(i);

      setMessage(
        `Visiting node ${list[i]}`
      );

      await sleep(1200);
    }

    setMessage(
      `🎉 Traversal completed: ${list.join(" → ")} → NULL`
    );

    await sleep(1500);

    setSelectedIndex(-1);
    setMode("idle");
    setIsRunning(false);
  };

  // RESET
  const handleReset = () => {
    setList(initialList);
    setInputValue("");
    setSelectedIndex(-1);
    setMode("idle");
    setIsRunning(false);

    setMessage(
      "Choose an operation to visualize."
    );
  };

  return (
    <div className="w-full">

      {/* Title */}

      <div className="text-center mb-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          🔗 Linked List
        </h2>

        <p className="text-gray-400 mt-2">
          Visualize insertion, deletion and traversal
        </p>

      </div>


      {/* Controls */}

      <div className="flex flex-col items-center gap-4 mb-10">

        <input
          type="number"
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
          placeholder="Enter value"
          disabled={isRunning}
          className="w-48 px-4 py-3 rounded-xl
                     bg-slate-800 border border-white/10
                     text-white outline-none
                     focus:border-cyan-500"
        />

        <div className="flex gap-3 flex-wrap justify-center">

          <button
            onClick={handleInsert}
            disabled={isRunning}
            className="bg-cyan-500 hover:bg-cyan-600
                       disabled:opacity-50
                       px-6 py-3 rounded-xl
                       font-semibold"
          >
            ➕ Insert
          </button>

          <button
            onClick={handleDelete}
            disabled={isRunning}
            className="bg-red-500 hover:bg-red-600
                       disabled:opacity-50
                       px-6 py-3 rounded-xl
                       font-semibold"
          >
            🗑 Delete
          </button>

          <button
            onClick={handleTraverse}
            disabled={isRunning}
            className="bg-purple-500 hover:bg-purple-600
                       disabled:opacity-50
                       px-6 py-3 rounded-xl
                       font-semibold"
          >
            ▶ Traverse
          </button>

          <button
            onClick={handleReset}
            disabled={isRunning}
            className="bg-slate-700 hover:bg-slate-600
                       disabled:opacity-50
                       px-6 py-3 rounded-xl
                       font-semibold"
          >
            🔄 Reset
          </button>

        </div>

      </div>


      {/* Linked List */}

      <div className="bg-slate-800 rounded-2xl p-8 overflow-x-auto">

        <div className="flex items-center justify-center gap-3 min-w-max">

          {/* HEAD */}

          <div className="flex flex-col items-center mr-2">

            <span className="text-cyan-400 font-bold text-sm mb-2">
              HEAD
            </span>

            <div className="w-3 h-3 rounded-full bg-cyan-400" />

          </div>


          {/* Nodes */}

          {list.map((value, index) => {

            const isSelected =
              selectedIndex === index;

            return (
              <div
                key={`${value}-${index}`}
                className="flex items-center"
              >

                {/* Node */}

                <div
                  className={`
                    w-24 h-20 rounded-xl
                    border-2
                    flex flex-col
                    items-center justify-center
                    transition-all duration-500
                    ${
                      isSelected
                        ? mode === "delete"
                          ? "bg-red-500 border-red-300 scale-110"
                          : "bg-cyan-500 border-cyan-300 scale-110"
                        : "bg-slate-700 border-white/10"
                    }
                  `}
                >

                  <span className="text-xs text-gray-400">
                    DATA
                  </span>

                  <span className="text-xl font-bold">
                    {value}
                  </span>

                </div>


                {/* Arrow */}

                <div className="flex items-center mx-2">

                  <div className="w-10 h-[2px] bg-gray-500" />

                  <span className="text-gray-400 text-xl">
                    →
                  </span>

                </div>

              </div>
            );
          })}


          {/* NULL */}

          <div
            className="px-5 py-4 rounded-xl
                       border border-dashed
                       border-gray-500
                       text-gray-400"
          >
            NULL
          </div>

        </div>

      </div>


      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Linked List Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>


      {/* Current List */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          Current List
        </h3>

        <p className="text-gray-300 mt-3 text-lg">
          {list.length > 0
            ? `${list.join(" → ")} → NULL`
            : "HEAD → NULL"}
        </p>

      </div>


      {/* Explanation */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How a Linked List Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          A linked list consists of nodes where each node
          stores data and a reference to the next node.
          Unlike an array, linked-list nodes do not need to
          be stored in contiguous memory locations.
        </p>

      </div>

    </div>
  );
};

export default LinkedListAnimation;