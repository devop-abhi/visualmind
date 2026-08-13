import { useState } from "react";

const initialArray = [10, 20, 30, 40, 50, 60];

const LinearSearchAnimation = () => {
  const [array] = useState(initialArray);

  const [target, setTarget] = useState("");

  const [currentIndex, setCurrentIndex] = useState(-1);

  const [foundIndex, setFoundIndex] = useState(-1);

  const [message, setMessage] = useState(
    "Enter a target and click Search."
  );

  const [isSearching, setIsSearching] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSearch = async () => {
    if (!target) {
      setMessage("Please enter a target.");
      return;
    }

    const value = Number(target);

    setIsSearching(true);
    setFoundIndex(-1);

    for (let i = 0; i < array.length; i++) {
      setCurrentIndex(i);

      setMessage(
        `Checking ${array[i]}...`
      );

      await sleep(800);

      if (array[i] === value) {
        setFoundIndex(i);

        setMessage(
          `🎉 ${value} Found at index ${i}!`
        );

        setIsSearching(false);

        return;
      }

      setMessage(
        `${array[i]} ≠ ${value} → Moving to next element`
      );

      await sleep(500);
    }

    setMessage("❌ Target Not Found");

    setIsSearching(false);
  };

  const handleReset = () => {
    setTarget("");
    setCurrentIndex(-1);
    setFoundIndex(-1);
    setIsSearching(false);

    setMessage(
      "Enter a target and click Search."
    );
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter target"
          className="bg-slate-800 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-cyan-400"
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

      {/* Array */}

      <div className="flex justify-center gap-4">

        {array.map((value, index) => {

          const isCurrent =
            index === currentIndex;

          const isFound =
            index === foundIndex;

          return (
            <div
              key={index}
              className={`
                w-16
                h-16
                rounded-xl
                flex
                items-center
                justify-center
                text-lg
                font-bold
                transition-all
                duration-500

                ${
                  isFound
                    ? "bg-green-500 scale-110"
                    : isCurrent
                    ? "bg-yellow-500 scale-110"
                    : "bg-cyan-500"
                }
              `}
            >
              {value}
            </div>
          );
        })}

      </div>

      {/* Status */}

      <div className="mt-10 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          Current Operation
        </h3>

        <p className="mt-3 text-gray-300 text-lg">
          {message}
        </p>

      </div>

    </div>
  );
};

export default LinearSearchAnimation;