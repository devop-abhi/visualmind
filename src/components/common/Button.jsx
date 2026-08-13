const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded-xl
        bg-cyan-500
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:bg-cyan-400
        hover:shadow-lg
        hover:shadow-cyan-500/40
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

export default Button;