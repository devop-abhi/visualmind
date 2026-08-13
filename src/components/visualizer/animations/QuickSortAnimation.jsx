import { useState } from "react";

const initialArray = [8, 3, 5, 1, 7, 2, 6];

const QuickSortAnimation = () => {
  const [array, setArray] = useState(initialArray);
  const [pivotIndex, setPivotIndex] = useState(-1);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [message, setMessage] = useState(
    "Click Start Quick Sort to begin."
  );
  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startQuickSort = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setArray([...initialArray]);
    setPivotIndex(-1);
    setComparing([]);
    setSorted([]);
    setMessage("Starting Quick Sort...");

    const arr = [...initialArray];
    const sortedIndexes = [];

    const partition = async (low, high) => {
      const pivot = arr[high];

      setPivotIndex(high);

      setMessage(`Pivot selected: ${pivot}`);

      await sleep(1500);

      let i = low - 1;

      for (let j = low; j < high; j++) {
        setComparing([j, high]);

        setMessage(
          `${arr[j]} ${arr[j] <= pivot ? "≤" : ">"} pivot ${pivot}`
        );

        await sleep(1000);

        if (arr[j] <= pivot) {
          i++;

          [arr[i], arr[j]] = [arr[j], arr[i]];

          setArray([...arr]);

          await sleep(800);
        }
      }

      [arr[i + 1], arr[high]] = [
        arr[high],
        arr[i + 1],
      ];

      const finalPivotIndex = i + 1;

      setArray([...arr]);
      setPivotIndex(finalPivotIndex);
      setComparing([]);

      setMessage(
        `Pivot ${pivot} placed at its correct position.`
      );

      await sleep(1500);

      sortedIndexes.push(finalPivotIndex);
      setSorted([...sortedIndexes]);

      return finalPivotIndex;
    };

    const quickSort = async (low, high) => {
      if (low >= high) {
        if (low === high) {
          sortedIndexes.push(low);
          setSorted([...sortedIndexes]);
        }

        return;
      }

      const pivotPosition = await partition(low, high);

      setPivotIndex(-1);

      await sleep(700);

      await quickSort(low, pivotPosition - 1);

      await quickSort(pivotPosition + 1, high);
    };

    await quickSort(0, arr.length - 1);

    setArray([...arr]);
    setPivotIndex(-1);
    setComparing([]);
    setSorted(
      Array.from({ length: arr.length }, (_, index) => index)
    );

    setMessage("🎉 Quick Sort completed!");

    setIsRunning(false);
  };

  const reset = () => {
    setArray([...initialArray]);
    setPivotIndex(-1);
    setComparing([]);
    setSorted([]);
    setIsRunning(false);
    setMessage("Click Start Quick Sort to begin.");
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          type="button"
          onClick={startQuickSort}
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-7 py-3 rounded-xl font-semibold"
        >
          ▶ Start Quick Sort
        </button>

        <button
          type="button"
          onClick={reset}
          className="bg-slate-700 hover:bg-slate-600 px-7 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Array */}

      <div className="bg-slate-800 rounded-2xl p-8">

        <div className="flex justify-center items-end gap-4 min-h-[280px]">

          {array.map((value, index) => {

            const isPivot =
              index === pivotIndex;

            const isComparing =
              comparing.includes(index);

            const isSorted =
              sorted.includes(index);

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2"
              >

                {/* Value */}

                <div
                  className={`
                    w-16 rounded-xl
                    flex items-end justify-center
                    pb-3 font-bold text-lg
                    transition-all duration-500
                    ${
                      isPivot
                        ? "bg-yellow-500 text-black scale-110"
                        : isComparing
                        ? "bg-blue-500 scale-105"
                        : isSorted
                        ? "bg-green-500"
                        : "bg-slate-600"
                    }
                  `}
                  style={{
                    height: `${value * 25 + 50}px`,
                  }}
                >
                  {value}
                </div>

                {/* Index */}

                <span className="text-gray-500 text-sm">
                  {index}
                </span>

                {/* Label */}

                {isPivot && (
                  <span className="text-yellow-400 text-xs font-bold">
                    PIVOT
                  </span>
                )}

                {isComparing && !isPivot && (
                  <span className="text-blue-400 text-xs font-bold">
                    COMPARE
                  </span>
                )}

                {isSorted && !isPivot && !isComparing && (
                  <span className="text-green-400 text-xs font-bold">
                    SORTED
                  </span>
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* Legend */}

      <div className="flex justify-center gap-6 mt-6 flex-wrap">

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-yellow-500" />
          <span className="text-gray-400">
            Pivot
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-blue-500" />
          <span className="text-gray-400">
            Comparing
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-green-500" />
          <span className="text-gray-400">
            Sorted
          </span>
        </div>

      </div>

      {/* Status */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Quick Sort Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>

      {/* Explanation */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How Quick Sort Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Quick Sort selects an element as a pivot and
          partitions the array so that smaller elements
          move to one side and larger elements move to
          the other side. It then recursively sorts the
          two partitions.
        </p>

      </div>

    </div>
  );
};

export default QuickSortAnimation;