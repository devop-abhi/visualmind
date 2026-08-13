import NotesCard from "../components/visualizer/NotesCard";
import QuizCard from "../components/visualizer/QuizCard";
import VisualizationPanel from "../components/visualizer/VisualizationPanel";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { explainTopic } from "../api/ai";

import ExplanationCard from "../components/visualizer/ExplanationCard";
import KeyPoints from "../components/visualizer/KeyPoints";

const Visualizer = () => {
  const { topic } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [aiData, setAiData] = useState(null);

  const formattedTopic = topic
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  useEffect(() => {
    // Always start the Visualizer page from the top
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const fetchExplanation = async () => {
      try {
        setLoading(true);

        const data = await explainTopic(formattedTopic);

        setAiData(data);

      } catch (error) {
        console.error("Error fetching explanation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExplanation();
  }, [formattedTopic]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">

        {/* Back Button */}

        <button
          onClick={() => navigate("/")}
          className="
            text-cyan-400
            mb-6
            hover:text-cyan-300
            transition
          "
        >
          ← Back
        </button>


        {/* Topic */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            break-words
          "
        >
          {formattedTopic}
        </h1>

        <p className="text-gray-400 mt-3">
          AI Generated Interactive Explanation
        </p>


        {/* Loading */}

        {loading ? (

          <div className="mt-20 text-center">

            <h2 className="text-2xl sm:text-3xl">
              🤖 Generating explanation...
            </h2>

            <p className="text-gray-400 mt-3">
              VisualMind AI is preparing your topic.
            </p>

          </div>

        ) : aiData ? (

          /*
            MAIN CONTENT

            Left  = Explanation / Notes / Quiz
            Right = Visualization

            45% / 55% gives the visualization area
            slightly more space than the text area.
          */

          <div
            className="
              mt-10
              lg:mt-12
              grid
              grid-cols-1
              lg:grid-cols-[0.9fr_1.1fr]
              gap-8
              lg:gap-10
              items-start
            "
          >

            {/* ========================= */}
            {/* LEFT SIDE - CONTENT */}
            {/* ========================= */}

            <div className="min-w-0 space-y-6">

              {/* Explanation */}

              <div className="w-full min-w-0">
                <ExplanationCard
                  explanation={aiData.explanation}
                />
              </div>


              {/* Key Points */}

              <div className="w-full min-w-0">
                <KeyPoints
                  keyPoints={aiData.keyPoints}
                />
              </div>


              {/* Notes */}

              <div className="w-full min-w-0">
                <NotesCard
                  timeComplexity={aiData.timeComplexity}
                  spaceComplexity={aiData.spaceComplexity}
                  realWorldExample={aiData.realWorldExample}
                />
              </div>


              {/* Quiz */}

              {aiData.quiz && (
                <div className="w-full min-w-0">
                  <QuizCard
                    quiz={aiData.quiz}
                  />
                </div>
              )}

            </div>


            {/* ========================= */}
            {/* RIGHT SIDE - VISUALIZATION */}
            {/* ========================= */}

            <div
              className="
                min-w-0
                w-full
                lg:sticky
                lg:top-24
              "
            >

              <div className="w-full min-w-0 overflow-hidden">

                <VisualizationPanel
                  visualization={aiData.visualization}
                />

              </div>

            </div>

          </div>

        ) : (

          /* ========================= */
          /* ERROR */
          
          <div className="mt-20 text-center">

            <h2 className="text-3xl font-semibold">
              Something went wrong
            </h2>

            <p className="text-gray-400 mt-3">
              We couldn't generate the explanation.
            </p>

            <button
              onClick={() => navigate("/")}
              className="
                mt-6
                bg-cyan-500
                hover:bg-cyan-600
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Back to Search
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default Visualizer;