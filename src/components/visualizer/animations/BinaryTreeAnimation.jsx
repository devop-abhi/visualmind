import { useState } from "react";

const initialTree = [
  { value: 50, left: 30, right: 70 },
  { value: 30, left: 20, right: 40 },
  { value: 70, left: 60, right: 80 },
  { value: 20, left: null, right: null },
  { value: 40, left: null, right: null },
  { value: 60, left: null, right: null },
  { value: 80, left: null, right: null },
];

const BinaryTreeAnimation = () => {
  const [tree, setTree] = useState(initialTree);

  const [inputValue, setInputValue] = useState("");

  const [activeNode, setActiveNode] = useState(null);

  const [message, setMessage] = useState(
    "Choose an operation to start."
  );

  const [traversal, setTraversal] = useState([]);

  const [isRunning, setIsRunning] = useState(false);

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const findNode = (value) =>
    tree.find((node) => node.value === value);

  /*
    Dynamically calculate the position of every node.
    This means newly inserted nodes also get a position.
  */
  const getPositions = () => {
    const positions = {};

    const calculatePosition = (
      value,
      x,
      y,
      horizontalGap
    ) => {
      if (value === null) return;

      positions[value] = { x, y };

      const node = tree.find(
        (item) => item.value === value
      );

      if (!node) return;

      if (node.left !== null) {
        calculatePosition(
          node.left,
          x - horizontalGap,
          y + 90,
          horizontalGap / 2
        );
      }

      if (node.right !== null) {
        calculatePosition(
          node.right,
          x + horizontalGap,
          y + 90,
          horizontalGap / 2
        );
      }
    };

    calculatePosition(
      50,
      400,
      60,
      180
    );

    return positions;
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
    setTraversal([]);

    let current = 50;

    while (current !== null) {
      setActiveNode(current);

      setMessage(
        `Comparing ${value} with ${current}...`
      );

      await sleep(1200);

      if (value === current) {
        setMessage(
          `🎉 ${value} found in the Binary Search Tree!`
        );

        await sleep(1500);

        setActiveNode(null);
        setIsRunning(false);

        return;
      }

      const node = findNode(current);

      if (value < current) {
        setMessage(
          `${value} < ${current} → moving left`
        );

        current = node?.left ?? null;
      } else {
        setMessage(
          `${value} > ${current} → moving right`
        );

        current = node?.right ?? null;
      }

      await sleep(1000);
    }

    setActiveNode(null);

    setMessage(
      `${value} was not found in the tree.`
    );

    setIsRunning(false);
  };

  // INSERT

  const handleInsert = async () => {
    if (!inputValue || isRunning) return;

    const value = Number(inputValue);

    if (Number.isNaN(value)) {
      setMessage("Please enter a valid number.");
      return;
    }

    if (findNode(value)) {
      setMessage(
        `${value} already exists in the tree.`
      );

      return;
    }

    setIsRunning(true);

    let current = 50;

    while (true) {
      setActiveNode(current);

      setMessage(
        `Comparing ${value} with ${current}...`
      );

      await sleep(1000);

      const node = findNode(current);

      if (value < current) {

        if (node.left === null) {

          const newNode = {
            value,
            left: null,
            right: null,
          };

          const newTree = tree.map((item) =>
            item.value === current
              ? {
                  ...item,
                  left: value,
                }
              : item
          );

          newTree.push(newNode);

          setTree(newTree);

          setActiveNode(value);

          setMessage(
            `${value} inserted as the left child of ${current}.`
          );

          break;
        }

        current = node.left;

      } else {

        if (node.right === null) {

          const newNode = {
            value,
            left: null,
            right: null,
          };

          const newTree = tree.map((item) =>
            item.value === current
              ? {
                  ...item,
                  right: value,
                }
              : item
          );

          newTree.push(newNode);

          setTree(newTree);

          setActiveNode(value);

          setMessage(
            `${value} inserted as the right child of ${current}.`
          );

          break;
        }

        current = node.right;
      }
    }

    await sleep(1500);

    setActiveNode(null);
    setInputValue("");
    setIsRunning(false);
  };

  // INORDER

  const handleInorder = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setTraversal([]);

    const result = [];

    const inorder = async (value) => {

      if (value === null) return;

      const node = findNode(value);

      await inorder(
        node?.left ?? null
      );

      setActiveNode(value);

      result.push(value);

      setTraversal([...result]);

      setMessage(
        `Visiting node ${value}`
      );

      await sleep(1000);

      await inorder(
        node?.right ?? null
      );
    };

    await inorder(50);

    setActiveNode(null);

    setMessage(
      `🎉 Inorder: ${result.join(" → ")}`
    );

    setIsRunning(false);
  };

  // RESET

  const handleReset = () => {
    setTree(initialTree);

    setInputValue("");

    setActiveNode(null);

    setTraversal([]);

    setIsRunning(false);

    setMessage(
      "Choose an operation to start."
    );
  };

  const positions = getPositions();

  return (
    <div className="w-full">

      {/* HEADER */}

      <div className="text-center mb-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          🌳 Binary Search Tree
        </h2>

        <p className="text-gray-400 mt-2">
          Visualize search, insertion and inorder traversal
        </p>

      </div>


      {/* CONTROLS */}

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

        <div className="flex gap-3 flex-wrap justify-center">

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
            onClick={handleInorder}
            disabled={isRunning}
            className="bg-green-500
                       hover:bg-green-600
                       disabled:opacity-50
                       px-6 py-3
                       rounded-xl
                       font-semibold"
          >
            ▶ Inorder
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


      {/* TREE */}

      <div className="bg-slate-800 rounded-2xl p-5 overflow-x-auto">

        <svg
          viewBox="0 0 800 430"
          className="w-full min-w-[700px]"
        >

          {/* EDGES */}

          {tree.map((node) => {

            const parent =
              positions[node.value];

            if (!parent) return null;

            return (
              <g key={`edges-${node.value}`}>

                {/* LEFT EDGE */}

                {node.left !== null &&
                  positions[node.left] && (

                    <line
                      x1={parent.x}
                      y1={parent.y}
                      x2={positions[node.left].x}
                      y2={positions[node.left].y}
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-gray-600"
                    />

                  )}

                {/* RIGHT EDGE */}

                {node.right !== null &&
                  positions[node.right] && (

                    <line
                      x1={parent.x}
                      y1={parent.y}
                      x2={positions[node.right].x}
                      y2={positions[node.right].y}
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-gray-600"
                    />

                  )}

              </g>
            );
          })}


          {/* NODES */}

          {tree.map((node) => {

            const position =
              positions[node.value];

            if (!position) return null;

            const isActive =
              activeNode === node.value;

            return (
              <g
                key={`node-${node.value}`}
              >

                <circle
                  cx={position.x}
                  cy={position.y}
                  r="32"
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
                  {node.value}
                </text>

              </g>
            );
          })}

        </svg>

      </div>


      {/* TRAVERSAL */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          Inorder Traversal
        </h3>

        <p className="text-gray-300 mt-4 text-lg">

          {traversal.length > 0
            ? traversal.join(" → ")
            : "—"}

        </p>

      </div>


      {/* STATUS */}

      <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-center">

        <h3 className="text-xl font-bold text-cyan-400">
          Tree Status
        </h3>

        <p className="text-gray-300 mt-3">
          {message}
        </p>

      </div>


      {/* EXPLANATION */}

      <div className="mt-8 bg-slate-800/60 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-cyan-400">
          How a Binary Search Tree Works
        </h3>

        <p className="text-gray-400 mt-3 leading-relaxed">
          In a Binary Search Tree, values smaller than a
          node are placed in its left subtree, while larger
          values are placed in its right subtree. This
          property allows efficient searching, insertion,
          and traversal.
        </p>

      </div>

    </div>
  );
};

export default BinaryTreeAnimation;