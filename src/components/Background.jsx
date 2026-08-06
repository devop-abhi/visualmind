const Background = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#020617]" />

      <div className="fixed top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px] -z-10" />

      <div className="fixed bottom-[-150px] right-[-100px] w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[140px] -z-10" />
    </>
  );
};

export default Background;