const Card = ({ title, children }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        {title}
      </h2>

      {children}

    </div>
  );
};

export default Card;