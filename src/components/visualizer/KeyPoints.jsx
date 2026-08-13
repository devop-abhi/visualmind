const KeyPoints = ({ keyPoints }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">

      <h2 className="text-3xl font-bold">
        📝 Key Points
      </h2>

      <ul className="mt-6 space-y-4">

        {keyPoints.map((point, index) => (

        <li
  key={index}
  className="bg-slate-900 rounded-xl p-4 text-gray-300"
>
  ✅ {point}
</li>

        ))}

      </ul>

    </div>
  );
};

export default KeyPoints;