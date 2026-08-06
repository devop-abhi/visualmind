const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full border border-cyan-500/30">

        🚀 AI Powered Learning Platform

      </span>

      <h1 className="mt-8 text-7xl font-extrabold leading-tight">

        Transform

        <br />

        Engineering Concepts

        <br />

        Into

        <span className="text-cyan-400">
          {" "}Visual Learning
        </span>

      </h1>

      <p className="mt-8 max-w-3xl text-xl text-gray-400">

        Learn Data Structures, Operating Systems,
        DBMS, Networks and more through interactive
        AI-generated visual explanations.

      </p>

    </section>
  );
};

export default Hero;