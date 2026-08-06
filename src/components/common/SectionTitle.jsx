const SectionTitle = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <div className="text-center">

      {badge && (
        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
          {badge}
        </span>
      )}

      <h2 className="text-5xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionTitle;