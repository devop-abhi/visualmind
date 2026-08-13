const LoadingCard = ({ title }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 animate-pulse">

      <h2 className="text-3xl font-bold">

        {title}

      </h2>

      <div className="h-5 bg-gray-700 rounded mt-8 w-full"></div>

      <div className="h-5 bg-gray-700 rounded mt-5 w-5/6"></div>

      <div className="h-5 bg-gray-700 rounded mt-5 w-4/6"></div>

    </div>
  );
};

export default LoadingCard;