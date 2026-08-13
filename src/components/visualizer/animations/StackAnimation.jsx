import { useState } from "react";

const initialStack = [10, 20, 30];

const StackAnimation = () => {
  const [stack, setStack] = useState(initialStack);

  const [value, setValue] = useState("");

  const [message, setMessage] = useState(
    "Enter a value and choose Push or Pop."
  );

  const [isAnimating, setIsAnimating] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handlePush = async () => {
    if (!value) {
      setMessage("Please enter a value.");
      return;
    }

    if (stack.length >= 6) {
      setMessage("Stack Overflow! Maximum size reached.");
      return;
    }

    setIsAnimating(true);

    setMessage(`Pushing ${value} onto the stack...`);

    await sleep(600);

    setStack((prev) => [...prev, Number(value)]);

    setMessage(`✅ ${value} pushed onto the stack.`);

    setValue("");

    setIsAnimating(false);
  };

  const handlePop = async () => {
    if (stack.length === 0) {
      setMessage("Stack Underflow! Nothing to pop.");
      return;
    }

    setIsAnimating(true);

    const top = stack[stack.length - 1];

    setMessage(`Popping ${top} from the stack...`);

    await sleep(600);

    setStack((prev) => prev.slice(0, -1));

    setMessage(`🗑️ ${top} popped from the stack.`);

    setIsAnimating(false);
  };

  const handleReset = () => {
    setStack(initialStack);

    setValue("");

    setMessage(
      "Enter a value and choose Push or Pop."
    );

    setIsAnimating(false);
  };

  return (
    <div className="w-full">

      {/* Controls */}

      <div className="flex flex-wrap justify-center gap-3 mb-10">

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          className="bg-slate-800 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-cyan-400"
        />

        <button
          onClick={handlePush}
          disabled={isAnimating}
          className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-6 py-3 rounded-xl font-semibold"
        >
          ⬆ Push
        </button>

        <button
          onClick={handlePop}
          disabled={isAnimating}
          className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 px-6 py-3 rounded-xl font-semibold"
        >
          ⬇ Pop
        </button>

        <button
          onClick={handleReset}
          className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold"
        >
          🔄 Reset
        </button>

      </div>

      {/* Stack */}

      <div className="flex flex-col items-center">

        <div className="flex flex-col-reverse gap-2">

          {stack.map((item, index) => {

            const isTop =
              index === stack.length - 1;

            return (
              <div
                key={index}
                className={`
                  w-32
                  h-14
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  transition-all
                  duration-500
                  ${
                    isTop
                      ? "bg-cyan-500 scale-105"
                      : "bg-slate-700"
                  }
                `}
              >
                {item}

                {isTop && (
                  <span className="ml-2 text-xs">
                    TOP
                  </span>
                )}
              </div>
            );
          })}

        </div>

        {stack.length === 0 && (
          <div className="text-gray-500 py-10">
            Stack is Empty
          </div>
        )}

      </div>

      {/* Status */}

      <div className="mt-10 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-semibold text-cyan-400">
          Stack Operation
        </h3>

        <p className="mt-3 text-gray-300 text-lg">
          {message}
        </p>

        <p className="mt-3 text-gray-500">
          Stack follows LIFO — Last In, First Out
        </p>

      </div>

    </div>
  );
};

export default StackAnimation;