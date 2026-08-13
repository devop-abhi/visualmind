const Section = ({
  children,
  className = "",
}) => {
  return (
    <section
      className={`max-w-7xl mx-auto py-12 md:py-16 px-6 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;