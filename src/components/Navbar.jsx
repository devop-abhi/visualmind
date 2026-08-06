import { BrainCircuit } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto mt-5">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <BrainCircuit
              size={34}
              className="text-cyan-400"
            />

            <h1 className="text-2xl font-bold">
              VisualMind
              <span className="text-cyan-400"> AI</span>
            </h1>

          </div>

          <ul className="hidden md:flex gap-10 text-gray-300">

            <li className="hover:text-cyan-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Explore
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Features
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              About
            </li>

          </ul>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold transition">

            Get Started

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;