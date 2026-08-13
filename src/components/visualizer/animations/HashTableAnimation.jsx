import { useState } from "react";

const TABLE_SIZE = 7;

const initialTable = Array(TABLE_SIZE)
  .fill(null)
  .map(() => []);

const HashTableAnimation = () => {
  const [table, setTable] = useState(initialTable);

  const [inputValue, setInputValue] = useState("");

  const [activeIndex, setActiveIndex] = useState(-1);

  const [activeValue, setActiveValue] = useState(null);

  const [message, setMessage] = useState(
    "Enter a number and choose an operation."
  );

  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const hashFunction = (value) => {
    return Math.abs(value) % TABLE_SIZE;
  };

  // INSERT
  const handleInsert = async () => {
    if (!inputValue || isRunning) return;

    const value = Number(inputValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setIsRunning(true);

    const index = hashFunction(value);

    setActiveValue(value);
    setActiveIndex(index);

    setMessage(
      `Hash function: ${value} % ${TABLE_SIZE} = ${index}`
    );

    await sleep(1500);

    const newTable = table.map((bucket) => [...bucket]);

    if (newTable[index].includes(value)) {
      setMessage(
        `${value} already exists at index ${index}.`
      );

      await sleep(1200);

      setActiveIndex(-1);
      setActiveValue(null);
      setIsRunning(false);

      return;
    }

    if (newTable[index].length > 0) {
      setMessage(
        `Collision! Index ${index} already contains ${newTable[
          index
        ].join(", ")}. Using chaining.`
      );

      await sleep(1500);
    } else {
      setMessage(
        `Index ${index} is empty. Inserting ${value}.`
      );

      await sleep(1000);
    }

    newTable[index].push(value);

    setTable(newTable);

    setMessage(
      `${value} inserted successfully at index ${index}.`
    );

    await sleep(1200);

    setActiveIndex(-1);
    setActiveValue(null);
    setInputValue("");
    setIsRunning(false);
  };

  // SEARCH
  const handleSearch = async () => {
    if (!inputValue || isRunning) return;

    const value = Number(inputValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    setIsRunning(true);

    const index = hashFunction(value);

    setActiveValue(value);
    setActiveIndex(index);

    setMessage(
      `Hash function: ${value} % ${TABLE_SIZE} = ${index}`
    );

    await sleep(1500);

    const bucket = table[index];

    if (bucket.includes(value)) {
      setMessage(
        `🎉 ${value} found at index ${index}.`
      );
    } else {
      setMessage(
        `${value} not found at index ${index}.`
      );
    }

    await sleep(1500);

    setActiveIndex(-1);
    setActiveValue(null);
    setInputValue("");
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

    setIsRunning(true);

    const index = hashFunction(value);

    setActiveValue(value);
    setActiveIndex(index);

    setMessage(
      `Hash function: ${value} % ${TABLE_SIZE} = ${index}`
    );

    await sleep(1500);

    const bucket = table[index];

    if (!bucket.includes(value)) {
      setMessage(
        `${value} was not found at index ${index}.`
      );

      await sleep(1200);

      setActiveIndex(-1);
      setActiveValue(null);
      setIsRunning(false);

      return;
    }

    setMessage(
      `${value} found at index ${index}. Removing it...`
    );

    await sleep(1200);

    const newTable = table.map((bucket) => [...bucket]);

    newTable[index] = newTable[index].filter(
      (item) => item !== value
    );

    setTable(newTable);

    setMessage(
      `${value} deleted successfully.`
    );

    await sleep(1200);

    setActiveIndex(-1);
    setActiveValue(null);
    setInputValue("");
    setIsRunning(false);
  };

  // RESET
  const handleReset = () => {
    setTable(
      Array(TABLE_SIZE)
        .fill(null)
        .map(() => [])
    );

    setInputValue("");
    setActiveIndex(-1);
    setActiveValue(null);
    setIsRunning(false);

    setMessage(
      "Enter a number and choose an operation."
    );
  };

  return (
    <div className="w-full">

      {/* Header */}

      <div className="text-center mb-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          # Hash Table
        </h2>

        <p className="text-gray-400 mt-2">
          Visualize hashing, searching and collision handling
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
          placeholder="Enter number"
          disabled={isRunning}
          className="w-52 px-4 py-3 rounded-xl
                     bg-slate-800
                     border border-white/10
                     text-white
                     outline-none
                     focus:border-cyan-500"
        />

        <div className="flex gap-3 flex-wrap justify-center">

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
            onClick={handleSearch}
            disabled={isRunning}
            className="bg-purple-500
                       hover:bg-purple-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            🔍 Search
          </button>

          <button
            onClick={handleDelete}
            disabled={isRunning}
            className="bg-red-500
                       hover:bg-red-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            🗑 Delete
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


      {/* Hash Function */}

      <div className="bg-slate-800 rounded-2xl p-6 mb-8 text-center">

        <h3 className="text-lg font-semibold text-cyan-400">
          Hash Function
        </h3>

        <p className="text-gray-300 mt-3 text-lg">
          h(key) = key % {TABLE_SIZE}
        </p>

      </div>


      {/* Hash Table */}

      <div className="bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400 mb-5">
          Hash Table
        </h3>

        <div className="space-y-3">

          {table.map((bucket, index) => {

            const isActive =
              activeIndex === index;

            return (
              <div
                key={index}
                className={`
                  flex items-center gap-4
                  p-3 rounded-xl
                  transition-all duration-500
                  ${
                    isActive
                      ? "bg-cyan-500/20 border border-cyan-400"
                      : "bg-slate-700 border border-white/5"
                  }
                `}
              >

                {/* Index */}

                <div
                  className={`
                    w-16 h-12
                    rounded-lg
                    flex items-center justify-center
                    font-bold
                    ${
                      isActive
                        ? "bg-cyan-500 text-black"
                        : "bg-slate-600"
                    }
                  `}
                >
                  {index}
                </div>

                {/* Arrow */}

                <span className="text-gray-500">
                  →
                </span>

                {/* Bucket */}

                <div className="flex gap-3 flex-wrap">

                  {bucket.length === 0 ? (

                    <span className="text-gray-500">
                      Empty
                    </span>

                  ) : (

                    bucket.map((value, valueIndex) => (

                      <div
                        key={valueIndex}
                        className={`
                          px-5 py-3
                          rounded-lg
                          font-bold
                          transition-all duration-500
                          ${
                            activeValue === value &&
                            isActive
                              ? "bg-yellow-500 text-black scale-110"
                              : "bg-slate-600"
                          }
                        `}
                      >
                        {value}
                      </div>

                    ))

                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Hash Table Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>


      {/* Explanation */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How Hashing Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          A hash function converts a key into an index
          where the value can be stored. When two keys
          produce the same index, a collision occurs.
          This visualization uses chaining to store
          multiple values at the same index.
        </p>

      </div>

    </div>
  );
};

export default HashTableAnimation;