const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        w-full
        max-w-full
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-5
        sm:px-6
        overflow-hidden
      "
    >
      {/* Badge */}
      <span
        className="
          max-w-full
          bg-cyan-500/20
          text-cyan-300
          px-4
          sm:px-5
          py-2
          rounded-full
          border
          border-cyan-500/30
          text-sm
          sm:text-base
        "
      >
        🚀 AI Powered Learning Platform
      </span>

      {/* Main Heading */}
      <h1
        className="
          mt-6
          sm:mt-8
          max-w-5xl
          px-2
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-extrabold
          leading-tight
          break-words
        "
      >
        Transform
        <br />

        Engineering Concepts
        <br />

        Into
        <span className="text-cyan-400">
          {" "}Visual Learning
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          sm:mt-8
          max-w-3xl
          px-2
          text-base
          sm:text-lg
          md:text-xl
          leading-7
          sm:leading-8
          text-gray-400
        "
      >
        Learn Data Structures, Operating Systems,
        DBMS, Networks and more through interactive
        AI-generated visual explanations.
      </p>
    </section>
  );
};

export default Hero;