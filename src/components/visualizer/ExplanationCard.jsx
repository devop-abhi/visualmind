const ExplanationCard = ({ explanation }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold">
        📖 AI Explanation
      </h2>

      <p className="text-gray-300 mt-6 leading-9 text-[17px]"className="text-gray-300 mt-6 leading-9 text-[17px]">
        {explanation}
      </p>

    </div>
  );
};

export default ExplanationCard;