import { useEffect, useState } from "react";

const initialArray = [50, 30, 70, 20, 40];

const BubbleSortAnimation = () => {
  const [array, setArray] = useState(initialArray);

  const [currentPair, setCurrentPair] = useState([]);

  const [message, setMessage] = useState(
    "Bubble Sort compares adjacent elements."
  );

  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    if (!isSorting) return;

    let arr = [...initialArray];
    let i = 0;
    let j = 0;

    const interval = setInterval(() => {

      // Finished all passes
      if (i >= arr.length - 1) {

        clearInterval(interval);

        setCurrentPair([]);

        setMessage("🎉 Sorting completed!");

        setIsSorting(false);

        return;
      }

      // End of current pass
      if (j >= arr.length - i - 1) {

        j = 0;
        i++;

        return;
      }

      setCurrentPair([j, j + 1]);

      const left = arr[j];
      const right = arr[j + 1];

      if (left > right) {

        // Swap
        [arr[j], arr[j + 1]] =
          [arr[j + 1], arr[j]];

        setArray([...arr]);

        setMessage(
          `${left} > ${right} → Swapping`
        );

      } else {

        setMessage(
          `${left} < ${right} → No swap`
        );

      }

      j++;

    }, 1000);

    return () => clearInterval(interval);

  }, [isSorting]);

  const startSorting = () => {

    setArray([...initialArray]);

    setCurrentPair([]);

    setMessage("Starting Bubble Sort...");

    setIsSorting(true);

  };

  const reset = () => {

    setArray([...initialArray]);

    setCurrentPair([]);

    setMessage(
      "Bubble Sort compares adjacent elements."
    );

    setIsSorting(false);

  };

  return (

    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={startSorting}
          disabled={isSorting}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-6 py-3 rounded-xl font-semibold"
        >
          ▶ Start Sorting
        </button>

        <button
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Array */}

      <div className="flex justify-center gap-4">

        {array.map((value, index) => {

          const isComparing =
            currentPair.includes(index);

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
                  isComparing
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

export default BubbleSortAnimation;