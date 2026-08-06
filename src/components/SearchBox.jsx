import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="flex justify-center">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-[850px] p-3 flex">

        <input
          type="text"
          placeholder="Search any engineering topic..."
          className="flex-1 bg-transparent px-6 outline-none text-lg"
        />

        <button className="bg-cyan-500 hover:bg-cyan-600 rounded-xl px-8 py-3 flex items-center gap-2 font-semibold">

          <Search size={15} />

          Visualize

        </button>

      </div>

    </div>
  );
};

export default SearchBox;