import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">

      <div className="max-w-7xl mx-auto mt-4 md:mt-5">

        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            px-5
            md:px-8
            py-4
            flex
            justify-between
            items-center
          "
        >

          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3"
          >

            <BrainCircuit
              size={32}
              className="text-cyan-400"
            />

            <h1 className="text-xl md:text-2xl font-bold text-white">
              VisualMind
              <span className="text-cyan-400"> AI</span>
            </h1>

          </button>


          {/* Desktop Navigation */}

          <ul
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-gray-300
            "
          >

            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-cyan-400 transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("explore")}
                className="hover:text-cyan-400 transition"
              >
                Explore
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-cyan-400 transition"
              >
                Features
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-cyan-400 transition"
              >
                About
              </button>
            </li>

          </ul>


          {/* Desktop Get Started */}

          <button
            onClick={() => scrollToSection("search")}
            className="
              hidden
              md:block
              bg-cyan-500
              hover:bg-cyan-400
              px-5
              py-2
              rounded-xl
              font-semibold
              text-white
              transition
              hover:scale-105
              active:scale-95
            "
          >
            Get Started
          </button>


          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-gray-300
              hover:text-cyan-400
              transition
            "
            aria-label="Toggle navigation menu"
          >

            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>


        {/* Mobile Navigation */}

        {isOpen && (

          <div
            className="
              md:hidden
              mt-2
              bg-slate-950/95
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-4
              shadow-2xl
            "
          >

            <div className="flex flex-col gap-2">

              <button
                onClick={() => scrollToSection("home")}
                className="
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  text-gray-300
                  hover:bg-white/5
                  hover:text-cyan-400
                  transition
                "
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("explore")}
                className="
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  text-gray-300
                  hover:bg-white/5
                  hover:text-cyan-400
                  transition
                "
              >
                Explore
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  text-gray-300
                  hover:bg-white/5
                  hover:text-cyan-400
                  transition
                "
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="
                  text-left
                  px-4
                  py-3
                  rounded-xl
                  text-gray-300
                  hover:bg-white/5
                  hover:text-cyan-400
                  transition
                "
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("search")}
                className="
                  mt-2
                  bg-cyan-500
                  hover:bg-cyan-400
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  text-white
                  transition
                "
              >
                Get Started
              </button>

            </div>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;