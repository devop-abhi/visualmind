const Section = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`max-w-7xl mx-auto py-28 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;