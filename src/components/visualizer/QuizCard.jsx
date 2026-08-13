import { useState } from "react";

const QuizCard = ({ quiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Make sure quiz is an array
  const questions = Array.isArray(quiz)
    ? quiz
    : quiz
      ? [quiz]
      : [];

  // Safety check
  if (questions.length === 0) {
    return null;
  }

  const currentQuiz = questions[currentIndex];

  const handleAnswer = (option) => {
    // Don't allow changing answer
    // after selecting one
    if (selected) {
      return;
    }

    setSelected(option);

    if (option === currentQuiz.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected("");
    setScore(0);
    setShowResult(false);
  };

  // Final Result
  if (showResult) {
    return (
      <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">

        <h2 className="text-3xl font-bold">
          🏆 Quiz Completed
        </h2>

        <p className="mt-8 text-5xl font-bold text-cyan-400">
          {score} / {questions.length}
        </p>

        <p className="mt-4 text-gray-400">
          {score === questions.length
            ? "🔥 Perfect score!"
            : score >= questions.length / 2
              ? "👍 Good job!"
              : "💪 Keep practicing!"}
        </p>

        <button
          onClick={handleRestart}
          className="mt-8 px-6 py-3 rounded-xl
                     bg-cyan-500
                     hover:bg-cyan-600
                     font-semibold
                     transition"
        >
          🔄 Try Again
        </button>

      </div>
    );
  }

  return (
    <div className="mt-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          ❓ Quick Quiz
        </h2>

        <span className="text-gray-400">
          Question {currentIndex + 1} / {questions.length}
        </span>

      </div>


      {/* Score */}

      <p className="mt-3 text-cyan-400">
        Score: {score}
      </p>


      {/* Question */}

      <h3 className="mt-8 text-xl font-semibold">
        {currentQuiz.question}
      </h3>


      {/* Options */}

      <div className="mt-6 space-y-4">

        {currentQuiz.options?.map((option, index) => {

          const isSelected =
            selected === option;

          const isCorrect =
            option === currentQuiz.answer;

          let optionStyle =
            "border-white/10 hover:border-cyan-500";

          if (selected) {

            if (isCorrect) {
              optionStyle =
                "bg-green-500/20 border-green-500";
            } else if (isSelected) {
              optionStyle =
                "bg-red-500/20 border-red-500";
            }

          } else if (isSelected) {

            optionStyle =
              "bg-cyan-500 border-cyan-500";

          }

          return (
            <button
              key={index}
              onClick={() =>
                handleAnswer(option)
              }
              disabled={!!selected}
              className={`
                block
                w-full
                text-left
                p-4
                rounded-xl
                border
                transition
                ${optionStyle}
                ${selected
                  ? "cursor-default"
                  : "cursor-pointer"
                }
              `}
            >
              {option}
            </button>
          );
        })}

      </div>


      {/* Feedback */}

      {selected && (

        <div className="mt-8">

          {selected === currentQuiz.answer ? (

            <p className="text-green-400 font-semibold">
              ✅ Correct Answer!
            </p>

          ) : (

            <div>

              <p className="text-red-400 font-semibold">
                ❌ Wrong Answer
              </p>

              <p className="mt-2 text-gray-300">
                Correct Answer:{" "}
                <span className="text-green-400 font-semibold">
                  {currentQuiz.answer}
                </span>
              </p>

            </div>

          )}

          {/* Next Button */}

          <button
            onClick={handleNext}
            className="mt-6 px-6 py-3 rounded-xl
                       bg-cyan-500
                       hover:bg-cyan-600
                       font-semibold
                       transition"
          >
            {currentIndex === questions.length - 1
              ? "🏆 Finish Quiz"
              : "Next Question →"}
          </button>

        </div>

      )}

    </div>
  );
};

export default QuizCard;