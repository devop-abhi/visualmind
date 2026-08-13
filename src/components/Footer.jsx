import { BrainCircuit } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3"
            >
              <BrainCircuit
                className="text-cyan-400"
                size={32}
              />

              <h2 className="text-2xl font-bold text-white">
                VisualMind
                <span className="text-cyan-400"> AI</span>
              </h2>
            </button>

            <p className="text-gray-400 mt-5 leading-7 max-w-sm">
              Transforming engineering education through AI-powered
              visual learning, interactive animations, and smart quizzes.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

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
          </div>


          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <button
                  onClick={() => scrollToSection("explore")}
                  className="hover:text-cyan-400 transition"
                >
                  Topics
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
                  onClick={() => scrollToSection("search")}
                  className="hover:text-cyan-400 transition"
                >
                  Search Topics
                </button>
              </li>

            </ul>
          </div>


          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="
                  p-3
                  rounded-xl
                  bg-white/5
                  text-gray-300
                  hover:bg-cyan-500
                  hover:text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <MdEmail size={21} />
              </a>

            </div>

            <p className="text-gray-500 text-sm mt-5">
              Have suggestions or feedback? We'd love to hear from you.
            </p>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-7 text-center text-gray-500 text-sm">
          © 2026 VisualMind AI • Built with ❤️ by Abhishek Kumar
        </div>

      </div>
    </footer>
  );
};

export default Footer;