import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [topic, setTopic] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!topic.trim()) return;

    navigate(
      `/visualizer/${topic
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
  };

  return (
    <div className="w-full flex justify-center">

      <div
        className="
          w-full
          max-w-4xl
          p-2
          flex
          items-center
          gap-2
          rounded-2xl
          bg-white/[0.05]
          backdrop-blur-xl
          border
          border-white/10
          shadow-2xl
          shadow-cyan-500/5
          transition-all
          duration-300
          focus-within:border-cyan-500/50
          focus-within:shadow-cyan-500/10
        "
      >

        {/* Search Icon */}

        <div className="pl-4 text-gray-400">
          <Search size={22} />
        </div>


        {/* Input */}

        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search any engineering topic..."
          className="
            flex-1
            min-w-0
            bg-transparent
            px-3
            py-4
            outline-none
            text-lg
            text-white
            placeholder:text-gray-500
          "
        />


        {/* Visualize Button */}

        <button
          onClick={handleSearch}
          disabled={!topic.trim()}
          className="
            px-6
            md:px-8
            py-3
            rounded-xl
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            transition-all
            duration-300
            bg-cyan-500
            hover:bg-cyan-400
            hover:scale-[1.02]
            active:scale-95
            disabled:opacity-40
            disabled:cursor-not-allowed
            disabled:hover:scale-100
          "
        >
          <Search size={18} />

          <span className="hidden sm:inline">
            Visualize
          </span>
        </button>

      </div>

    </div>
  );
};

export default SearchBox;