const ControlPanel = ({
  target,
  setTarget,
  onSearch,
  onReset,
}) => {

  return (

    <div className="flex justify-center gap-4 mt-8">

      <input
        value={target}
        onChange={(e)=>setTarget(e.target.value)}
        type="number"
        placeholder="Target"
        className="bg-slate-800 px-5 py-3 rounded-xl"
      />

      <button
        onClick={onSearch}
        className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-xl"
      >
        Search
      </button>

      <button
        onClick={onReset}
        className="bg-red-500 hover:bg-red-600 px-6 rounded-xl"
      >
        Reset
      </button>

    </div>

  );

};

export default ControlPanel;