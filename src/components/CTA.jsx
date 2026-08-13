import Button from "./common/Button";
import Section from "./common/Section";

const CTA = () => {
  const handleStart = () => {
    const searchSection = document.getElementById("search");

    if (searchSection) {
      searchSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Section>
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-r
          from-cyan-500/10
          via-slate-900
          to-blue-500/10
          p-8
          md:p-12
          lg:p-16
        "
      >

        {/* Background Glow */}
        <div
          className="
            absolute
            -top-20
            -left-20
            h-72
            w-72
            rounded-full
            bg-cyan-500/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 text-center">

          {/* Badge */}
          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-semibold
              text-cyan-400
            "
          >
            START YOUR JOURNEY
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
            "
          >
            Ready to Learn Smarter?
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              md:text-lg
              leading-8
              text-gray-400
            "
          >
            Transform difficult engineering concepts into interactive
            AI-powered visual explanations, quizzes and smart notes.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Button onClick={handleStart}>
              🚀 Start Visualizing
            </Button>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default CTA;